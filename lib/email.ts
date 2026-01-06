import nodemailer from 'nodemailer'

export interface EmailData {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
  language?: string
  preferredDate?: string
  preferredTime?: string
}

// Format time helper
function formatTime(time: string): string {
  const [hours, minutes] = time.split(':')
  const hour = parseInt(hours)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  return `${displayHour}:${minutes} ${ampm}`
}

// Format date helper - dd/MM/yyyy format
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

// Format date for email display (full format)
function formatDateFull(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function sendEmail(data: EmailData) {
  // Create transporter for Google Workspace (Gmail)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports (587 uses TLS)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  // Verify connection
  await transporter.verify()

  // Get language display name
  const languageDisplay = data.language === 'de' ? 'German (Deutsch)' : data.language === 'en' ? 'English' : data.language || 'Unknown'

  // Email content
  const mailOptions = {
    from: `"${data.name}" <${process.env.EMAIL_USER || 'noreply@sortask.com'}>`,
    replyTo: data.email,
    to: process.env.EMAIL_TO || 'office@sortask.com',
    subject: `${data.preferredDate && data.preferredTime ? 'Consultation Request' : 'New Contact Form Submission'}${data.company ? ` from ${data.company}` : ''}${data.language ? ` (${languageDisplay})` : ''}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          ${data.company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${data.company}</p>` : ''}
          ${data.phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ''}
          ${data.language ? `<p style="margin: 10px 0;"><strong>Language:</strong> ${languageDisplay} (${data.language.toUpperCase()})</p>` : ''}
          ${data.preferredDate ? `<p style="margin: 10px 0;"><strong>Preferred Date:</strong> ${formatDateFull(data.preferredDate)} (${formatDate(data.preferredDate)})</p>` : ''}
          ${data.preferredTime ? `<p style="margin: 10px 0;"><strong>Preferred Time:</strong> ${formatTime(data.preferredTime)}</p>` : ''}
        </div>
        
        <div style="background: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #4F46E5;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This email was sent from the Sortask website contact form.</p>
          <p>Reply directly to this email to respond to ${data.name}.</p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ''}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.language ? `Language: ${languageDisplay} (${data.language.toUpperCase()})` : ''}
${data.preferredDate ? `Preferred Date: ${formatDateFull(data.preferredDate)} (${formatDate(data.preferredDate)})` : ''}
${data.preferredTime ? `Preferred Time: ${formatTime(data.preferredTime)}` : ''}

Message:
${data.message}
    `.trim(),
  }

  // Send email
  const info = await transporter.sendMail(mailOptions)
  return info
}

