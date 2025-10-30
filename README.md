# 🚀 Proyecto Fullstack con React y Node.js utilizando TypeScript  

Este repositorio contiene un proyecto fullstack construido con React en el frontend y Node.js + Express en el backend, utilizando TypeScript para tipado estático.


## 📦 Requisitos para levantar el proyecto

1.  Clona el repositorio: 
	```
	git clone https://github.com/tuusuario/tu-repo.git
	cd nombre-del-proyecto
	```
2. Instala las dependencias:
	```
	npm install
	```

3. Crea un archivo `.env` en la raíz del proyecto basado en `.env.example` y completa los valores necesarios.

4. Levanta el servidor en modo desarrollo:
	```
	npm run dev
	```

## 🧪 Tecnologías utilizadas

-   💻 Node.js con Express
    
-   💻 TypeScript
    
-   🗄️ MongoDB como base de datos
    
-   🔐 Variables de entorno con dotenv

## 🔐 Variables de entorno
Crea un archivo `.env` en la raíz del proyecto. Las variables necesarias incluyen:

```
URL_DB=mongodb+srv://<usuario>:<clave>@cluster.mongodb.net/<basededatos>
```

## 📁 Estructura del proyecto

```
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.ts
├── .env.example
├── package.json
├── tsconfig.json
└── README.md

```

## 🧑‍💻 Autor

By Raúl Sánchez