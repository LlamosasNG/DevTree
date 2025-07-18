import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import slug from 'slug'
import User from '../models/User'
import { checkPassword, hashPassword } from '../utils/auth'

export const createAccount = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const userExist = await User.findOne({ email })
  if (userExist) {
    const error = new Error('El correo electrónico ya está en uso')
    res.status(409).json({ error: error.message })
    return
  }

  const handle = slug(req.body.handle, '')
  const handleExist = await User.findOne({ handle })
  if (handleExist) {
    const error = new Error('Nombre de usuario no disponible')
    res.status(409).json({ error: error.message })
    return
  }

  const user = new User(req.body)
  user.password = await hashPassword(password)
  user.handle = handle

  await user.save()
  res.status(201).send('Usuario registrado correctamente')
}

export const login = async (req: Request, res: Response) => {
  // Validar si el usuario existe
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    const error = new Error('El usuario no existe')
    res.status(404).json({ error: error.message })
    return
  }

  // Validar la contraseña
  const isPasswordCorrect = await checkPassword(password, user.password)
  if (!isPasswordCorrect) {
    const error = new Error('Contraseña incorrecta')
    res.status(401).json({ error: error.message })
    return
  }
  res.status(200).send('Usuario autenticado correctamente')
}
