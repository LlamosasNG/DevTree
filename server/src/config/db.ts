import color from 'colors'
import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI)
    const url = `${connection.host}:${connection.port}`
    console.log(color.magenta.bold.italic(`MongoDB connected: ${url}`))
  } catch (error) {
    console.log(color.bgRed.bold.italic(error.message))
    process.exit(1)
  }
}
