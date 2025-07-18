import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import { corsConfig } from './config/cors'
import { connectDB } from './config/db'
import router from './router'

// Initialize express app
const app = express()

// Enable CORS with the specified configuration
app.use(cors(corsConfig))

// Connect to the database
connectDB()

// Middleware to parse JSON bodies
app.use(express.json())

// Middleware to parse URL-encoded bodies
app.use('/api', router)

export default app
