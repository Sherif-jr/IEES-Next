"use server";
import { sendEmail } from "./emailer";
import { submitContact } from "./firebase";
import { render } from "@react-email/render";
import DefaultWelcomeTemplate from "@/components/emails/DefaultWelcomeTemplate";
export async function submitContactForm({
  fullName,
  email,
  phoneNumber,
  countryCode,
  country,
  company,
  notes,
}) {
  const firstName = fullName.split(" ")[0];
  const phone = countryCode.concat(phoneNumber);
  try {
    await submitContact({
      name: fullName,
      phone,
      email,
      country,
      company,
      notes,
    });
    await sendEmail({
      to: email,
      subject: "We will contact you!",
      html: render(DefaultWelcomeTemplate({ userFirstname: firstName })),
    });
    return { success: true, message: "submitted", firstName };
  } catch (err) {
    console.log(err.message);
    return { success: false, message: err.message };
  }
}
