import { NextRequest, NextResponse } from 'next/server'
import { sendEmail, EmailData } from '../../../lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message, language, preferredDate, preferredTime } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Prepare email data
    const emailData: EmailData = {
      name: name.trim(),
      email: email.trim(),
      company: company?.trim(),
      phone: phone?.trim(),
      message: message.trim(),
      language: language || 'en', // Default to English if not provided
      preferredDate: preferredDate?.trim(),
      preferredTime: preferredTime?.trim(),
    }

    // Send email
    await sendEmail(emailData)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

