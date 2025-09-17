import { Router } from 'express'
import { body } from 'express-validator'
import {
  createAccount,
  getUser,
  getUserByHandle,
  login,
  searchByHandle,
  updateProfile,
  uploadImage,
} from './handlers'
import { authenticate } from './middleware/auth'
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

router.get('/user', authenticate, getUser)
router.patch(
  '/user',
  body('handle').notEmpty().withMessage('Nombre de usuario no válido'),
  handleInputErrors,
  authenticate,
  updateProfile
)

router.post('/user/image', authenticate, uploadImage)
router.get('/:handle', getUserByHandle)
router.post(
  '/search',
  body('handle').notEmpty().withMessage('El handle no puede ir vacío'),
  handleInputErrors,
  searchByHandle,
)

export default router
