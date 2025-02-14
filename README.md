**Documentación de la Estructura del Proyecto**

# 1. Introducción

Este documento detalla la estructura del proyecto backend desarrollado en Java utilizando el framework Spring Boot. Se describen los directorios y archivos de código fuente, así como las configuraciones realizadas de acuerdo con la arquitectura de software establecida.

---

# 2. Importación de Dependencias

Se configuró el archivo `pom.xml` de **Maven** para incluir las dependencias necesarias:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.5</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.nationalbank</groupId>
    <artifactId>nationalbankperu</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>nationalbankperu</name>
    <description>Demo project for Spring Boot</description>
    <properties>
        <java.version>22</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-j</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

Esta configuración incluye:

- **Spring Boot Starter Data JPA**: Para manejo de persistencia con JPA.
- **Spring Boot Starter Web**: Para la creación de APIs REST.
- **Spring Boot DevTools**: Para facilitar el desarrollo con recarga automática.
- **Conector MySQL**: Para la conexión con la base de datos MySQL.
- **Lombok**: Para reducir la cantidad de código boilerplate.
- **Spring Boot Starter Test**: Para pruebas unitarias.

---

# 3. Creación del Proyecto Web

El proyecto fue creado utilizando **Spring Boot** en un entorno de desarrollo **IntelliJ IDEA**. Se generó la estructura básica con la siguiente organización:

```
National_Bank/
│   .gitignore
│   docker-compose.yml
│   Dockerfile
│   HELP.md
│   mvnw, mvnw.cmd
│   pom.xml
│   README.md
│
├── .idea/                  # Configuración del IDE (IntelliJ IDEA)
├── .mvn/wrapper/           # Archivos de Maven Wrapper
├── src/
│   ├── main/
│   │   ├── java/com/nationalbank/nationalbankperu/
│   │   │   ├── NationalbankperuApplication.java  # Clase principal de Spring Boot
│   │   │   │
│   │   │   ├── controller/   # Controladores REST
│   │   │   │   ├── BankAccountController.java
│   │   │   │   ├── ServicePaymentController.java
│   │   │   │   ├── TransactionController.java
│   │   │   │   ├── UserController.java
│   │   │   │
│   ├── test/  # Pruebas unitarias
│   │   ├── java/com/nationalbank/nationalbankperu/
│   │   │   ├── NationalbankperuApplicationTests.java
│
├── target/  # Archivos compilados y ejecutables
│   ├── nationalbankperu-0.0.1-SNAPSHOT.jar
│   ├── classes/
│   ├── static/
│   ├── test-classes/
│
└── generated-sources/, generated-test-sources/, surefire-reports/  # Archivos generados por Maven y reportes de pruebas
```

Se mantiene el formato de la estructura de directorios sin descuadrar el documento.

