# Ecommerce Backend (NestJS)

Backend para un e-commerce con NestJS, MongoDB y JWT. Incluye autenticacion, roles, productos y reviews.

## Requisitos
- Node.js 18+
- MongoDB Atlas o Mongo local

## Configuracion
Crear un archivo `.env` en la raiz con:
```
MONGO_URI=mongodb+srv://USUARIO:CLAVE@CLUSTER.mongodb.net/ecommerce
JWT_SECRET=tu_secreto
JWT_EXPIRES=1h
```

## Instalar dependencias
```
npm install
```

## Ejecutar en desarrollo
```
npm run start:dev
```

## Scripts utiles
```
npm run build
npm run start
npm run start:dev
npm run start:prod
```

## Endpoints principales

### Auth
- `POST /auth/register`
- `POST /auth/login`

### Users
- `GET /users/profile` (protegido)

### Products
- `POST /products` (protegido, rol admin)
- `GET /products`

### Reviews
- `POST /reviews` (protegido)
- `GET /reviews/product/:id`

## Roles
- `user` por defecto
- `admin` para crear productos

Para probar `admin`, cambia el campo `role` del usuario en la base de datos y vuelve a hacer login.

## Notas
- Los endpoints protegidos requieren header `Authorization: Bearer <token>`.
- `.env` debe estar en `.gitignore`.
