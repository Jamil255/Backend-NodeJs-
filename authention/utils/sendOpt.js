const sendOpt = new Promise(async (resolve, reject) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'dana.ziemann@ethereal.email',
        pass: '8NrVeYGdJP6vDrfEtB',
      },
    })

    const response = transporter.sendMail({
      from: 'margarette.murray95@ethereal.email',
      to: 'jamilafzal255@gmail.com',
      subject: 'Email Verfication',
      html: `<h1> OTP CODE : 50505050 </h1>`,
    })
  } catch (error) {
    console.log(error.message)
  }
})

export default sendOpt
