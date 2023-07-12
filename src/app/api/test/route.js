import { NextResponse } from "next/server";
export async function POST() {
  // const body = req.body;
  // console.log(body);
  // if (!body || !body.message) {
  //   // Sends a HTTP bad request error code
  //   return res.status(400).json({ data: "First or last name not found" });
  // }
  return NextResponse.json({ data: "hello world" });
  // res.status(200).json({ data: "hello world" });
}
