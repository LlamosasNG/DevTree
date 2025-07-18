import { Router } from 'express'
import { body } from 'express-validator'
import { createAccount, login } from './handlers'
import { handleInputErrors } from './middleware/validation'

const router = Router()

// Routing
router.post(
  '/auth/register',
  body('handle').notEmpty().withMessage('Nombre de usuario no válido'),
  body('name').notEmpty().withMessage('El nombre es obligatorio'),
  body('email').isEmail().withMessage('Correo electrónico no válido'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres'),
  handleInputErrors,
  createAccount
)

router.post(
  '/auth/login',
  body('email').isEmail().withMessage('Datos inválidos'),
  body('password').isLength({ min: 6 }).withMessage('Datos inválidos'),
  handleInputErrors,
  login
)

export default router
