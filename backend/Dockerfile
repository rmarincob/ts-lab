FROM node:16.10.0

# Establecemos el directorio de trabajo en /app
WORKDIR /app

# Copiamos los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos todo el código fuente al contenedor
COPY . .

# Compila el código TypeScript
RUN npm run build

#Establecemos argumentos por defecto
ARG DEFAULT_PORT=9000
ARG ENV_NAME=development

# Asegurarse de que los archivos .env están configurados correctamente
RUN mv .env.$ENV_NAME .env

# Establecemos una variable de entorno para el puerto en el que se ejecutará la aplicación (opcional)
ENV PORT=$DEFAULT_PORT

# Exponemos el puerto $PORT (o el que hayas configurado en la variable de entorno)
EXPOSE $PORT

# Ejecutamos el comando para iniciar la aplicación
CMD ["node", "dist/index.js"]