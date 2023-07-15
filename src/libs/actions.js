"use server";
import { submitContact } from "./firebase";
export async function submitContactForm({
  fullName,
  number,
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
    return { success: true, message: "", first };
  } catch (err) {
    return { success: true, message: err.message };
  }
}
