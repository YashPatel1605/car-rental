import { NextResponse } from 'next/server'
import { transporter } from '@/lib/mailer'

export async function POST(req: Request) {
	try {
		const body = await req.json()

		const { firstName, lastName, email, phone, subject, message } = body

		const mailOptions = {
			from: process.env.SMTP_EMAIL,
			to: process.env.ADMIN_EMAIL,
			subject: `New Contact Form Submission - ${subject}`,
			html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
		}

		await transporter.sendMail(mailOptions)

		return NextResponse.json({
			success: true,
			message: 'Email sent successfully',
		})
	} catch (error) {
		console.error(error)

		return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 })
	}
}
