# DevTree - Administrador de Redes Sociales (Stack MERN)

<div align="center">
  <img src="https://raw.githubusercontent.com/llamosasng/DevTree/master/client/public/logo.svg" alt="DevTree Logo" width="250"/>
  <h1> </h1>
  <p><b>Centraliza todas tus Redes Sociales en un solo Enlace</b></p>
  <br>
</div>

**DevTree** es una aplicación web que te permite agrupar y compartir todos tus perfiles de redes sociales a través de un único enlace personalizado. Es la herramienta perfecta para desarrolladores, creadores de contenido y cualquier persona que quiera simplificar la forma en que comparte su presencia en línea.

Con DevTree, puedes crear un perfil único con tu "handle" (nombre de usuario), añadir enlaces a tus redes sociales como TikTok, Facebook, Instagram, YouTube, GitHub, y más, y personalizar el orden en que aparecen.

---

## 🚀 Características Principales

- **Perfil Personalizado:** Registra tu propio "handle" para tener una URL única y fácil de recordar (`devtree.com/tunombre`).
- **Agregador de Enlaces:** Añade y gestiona enlaces a todas tus redes sociales desde un panel de administración intuitivo.
- **Arrastrar y Soltar (Drag and Drop):** Organiza el orden de tus enlaces fácilmente para destacar los perfiles que prefieras.
- **Personalización de Perfil:** Añade una descripción y una imagen de perfil para darle un toque personal a tu página.
- **Búsqueda de Perfiles:** Busca y explora los perfiles de otros usuarios en la plataforma.
- **Autenticación Segura:** Sistema de registro e inicio de sesión con JWT (JSON Web Tokens) para proteger tu cuenta.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con un stack moderno de JavaScript, tanto en el frontend como en el backend.

### **Frontend**

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white" alt="React Query">
</div>

- **React:** Biblioteca para construir interfaces de usuario interactivas.
- **Vite:** Herramienta de desarrollo frontend ultrarrápida.
- **TypeScript:** Superset de JavaScript que añade tipado estático.
- **Tailwind CSS:** Framework de CSS para un diseño rápido y personalizable.
- **React Query:** Para la gestión del estado del servidor, fetching, caching y actualización de datos.
- **React Hook Form:** Manejo de formularios.
- **Axios:** Cliente HTTP para realizar peticiones a la API.
- **dnd-kit:** Para la funcionalidad de arrastrar y soltar.

### **Backend**

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white" alt="JWT">
</div>

- **Node.js & Express:** Entorno de ejecución y framework para construir la API REST.
- **TypeScript:** Para un desarrollo robusto y escalable en el lado del servidor.
- **MongoDB & Mongoose:** Base de datos NoSQL y ODM para modelar los datos de la aplicación.
- **JSON Web Tokens (JWT):** Para la autenticación y gestión de sesiones.
- **Bcrypt:** Para el hasheo seguro de contraseñas.
- **Cloudinary:** Para el almacenamiento y gestión de imágenes en la nube.
- **Formidable:** Para el manejo de la subida de archivos.

---

## 🏁 Cómo Empezar

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

### **Prerrequisitos**

- Node.js (v18 o superior)
- npm / yarn / pnpm
- MongoDB
- Una cuenta en Cloudinary

### **Instalación**

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/LlamosasNG/DevTree.git
    cd DevTree
    ```

2.  **Configura el Servidor:**

    - Navega a la carpeta `server`: `cd server`
    - Instala las dependencias: `npm install`
    - Crea un archivo `.env` en la raíz de la carpeta `server` y añade las siguientes variables de entorno:
      ```env
      MONGO_URI=tu_uri_de_mongodb
      PORT=4000
      FRONTEND_URL=http://localhost:5173
      JWT_SECRET=tu_secreto_jwt
      CLOUDINARY_CLOUD_NAME=tu_cloud_name
      CLOUDINARY_API_KEY=tu_api_key
      CLOUDINARY_API_SECRET=tu_api_secret
      ```
    - Ejecuta el servidor: `npm run server`

3.  **Configura el Cliente:**
    - Abre una nueva terminal y navega a la carpeta `client`: `cd client`
    - Instala las dependencias: `npm install`
    - Crea un archivo `.env.local` en la raíz de la carpeta `client` y añade la URL de tu API:
      ```env
      VITE_URL_API=http://localhost:4000/api
      ```
    - Ejecuta la aplicación de React: `npm run dev`

¡Y listo! Ahora puedes abrir `http://localhost:5173` en tu navegador para ver la aplicación en funcionamiento.

---

## 👨‍💻 Autor

_Noe Ramses Gonzalez Llamosas - <a href='https://github.com/LlamosasNG'>LlamosasNG</a>_
