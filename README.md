 🧾 Sistema de Inventarios (Angular + Spring Boot + MySQL)

📌 Descripción

Aplicación web fullstack para la gestión de inventarios. Permite visualizar productos almacenados con información como descripción, precio y existencias.

Este proyecto fue desarrollado utilizando **Angular** para el frontend y **Spring Boot** para el backend, consumiendo una API REST conectada a una base de datos MySQL.

---

🚀 Tecnologías utilizadas

🔹 Frontend

* Angular
* TypeScript
* Bootstrap

 🔹 Backend

* Spring Boot
* Java
* JPA / Hibernate

🔹 Base de Datos

* MySQL

---

⚙️ Funcionalidades

* 📦 Listado de productos
* 🔗 Consumo de API REST
* 💾 Conexión a base de datos MySQL
* 📊 Visualización dinámica en tabla

---

🛠️ Instalación y ejecución

🔹 Backend (Spring Boot)

1. Abrir el proyecto en IntelliJ o STS
2. Configurar `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/inventario_db
spring.datasource.username=TU_USUARIO
spring.datasource.password=TU_PASSWORD
spring.jpa.hibernate.ddl-auto=update
```

3. Ejecutar la aplicación

👉 Corre en: `http://localhost:8080`

---

🔹 Frontend (Angular)

1. Entrar a la carpeta del proyecto Angular:

```bash
cd inventario-app
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar:

```bash
ng serve
```

👉 Corre en: `http://localhost:4200`

---

🗄️ Base de Datos

El archivo de la base de datos se encuentra en:

```
inventario_db_producto.sql
```

Para importarla:

1. Abrir MySQL Workbench
2. Crear una base de datos (ej: `inventario_db`)
3. Importar el archivo `.sql`

---

📷 Capturas

(Aquí puedes agregar screenshots de tu app)

---

👨‍💻 Autor

Desarrollado por **Alberto Gonzalez**

---

🌟 Notas

Este proyecto forma parte de mi aprendizaje en desarrollo fullstack utilizando Angular y Spring Boot.

👨‍💻 Autor

Alberto Gonzalez
GitHub: https://github.com/TheCreep115
