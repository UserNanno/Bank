# National Bank Peru - Backend API

## Descripción
Este proyecto es el backend de **National Bank Peru**, desarrollado en **Java** con **Spring Boot**, siguiendo el patrón **MVC** y principios **SOLID** para una arquitectura limpia y escalable. Proporciona una API REST para la gestión de cuentas bancarias, pagos de servicios, transacciones y usuarios.

## Tecnologías Utilizadas
- **Java 22**
- **Spring Boot 3.2.5**
- **Spring Data JPA** (Para persistencia de datos)
- **MySQL** (Base de datos relacional)
- **Lombok** (Reducción de código boilerplate)
- **Docker** (Contenedorización del servicio)
- **Maven** (Gestión de dependencias y construcción del proyecto)

## Estructura del Proyecto
```
National_Bank/
│   .gitignore
│   docker-compose.yml
│   Dockerfile
│   pom.xml
│   README.md
│
├── src/
│   ├── main/java/com/nationalbank/nationalbankperu/
│   │   ├── NationalbankperuApplication.java  # Punto de entrada
│   │   ├── controller/   # Controladores REST
│   │   ├── model/        # Modelos de base de datos
│   │   ├── repository/   # Repositorios JPA
│   │   ├── service/      # Servicios de lógica de negocio
│   │   ├── persistence/  # DAO (Acceso a datos)
│   │   ├── resources/    # Configuración y archivos estáticos
│
├── test/  # Pruebas unitarias
└── target/ # Archivos compilados y ejecutables
```

## Instalación y Configuración
### Requisitos Previos
- **Java 22**
- **Maven**
- **Docker (opcional)**
- **MySQL** instalado y configurado

### Pasos para Ejecutar el Proyecto
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/UserNanno/Bank.git
   cd national-bank-peru
   ```
2. Configurar la base de datos en `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/nationalbank
   spring.datasource.username=root
   spring.datasource.password=root
   spring.jpa.hibernate.ddl-auto=update
   ```
3. Construir y ejecutar el proyecto con Maven:
   ```sh
   mvn spring-boot:run
   ```
4. Alternativamente, ejecutar con Docker:
   ```sh
   docker-compose up --build
   ```

## Endpoints Principales
### Gestión de Usuarios
| Método | Endpoint | Descripción |
|--------|---------|-------------|
| GET | `/users/{id}` | Obtener usuario por ID |
| POST | `/users` | Crear un nuevo usuario |
| PUT | `/users/{id}` | Actualizar un usuario |
| DELETE | `/users/{id}` | Eliminar un usuario |

### Gestión de Cuentas Bancarias
| Método | Endpoint | Descripción |
|--------|---------|-------------|
| GET | `/accounts/{id}` | Obtener cuenta bancaria |
| POST | `/accounts` | Crear cuenta |
| PUT | `/accounts/{id}` | Actualizar cuenta |
| DELETE | `/accounts/{id}` | Eliminar cuenta |

## Buenas Prácticas y Principios Aplicados
- **SOLID**: Código modular y mantenible.
- **DTOs**: Se utiliza para separar la capa de presentación y la de negocio.
- **Spring Data JPA**: Uso de repositorios para acceso eficiente a la base de datos.
- **Gestión de errores global** con `@ControllerAdvice`.
- **Validaciones con `@Valid` y `@NotNull`** para evitar datos inconsistentes.

---
**© 2025 National Bank Peru. Todos los derechos reservados.**

