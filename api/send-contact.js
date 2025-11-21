
// api/send-contact.js — CommonJS wrapper with dynamic ESM import for Resend
module.exports = async (req, res) => {
  const json = (code, obj) => {
    res.statusCode = code;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(obj));
  };

  if (req.method !== "POST") {
    return json(405, { ok: false, error: "Méthode non autorisée" });
  }

  // Robust body parse
  let body = req.body;
  if (!body) {
    try {
      body = await new Promise((resolve, reject) => {
        let data = "";
        req.on("data", c => (data += c));
        req.on("end", () => {
          try { resolve(JSON.parse(data || "{}")); }
          catch { resolve({}); }
        });
        req.on("error", reject);
      });
    } catch {
      body = {};
    }
  } else if (typeof body === "string") {
    try { body = JSON.parse(body); } catch {}
  }

  const required = ["NomPrenom", "Telephone", "Capacite"];
  for (const k of required) {
    if (!body[k]) return json(400, { ok: false, error: "Champ manquant: " + k });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) return json(400, { ok: false, error: "RESEND_API_KEY manquante" });

  const { Resend } = await import("resend");
  const resend = new Resend(RESEND_API_KEY);

  const from = (process.env.MAIL_FROM && process.env.MAIL_FROM.trim())
    ? process.env.MAIL_FROM
    : "Night Vision <onboarding@resend.dev>";

  const to = [
    "marco@nightvisionclub.com",
    "gaetan@nightvisionclub.com",
    "contact@nightvisionclub.com",
  ];

  const subject = "Nouveau contact — Night Vision";
  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6">
      <h2>Nouveau message</h2>
      <ul>
        <li><strong>Nom Prénom</strong>: ${body.NomPrenom || "-"}</li>
        <li><strong>Fonction</strong>: ${body.Fonction || "-"}</li>
        <li><strong>Établissement</strong>: ${body.Etablissement || "-"}</li>
        <li><strong>Type</strong>: ${body.Type || "-"}</li>
        <li><strong>Ville</strong>: ${body.Ville || "-"}</li>
        <li><strong>Capacité</strong>: ${body.Capasite || body.Capacite || "-"}</li>
        <li><strong>Téléphone</strong>: ${body.Telephone || "-"}</li>
        <li><strong>Email</strong>: ${body.Email || "-"}</li>
      </ul>
      ${body.Message ? `<p><strong>Message</strong><br/>${String(body.Message).replace(/\n/g,"<br/>")}</p>` : ""}
    </div>
  `;

  try {
    const result = await resend.emails.send({ from, to, subject, html });
    if (result?.error) return json(502, { ok: false, error: String(result.error) });
    return json(200, { ok: true });
  } catch (e) {
    return json(500, { ok: false, error: e?.message || "Envoi impossible" });
  }
};
