const SendOTP = async (email) => {
  try {
    // const { email, password } = request.body
    console.log('email', email)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'margarette.murray95@ethereal.email',
        pass: 'FQUrrv23KK2wtcFjkT',
      },
    })

    const response = transporter.sendMail({
      from: 'margarette.murray95@ethereal.email',
      to: email,
      subject: 'Email Verfication',
      html: `<h1> OTP CODE : 50505050 </h1>`,
    })
  } catch (error) {
    response.json({
      message: error.message,
      status: false,
      data: [],
    })
  }
}
