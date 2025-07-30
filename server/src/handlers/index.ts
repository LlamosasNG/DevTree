import { Request, Response } from 'express'
import slug from 'slug'
import User from '../models/User'
import { checkPassword, hashPassword } from '../utils/auth'
import { generateJWT } from '../utils/jwt'

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
  const token = generateJWT({ id: user._id })
  res.status(200).send(token)
}

export const getUser = async (req: Request, res: Response) => {
  res.status(200).send(req.user)
}

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { description } = req.body
    const handle = slug(req.body.handle, '')
    const handleExist = await User.findOne({ handle })
    if (handleExist && handleExist.email !== req.user.email) {
      const error = new Error('Nombre de usuario no disponible')
      res.status(409).json({ error: error.message })
      return
    }
    //Actualizar perfil del usuario
    req.user.description = description
    req.user.handle = handle
    req.user.save()
    res.status(200).send('Perfil actualizado correctamente')
  } catch (e) {
    const error = new Error('Hubo un error')
    res.status(500).json({ error: error.message })
  }
}
