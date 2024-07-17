import { getServiceLabels } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL;

export async function POST(req, res) {
  const body = await req.json();
  console.log(body);

  const { fullName, email, items: selectedItems, budget, message } = body;
  const subject = "Thank You for Contacting UI Coders";
  const selectedLabels = getServiceLabels(selectedItems);

  const emailContent = (
    <>
      <h1 style={{ color: "#333", fontSize: "24px" }}>
        Thank You for Contacting UI Coders, {fullName}!
      </h1>
      <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
        We appreciate you reaching out to us. Below are the details you
        provided:
      </p>
      <ul style={{ fontSize: "16px", lineHeight: "1.5" }}>
        <li>
          <strong>Full Name:</strong> {fullName}
        </li>
        <li>
          <strong>Email:</strong> {email}
        </li>
        <li>
          <strong>Reason for Contact:</strong> {selectedLabels.join(", ")}
        </li>
        <li>
          <strong>Budget Range:</strong> ${budget[0]} - ${budget[1]}
        </li>
        <li>
          <strong>Message:</strong> {message}
        </li>
      </ul>
      <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
        Our team will review your request and get back to you shortly.
      </p>
      <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
        Best regards,
        <br />
        The UI Coders Team
      </p>
    </>
  );

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [email],
      bcc: fromEmail,
      subject: subject,
      react: emailContent
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send email." });
  }
}
