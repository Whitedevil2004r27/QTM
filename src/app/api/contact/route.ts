import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ["name", "email", "message"];
    if (required.some((key) => typeof body[key] !== "string" || !body[key].trim())) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }
    // Demo endpoint only: connect a mail provider or CRM here before launch.
    // Never report an enquiry as delivered to QTM until a real provider is configured.
    console.info("QTM contact form demo submission", {
      name: String(body.name).slice(0, 120),
      email: String(body.email).slice(0, 200),
      company: String(body.company ?? "").slice(0, 200),
      mineral: String(body.mineral ?? "").slice(0, 120),
    });
    return NextResponse.json({ ok: true, demo: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}