const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL, PORT } = process.env
sgMail.setApiKey(SENDGRID_API_KEY)

const sendEmail = async (user) => {
  const { email, emailVerifyToken } = user
  const msg = {
    to: email, // Change to your recipient
    from: SENDGRID_SENDER_EMAIL, // Change to your verified sender
    subject: 'Welcome! Confirm Your Email',
    text: `Please, confirm your email address by clicking on the following link  http://localhost:${PORT}/api/users/verify/${emailVerifyToken}`,
    html: `Please, confirm your email address by clicking on the following link  http://localhost:${PORT}/api/users/verify/${emailVerifyToken}`,

  }
  try {
    await sgMail.send(msg).then(() => {
      console.log('Verification email sent')
      return true
    })
  } catch (error) {
    throw error
  }
}

module.exports = sendEmail
