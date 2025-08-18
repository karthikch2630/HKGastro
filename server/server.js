const express = require('express');
const nodemailer = require('nodemailer');
const sanitizeHtml = require('sanitize-html');
const validator = require('validator');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Configure CORS to allow requests from your frontend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173', 'https://hk-gastro.vercel.app/'); // Replace with your frontend URL
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  next();
});

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Example: Gmail SMTP server
  port: 465, // Use 587 for TLS
  secure: true, // Use true for port 465, false for port 587
  auth: {
    user: 'Karthikchitti55@gmail.com', // Replace with your SMTP username
    pass: 'gblmelgbogpmcreq' // Replace with your SMTP password or App Password
  }
});

// Test SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to take messages');
  }
});

// Function to sanitize input
const sanitizeInput = (input) => {
  return sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {}
  });
};

// Test endpoint to verify server is running
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// POST endpoint to handle appointment email
app.post('/api/send-appointment-email', async (req, res) => {
  try {
    const { fullName, email, phone, service, preferredDate, preferredTime, message } = req.body;

    // Log incoming request for debugging
    console.log('Received appointment request:', req.body);

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'service', 'preferredDate', 'preferredTime'];
    for (const field of requiredFields) {
      if (!req.body[field] || req.body[field].trim() === '') {
        console.error(`Validation error: Missing or empty field: ${field}`);
        return res.status(400).json({ success: false, message: `Missing required field: ${field}` });
      }
    }

    // Sanitize inputs
    const sanitizedData = {
      fullName: sanitizeInput(fullName),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      service: sanitizeInput(service),
      preferredDate: sanitizeInput(preferredDate),
      preferredTime: sanitizeInput(preferredTime),
      message: message ? sanitizeInput(message) : ''
    };

    // Validate email format
    if (!validator.isEmail(sanitizedData.email)) {
      console.error('Validation error: Invalid email address:', sanitizedData.email);
      return res.status(400).json({ success: false, message: 'Invalid email address' });
    }

    // Validate date format (YYYY-MM-DD)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(sanitizedData.preferredDate)) {
      console.error('Validation error: Invalid date format:', sanitizedData.preferredDate);
      return res.status(400).json({ success: false, message: 'Invalid date format' });
    }

    // Validate time format (HH:MM AM/PM)
    if (!/^\d{2}:\d{2}\s[AP]M$/.test(sanitizedData.preferredTime)) {
      console.error('Validation error: Invalid time format:', sanitizedData.preferredTime);
      return res.status(400).json({ success: false, message: 'Invalid time format' });
    }

    // Email configuration
    const hospitalEmail = 'appointments@HKGastro.com';
    const fromEmail = 'no-reply@HKGastro.com';

    // Email to User (Patient)
    const userMailOptions = {
      from: `"HKGastro Appointment System" <${fromEmail}>`,
      to: sanitizedData.email,
      subject: 'Appointment Confirmation at HKGastro',
      html: `
        <h2>Appointment Confirmation</h2>
        <p>Dear ${sanitizedData.fullName},</p>
        <p>Thank you for scheduling an appointment with HKGastro. We have received your request, and our team will contact you within 24 hours to confirm the details. Please review your appointment information below:</p>
        <ul>
          <li><strong>Date:</strong> ${sanitizedData.preferredDate}</li>
          <li><strong>Time:</strong> ${sanitizedData.preferredTime}</li>
          <li><strong>Service:</strong> ${sanitizedData.service}</li>
          <li><strong>Location:</strong> HKGastro Clinic, 123 Main Street, Suite 400, Anytown</li>
        </ul>
        ${sanitizedData.message ? `<p><strong>Additional Message:</strong> ${sanitizedData.message}</p>` : ''}
        <p><strong>Before Your Appointment:</strong></p>
        <ul>
          <li>Arrive 15 minutes early</li>
          <li>Bring your ID and insurance card</li>
          <li>List all current medications</li>
        </ul>
        <p>If you need to reschedule or cancel, please contact us at +1 (555) 0124 or reply to this email at least 24 hours in advance.</p>
        <p>We look forward to assisting you!</p>
        <p>Sincerely,<br>HKGastro Team<br>appointments@HKGastro.com<br>+1 (555) 0124</p>
      `,
      text: `
        Appointment Confirmation\n\n
        Dear ${sanitizedData.fullName},\n\n
        Thank you for scheduling an appointment with HKGastro. We have received your request, and our team will contact you within 24 hours to confirm the details. Please review your appointment information below:\n\n
        - Date: ${sanitizedData.preferredDate}\n
        - Time: ${sanitizedData.preferredTime}\n
        - Service: ${sanitizedData.service}\n
        - Location: HKGastro Clinic, 123 Main Street, Suite 400, Anytown\n
        ${sanitizedData.message ? `\nAdditional Message: ${sanitizedData.message}\n` : ''}
        \nBefore Your Appointment:\n
        - Arrive 15 minutes early\n
        - Bring your ID and insurance card\n
        - List all current medications\n\n
        If you need to reschedule or cancel, please contact us at +1 (555) 0124 or reply to this email at least 24 hours in advance.\n\n
        We look forward to assisting you!\n\n
        Sincerely,\nHKGastro Team\nappointments@HKGastro.com\n+1 (555) 0124
      `
    };

    // Email to Hospital
    const hospitalMailOptions = {
      from: `"HKGastro Appointment System" <${fromEmail}>`,
      to: hospitalEmail,
      subject: `New Appointment Request: ${sanitizedData.fullName}`,
      html: `
        <h2>New Appointment Request</h2>
        <p>A new appointment request has been received. Please review the details below and follow up with the patient within 24 hours to confirm:</p>
        <ul>
          <li><strong>Patient Name:</strong> ${sanitizedData.fullName}</li>
          <li><strong>Email:</strong> ${sanitizedData.email}</li>
          <li><strong>Phone:</strong> ${sanitizedData.phone}</li>
          <li><strong>Service:</strong> ${sanitizedData.service}</li>
          <li><strong>Preferred Date:</strong> ${sanitizedData.preferredDate}</li>
          <li><strong>Preferred Time:</strong> ${sanitizedData.preferredTime}</li>
        </ul>
        ${sanitizedData.message ? `<p><strong>Additional Message:</strong> ${sanitizedData.message}</p>` : ''}
        <p><strong>Action Required:</strong></p>
        <ul>
          <li>Contact the patient to confirm or reschedule</li>
          <li>Update the appointment system</li>
          <li>Ensure necessary resources are prepared</li>
        </ul>
        <p>Sincerely,<br>HKGastro Appointment System</p>
      `,
      text: `
        New Appointment Request\n\n
        A new appointment request has been received. Please review the details below and follow up with the patient within 24 hours to confirm:\n\n
        - Patient Name: ${sanitizedData.fullName}\n
        - Email: ${sanitizedData.email}\n
        - Phone: ${sanitizedData.phone}\n
        - Service: ${sanitizedData.service}\n
        - Preferred Date: ${sanitizedData.preferredDate}\n
        - Preferred Time: ${sanitizedData.preferredTime}\n
        ${sanitizedData.message ? `\nAdditional Message: ${sanitizedData.message}\n` : ''}
        \nAction Required:\n
        - Contact the patient to confirm or reschedule\n
        - Update the appointment system\n
        - Ensure necessary resources are prepared\n\n
        Sincerely,\nHKGastro Appointment System
      `
    };

    // Send emails
    console.log('Sending email to user:', sanitizedData.email);
    await transporter.sendMail(userMailOptions);
    console.log('Sending email to hospital:', hospitalEmail);
    await transporter.sendMail(hospitalMailOptions);

    res.status(200).json({ success: true, message: 'Appointment emails sent successfully' });
  } catch (error) {
    console.error('Error processing appointment request:', {
      message: error.message,
      stack: error.stack,
      requestBody: req.body
    });
    res.status(500).json({ success: false, message: `Failed to send emails: ${error.message}` });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});