# 🎒 TuKit — Frontend Angular

<p align="center">
  <img src="https://img.shields.io/badge/Angular-Frontend-DD0031?style=for-the-badge&logo=angular" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Status-En%20desarrollo-yellow?style=for-the-badge" />
</p>

<p align="center">
  <strong>Menos filas. Más tiempo en familia.</strong> 💙
</p>

---

## 📌 ¿Qué es TuKit?

**TuKit** es un emprendimiento digital que busca facilitar la compra de útiles escolares para padres de familia, permitiendo que los niños participen activamente en la personalización de sus kits.

La plataforma:
- ⏱️ Reduce el tiempo invertido en compras escolares
- 📄 Permite subir listas de útiles (imagen o PDF)
- 🤖 Utiliza IA para interpretar listas escolares
- 🎨 Deja que los niños personalicen colores, diseños y personajes
- 🚚 Garantiza entregas en máximo **2 días hábiles**

Este repositorio contiene **exclusivamente el frontend**, desarrollado con **Angular**, preparado para conectarse a servicios backend mediante APIs.

---

## 🎯 Objetivo del Frontend

- Construir una interfaz **rápida, clara y confiable** para padres
- Diseñar una experiencia **lúdica, intuitiva y emocional** para niños
- Mantener una arquitectura **ordenada, escalable y mantenible**
- Separar correctamente vistas, componentes y lógica
- Dejar servicios listos para integración con backend

---

## 🧱 Stack Tecnológico

- 🅰️ **Angular**
- 📘 **TypeScript**
- 🎨 **CSS / SCSS**
- 🔗 **Angular Router**
- 🔌 Servicios preparados para APIs REST
- 🗂️ Git + GitHub (trabajo colaborativo)

---

## 🧠 Principios de Arquitectura

- 🧩 **Componentes pequeños y reutilizables**
- 🧱 Separación clara entre layout, páginas y componentes UI
- 🚦 Enrutamiento centralizado
- 🧭 `MainComponent` como contenedor principal
- 🔄 Comunicación clara entre componentes (`@Input`, `@Output`)
- 🔌 Servicios desacoplados para consumo de APIs
- 📦 Código preparado para escalar

---

## 🧭 Rutas Principales

| Ruta | Descripción |
|----|------------|
| `/home` | Página principal |
| `/upload-list` | Carga de lista con IA |
| `/kits` | Kits por grado o temática |
| `/kits/:id/customize` | Personalización de kits |
| `/products/:id` | Detalle de producto |
| `/checkout` | Proceso de compra |
| `/account` | Perfil y pedidos |
| `/support` | Soporte y ayuda |

---

## 🎨 UI / UX Guidelines

- 🎨 Paleta basada en el logo de TuKit:
  - Azul oscuro
  - Azul medio
  - Gradiente azul claro
- 🔥 Color de acento para CTAs
- ✨ Microanimaciones y feedback visual
- 🧒 Experiencia amigable para niños
- 📱 Diseño **mobile-first**
- ♿ Accesibilidad (contraste, tamaños, tipografía legible)

---

## 🤖 Funcionalidades Clave (Frontend)

- 📤 Carga de listas escolares (imagen / PDF)
- 🧠 Visualización del resultado del análisis por IA
- 🧺 Creación automática de kits
- 🎒 Personalización visual de útiles
- 🛒 Checkout simple y rápido
- 👶 Perfiles de niños
- 🏫 Integración con dataset de colegios de Bogotá (placeholder)

---

## 🚀 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
ng serve

# Abrir en el navegador
http://localhost:4200


---

Si quieres, en el siguiente paso puedo:
- 🔹 Ajustar el README exactamente a **Angular 17 (standalone + signals)**  
- 🔹 Agregar **diagramas visuales de arquitectura**
- 🔹 Crear un **CONTRIBUTING.md**
- 🔹 Preparar un README versión **empresa / inversionistas**

¿Lo dejamos aún más premium? 
