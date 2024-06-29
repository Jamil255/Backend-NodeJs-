import { cloudinaryUploader } from '../config/cloudinaryConfig.js'
import imageModel from '../models/index.js'
import fs, { unlink } from 'fs'
export const imageUploaderFun = async (req, res) => {
  try {
    const uploadResult = await cloudinaryUploader.upload(req.file.path)
    await imageModel.create({
      url: uploadResult?.secure_url,
    })
    fs.unlink(req.file.path, function (error) {
      if (error) console.log(error.message)
      else console.log('done')
    })
    return res.status(200).json({
      message: 'image uploaded successfully',
      url: uploadResult?.secure_url,
      status: true,
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      url: [],
      status: false,
    })
  }
}
