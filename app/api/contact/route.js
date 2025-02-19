import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  const { name, surname, email, phone, companyName, companyReg, interests, message } = body;

  // Create transporter using environment variables (ensure these variables exist in your .env.local)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true", // true for port 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailData = {
    from: `"PAC Water" <${process.env.SMTP_USER}>`,
    to: "pacwater@gmail.com",
    subject: "Formular de contact PAC Water",
    text: `
      Nume: ${name} ${surname}
      Email: ${email}
      Telefon: ${phone}
      Numele companiei: ${companyName}
      Nr. înregistrare: ${companyReg}
      Interese: ${interests.join(", ")}
      Mesaj: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailData);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
