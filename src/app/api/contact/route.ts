import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Todos los campos son obligatorios" }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    })

    return NextResponse.json({ message: "Correo enviado con éxito" })
  } catch (error) {
    console.error("Error al enviar correo:", error)
    return NextResponse.json({ message: "Error al enviar correo" }, { status: 500 })
  }
}
