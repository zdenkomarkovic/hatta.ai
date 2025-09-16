import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    console.log("=== CONTACT FORM API CALLED ===");
    
    const { name, email, message, emailList } = await request.json();
    console.log("Form data received:", { name, email, message, emailList });

    // Validacija
    if (!name || !email || !message) {
      console.log("Validation failed - missing fields");
      return NextResponse.json(
        { message: "Sva polja su obavezna." },
        { status: 400 }
      );
    }

    // Email validacija
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Validation failed - invalid email");
      return NextResponse.json(
        { message: "Unesite validnu email adresu." },
        { status: 400 }
      );
    }

    // Proverite environment varijable
    console.log("Environment variables:");
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_PASS:", process.env.SMTP_PASS ? "***SET***" : "NOT SET");
    console.log("CONTACT_EMAIL:", process.env.CONTACT_EMAIL);

    // Konfiguracija nodemailer-a
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true za 465, false za ostale portove
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log("Transporter created, attempting to send email...");

    // Email sadržaj
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || "contact@hatta.ai",
      subject: `Nova poruka od ${name} - HATTA Contact Form`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">
            Nova poruka sa HATTA sajta
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <p><strong>Ime:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Email lista:</strong> ${emailList ? "Da" : "Ne"}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Poruka:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 5px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              Ova poruka je poslata sa HATTA kontakt forme.
            </p>
          </div>
        </div>
      `,
    };

    // Slanje email-a
    await transporter.sendMail(mailOptions);
    console.log("Main email sent successfully!");

    // Ako je korisnik hteo da se prijavi na email listu
    if (emailList) {
      console.log("Sending newsletter email...");
      const newsletterOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: "Dobrodošli u HATTA newsletter!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Dobrodošli u HATTA newsletter!</h2>
            <p>Hvala vam što ste se prijavili na našu email listu.</p>
            <p>Bićete obavešteni o najnovijim vestima, promocijama i proizvodima.</p>
            <p>Srdačan pozdrav,<br>HATTA tim</p>
          </div>
        `,
      };

      try {
        await transporter.sendMail(newsletterOptions);
        console.log("Newsletter email sent successfully!");
      } catch (newsletterError) {
        console.error("Newsletter email error:", newsletterError);
        // Ne vraćamo grešku jer je glavna poruka poslata
      }
    }

    console.log("=== CONTACT FORM SUCCESS ===");
    return NextResponse.json(
      { message: "Poruka je uspešno poslata!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("=== CONTACT FORM ERROR ===");
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Došlo je do greške. Pokušajte ponovo." },
      { status: 500 }
    );
  }
}