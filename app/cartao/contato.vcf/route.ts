import { NextResponse } from "next/server";
import { hasProfessionalContact, siteConfig } from "@/lib/site";

export function GET() {
  if (!hasProfessionalContact) {
    return new NextResponse("Contato profissional não configurado.", { status: 404 });
  }

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Müller;Sandro;;;",
    `FN:${siteConfig.name}`,
    `TITLE:${siteConfig.role}`,
    siteConfig.contacts.email ? `EMAIL;TYPE=INTERNET:${siteConfig.contacts.email}` : null,
    siteConfig.contacts.whatsappInternational ? `TEL;TYPE=CELL:+${siteConfig.contacts.whatsappInternational}` : null,
    `URL:${siteConfig.siteUrl}`,
    "END:VCARD",
  ].filter(Boolean);

  return new NextResponse(lines.join("\r\n"), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="sandro-muller.vcf"',
    },
  });
}
