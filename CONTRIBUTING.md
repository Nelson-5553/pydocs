# 🤝 Guía de Contribución - PyDocs

¡Gracias por tu interés en contribuir a PyDocs! Esta documentación moderna de Python se construye con la colaboración de la comunidad. Tu aporte es valioso y bienvenido.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Configuración del entorno de desarrollo](#configuración-del-entorno-de-desarrollo)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Guías de estilo](#guías-de-estilo)
- [Proceso de contribución](#proceso-de-contribución)
- [Reportar errores](#reportar-errores)
- [Sugerir mejoras](#sugerir-mejoras)
- [Traducción](#traducción)
- [Reconocimientos](#reconocimientos)

## 📜 Código de Conducta

Este proyecto se adhiere a un código de conducta que esperamos que todos los participantes respeten. Al participar, te comprometes a mantener un ambiente acogedor y respetuoso para todos.

### Nuestros valores:
- **Respeto**: Trata a todos con cortesía y consideración
- **Inclusión**: Bienvenidos desarrolladores de todos los niveles
- **Colaboración**: Trabajamos juntos hacia objetivos comunes
- **Aprendizaje**: Fomentamos el crecimiento y la educación

## 🚀 ¿Cómo puedo contribuir?

Hay muchas formas de contribuir a PyDocs:

### 📝 Documentación
- Mejorar explicaciones existentes
- Agregar nuevos ejemplos de código
- Corregir errores tipográficos o gramaticales
- Traducir contenido al inglés o español
- Crear nuevas secciones o temas

### 🐛 Reportes de errores
- Errores en el código de ejemplo
- Enlaces rotos
- Problemas de renderizado
- Inconsistencias en la documentación

### ✨ Nuevas características
- Nuevos componentes interactivos
- Mejoras en el diseño
- Funcionalidades adicionales
- Optimizaciones de rendimiento

### 🌍 Traducción
- Traducir contenido existente
- Revisar traducciones
- Mantener consistencia entre idiomas

## 🛠️ Configuración del entorno de desarrollo

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn
- Git

### Pasos de instalación

1. **Fork del repositorio**
   ```bash
   # Haz fork del repo en GitHub, luego clona tu fork
   git clone https://github.com/TU_USUARIO/pydocs.git
   cd pydocs
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4321
   ```

### Comandos útiles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye el sitio para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run astro check` | Verifica errores de TypeScript |

## 📁 Estructura del proyecto

```
pydocs/
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── es/           # Contenido en español
│   │       └── en/           # Contenido en inglés
│   ├── components/           # Componentes reutilizables
│   ├── assets/              # Imágenes y recursos
│   └── styles/              # Estilos globales
├── public/                  # Archivos estáticos
├── astro.config.mjs         # Configuración de Astro
└── package.json
```

### Organización del contenido

- **`/es/`**: Documentación en español (idioma principal)
- **`/en/`**: Documentación en inglés
- **Categorías principales**:
  - `introduction/` - Introducción a Python
  - `syntax-basic/` - Sintaxis básica
  - `data-structure/` - Estructuras de datos
  - `control-structures/` - Estructuras de control
  - `functions/` - Funciones
  - `native-functions/` - Funciones nativas
  - `file-management/` - Manejo de archivos
  - `error-handling/` - Manejo de errores
  - `POO/` - Programación Orientada a Objetos
  - `modules-packages/` - Módulos y paquetes
  - `venv-packages/` - Entornos virtuales

## 🎨 Guías de estilo

### Documentación

#### Formato de archivos
- Usa archivos `.mdx` para contenido con componentes
- Usa archivos `.md` para contenido simple
- Incluye siempre el frontmatter requerido:

```yaml
---
title: Título de la página
description: Descripción breve
sidebar:
  order: 1
---
```

#### Estilo de escritura
- **Tono**: Amigable, educativo y accesible
- **Audiencia**: Desarrolladores de todos los niveles
- **Longitud**: Secciones concisas pero completas
- **Ejemplos**: Siempre incluye ejemplos prácticos

#### Código de ejemplo
```python
# ✅ Bueno: Código claro con comentarios
def saludar(nombre):
    """Función que saluda a una persona."""
    print(f"Hola, {nombre}!")

# Llamar a la función
saludar("PyDocs")
```

```python
# ❌ Evitar: Código sin contexto
def f(x):
    print(x)
```

#### Componentes disponibles
- `<Code>` - Bloques de código con resaltado
- `<Aside>` - Notas, tips y advertencias
- `<PyTable>` - Tablas personalizadas
- `<Card>` y `<CardGrid>` - Tarjetas informativas

### Estilo de código

#### Nombres de archivos
- Usa kebab-case: `my-new-feature.mdx`
- Nombres descriptivos en inglés
- Evita espacios y caracteres especiales

#### Componentes
- PascalCase para nombres de componentes
- Props descriptivas y tipadas
- Documentación JSDoc cuando sea necesario

## 🔄 Proceso de contribución

### 1. Preparación
1. Haz fork del repositorio
2. Crea una rama para tu contribución:
   ```bash
   git checkout -b feature/nueva-seccion-asyncio
   # o
   git checkout -b fix/corregir-ejemplo-listas
   # o
   git checkout -b docs/mejorar-introduccion
   ```

### 2. Desarrollo
1. Realiza tus cambios siguiendo las guías de estilo
2. Prueba localmente con `npm run dev`
3. Verifica que no hay errores con `npm run build`

### 3. Commit
Usa mensajes de commit descriptivos:
```bash
# ✅ Buenos ejemplos
git commit -m "docs: agregar sección sobre async/await"
git commit -m "fix: corregir ejemplo de listas en español"
git commit -m "feat: agregar componente PyTable mejorado"

# ❌ Evitar
git commit -m "cambios"
git commit -m "fix"
```

### 4. Pull Request
1. Push a tu fork:
   ```bash
   git push origin feature/nueva-seccion-asyncio
   ```

2. Crea un Pull Request con:
   - **Título descriptivo**
   - **Descripción detallada** de los cambios
   - **Screenshots** si hay cambios visuales
   - **Referencias** a issues relacionados

#### Template de PR
```markdown
## 📝 Descripción
Breve descripción de los cambios realizados.

## 🔄 Tipo de cambio
- [ ] Corrección de errores
- [ ] Nueva característica
- [ ] Mejora de documentación
- [ ] Traducción
- [ ] Refactoring

## 🧪 Pruebas realizadas
- [ ] Probado localmente
- [ ] Build exitoso
- [ ] Links funcionando

## 📷 Screenshots (si aplica)
[Agregar capturas de pantalla]

## 📋 Checklist
- [ ] He seguido las guías de estilo
- [ ] He probado mis cambios localmente
- [ ] He actualizado la documentación si es necesario
```

## 🐛 Reportar errores

### Antes de reportar
1. Busca en issues existentes
2. Verifica que el error persiste en la última versión
3. Reproduce el error en diferentes navegadores si es posible

### Template de reporte
```markdown
## 🐛 Descripción del error
Descripción clara y concisa del problema.

## 🔄 Pasos para reproducir
1. Ve a '...'
2. Haz clic en '...'
3. Observa el error

## ✅ Comportamiento esperado
Qué debería suceder.

## 📷 Screenshots
Si es aplicable, agrega screenshots.

## 🌐 Entorno
- OS: [ej. Windows 10]
- Navegador: [ej. Chrome 91]
- Versión: [ej. 1.2.3]
```

## 💡 Sugerir mejoras

### Template de sugerencia
```markdown
## 🚀 Descripción de la mejora
Descripción clara de la mejora propuesta.

## 🎯 Problema que resuelve
¿Qué problema actual resuelve esta mejora?

## 💭 Solución propuesta
Descripción detallada de cómo implementarías la mejora.

## 🔄 Alternativas consideradas
Otras soluciones que consideraste.

## 📋 Información adicional
Cualquier contexto adicional o screenshots.
```

## 🌍 Traducción

### Idiomas soportados
- **Español** (es) - Idioma principal
- **Inglés** (en) - Traducción secundaria

### Proceso de traducción
1. Identifica contenido que necesita traducción
2. Crea la estructura de carpetas correspondiente
3. Traduce manteniendo:
   - Estructura del documento
   - Ejemplos de código (comentarios traducidos)
   - Metadatos del frontmatter
   - Enlaces internos actualizados

### Convenciones
- Mantén consistencia en términos técnicos
- Adapta ejemplos al contexto cultural cuando sea apropiado
- Conserva el tono educativo y amigable

## 🏆 Reconocimientos

### Tipos de contribución
- 📝 **Documentación**: Escribir o mejorar docs
- 🐛 **Errores**: Reportar o corregir bugs
- 💡 **Ideas**: Sugerir mejoras
- 🌍 **Traducción**: Traducir contenido
- 🎨 **Diseño**: Mejorar UI/UX
- 💻 **Código**: Desarrollar funcionalidades

### Cómo apareces como colaborador
- Tu perfil aparece automáticamente en la página principal
- Se reconocen diferentes tipos de contribución
- Los colaboradores regulares pueden obtener permisos adicionales

## 📞 Contacto y ayuda

### ¿Necesitas ayuda?
- **Issues**: Para reportes y sugerencias
- **Discussions**: Para preguntas generales
- **Email**: [Agregar email de contacto]

### Recursos útiles
- [Documentación de Astro](https://docs.astro.build/)
- [Documentación de Starlight](https://starlight.astro.build/)
- [Guía de Markdown](https://www.markdownguide.org/)

---

## 🙏 ¡Gracias por contribuir!

Cada contribución, sin importar su tamaño, hace que PyDocs sea mejor para toda la comunidad de desarrolladores Python. ¡Esperamos trabajar contigo!

**¿Primera vez contribuyendo a un proyecto open source?** ¡No te preocupes! Todos empezamos en algún lugar. No dudes en hacer preguntas y pedir ayuda.

---

<div align="center">

**[⬆️ Volver al inicio](#-guía-de-contribución---pydocs)**

Hecho con ❤️ por la comunidad PyDocs

</div>