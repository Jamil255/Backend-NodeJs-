import { cloudinaryUploader } from '../config/cloudinaryConfig.js'
import fs from 'fs'
import { imageModel } from '../models/imageSchema.js'

const imageUpload = async (req, res) => {
  try {
    const uploadResult = await cloudinaryUploader.upload(req.file.path)
    await imageModel.create({
      url: uploadResult.secure_url,
    })
    fs.unlinkSync(req.file.path)
    res.json({
      data: {
        url: uploadResult.secure_url,
        name: uploadResult.original_filename,
      },
      status: true,
      message: 'Image upload successfully!',
    })
  } catch (error) {
    res.json({
      data: [],
      status: false,
      message: error.message,
    })
  }
}
export default imageUpload
