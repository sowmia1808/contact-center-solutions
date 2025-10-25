import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, companyname, email, phone, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: "in-v3.mailjet.com",
      port: 587,
      auth: {
        user: process.env.MJ_APIKEY_PUBLIC,
        pass: process.env.MJ_APIKEY_PRIVATE,
      },
    });

    // Send email to Admin
    await transporter.sendMail({
      from: `"Tegsoft Contact Center Enquiry" <${process.env.MJ_SENDER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Inquiry from Contact Form",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Company Name:</b> ${companyname}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // Auto-reply to Customer
  await transporter.sendMail({
  from: `"Support Team" <${process.env.MJ_SENDER}>`,
  to: email,
  subject: "We’ve received your inquiry",
  html: `
    <p>Hi ${name},</p>
    <p>Thank you for reaching out. We’ve received your inquiry and our team will contact you shortly.</p>
    
    <p><strong>Our Contact Details:</strong></p>
    <p> Techbee IT And Designs LLC</p>
    <p>R12 France Cluster,</p>
    <p>International City,</p>
    <p>Dubai,</p>
    <p>Phone: +971 50 123 4567</p>
    <p>Email: support@yourcompany.com</p>

    <p>Best regards,<br/>Customer Support Team</p>
  `,
});

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
