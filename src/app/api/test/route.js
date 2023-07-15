import { NextResponse, NextRequest } from "next/server";
import { render } from "@react-email/render";
import DefaultWelcomeTemplate from "@/components/emails/DefaultWelcomeTemplate";
import { sendEmail } from "@/libs/emailer";
export async function POST() {
  await sendEmail({
    to: "abdelrhman.sh.ahmed@gmail.com",
    subject: "First Email using NodeJs!!",
    html: render(DefaultWelcomeTemplate({ userFirstname: "Abdelrhman" })),
  });

  return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
}
// export async function POST(){
//   return NextResponse.json(body)
// }