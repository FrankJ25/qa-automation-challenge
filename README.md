#  QA Automation Challenge - UI + API

##  Descripción

Este proyecto implementa una solución completa de automatización de pruebas para:

* 🌐 **Frontend (UI)** usando **Playwright + Cucumber (BDD)**
* 🔗 **API** usando **Karate DSL**
* 📊 **Reportes** con **Allure**

El objetivo es validar flujos end-to-end y operaciones CRUD de usuarios, aplicando buenas prácticas de automatización.

---

## Estructura del Proyecto

```
ENCORACHALLENGE/
│
├── web-ui-automation/        # Automatización UI (Playwright + Cucumber)
│   ├── features/
│   ├── src/
│   ├── reports/
│   └── package.json
│
├── api-automation-karate/   # Automatización API (Karate DSL)
│   ├── src/test/java/
│   │   └── runners/
│   ├── src/test/resources/
│   │   ├── users/
│   │   ├── data/
│   │   └── schemas/
│   ├── allure-results/
│   └── pom.xml
│
└── README.md
```

---

##  Tecnologías utilizadas

### UI Automation

* Playwright
* Cucumber (BDD)
* TypeScript
* Page Object Model

### API Automation

* Karate DSL
* Maven
* Java (Runner)

### Reportes

* Allure Report

---

## 🌐 Pruebas UI

### 🔹 Funcionalidades cubiertas

* Login válido e inválido
* Agregar productos al carrito
* Validación de carrito
* Flujo completo de compra

### ▶️ Ejecutar pruebas UI

```bash
cd web-ui-automation
npm install
npm test
```

---

## 🔗 Pruebas API (ServeRest)

### 🔹 Funcionalidades cubiertas

* GET /usuarios → listar usuarios
* POST /usuarios → crear usuario
* GET /usuarios/{id} → buscar usuario
* PUT /usuarios/{id} → actualizar usuario
* DELETE /usuarios/{id} → eliminar usuario

### 🔹 Casos negativos

* Usuario duplicado
* Usuario inexistente

---

### ▶️ Ejecutar pruebas API

```bash
cd api-automation-karate
mvn clean test
```

---

## Reportes con Allure

### ▶ Generar reporte

```bash
mvn allure:report
```

### ▶️ Levantar reporte

```bash
mvn allure:serve
```

 Se abrirá en el navegador:

```
http://127.0.0.1:xxxx
```

---

##  Estrategia de Automatización

### UI

* Patrón: **Page Object Model (POM)**
* BDD con Cucumber (Given / When / Then)
* Separación de capas: features, steps, pages

### API

* Karate DSL (Gherkin + lógica integrada)
* Validaciones:

  * Status codes
  * Estructura JSON
  * Contenido dinámico
* Uso de:

  * Templates JSON
  * Datos dinámicos (UUID)

---

##  Buenas prácticas implementadas

* ✔ Datos dinámicos para evitar duplicidad
* ✔ Separación de responsabilidades
* ✔ Reutilización de templates
* ✔ Validaciones robustas (`contains`, `#string`)
* ✔ Escenarios positivos y negativos
* ✔ Reportes centralizados

---

##  Requisitos

* Node.js ≥ 18
* Java 17
* Maven ≥ 3.8
* Allure CLI (opcional)

---

##  Autor

**Frank Pozo**
QA Automation Engineer

---

##  Resultado

Este proyecto demuestra:

* Automatización UI + API integrada
* Uso de herramientas modernas
* Diseño escalable y mantenible
* Reportería profesional

---
