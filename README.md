# 🧠 Proyecto: Curriculum Vitae con React

Bienvenido Samurái,

Ha llegado el momento de poner en práctica todo lo aprendido hasta ahora. En esta clase 13 vas a crear **tu propio Curriculum Vitae con React**. Este proyecto es clave para consolidar conceptos fundamentales de React como el manejo de objetos, props, composición de componentes, modularización y, además, potenciarás tu portfolio con una pieza clave: tu CV online.

Este será tu primero proyecto de 3 que harás durante el bloque de React, y es una excelente oportunidad para mostrar tus habilidades a futuros empleadores.

---

## 🎯 Objetivo

Desarrollar una aplicación en React que muestre tu currículum personal a partir de una estructura de datos definida en JavaScript.

---

## 🚀 Instrucciones de Entrega

Sigue estos pasos para organizar, versionar y entregar tu proyecto de forma profesional:

1. **Crea el proyecto en tu cuenta de GitHub**
   - El repositorio debe ser público.
   - Usa un nombre claro y profesional, por ejemplo: `cv-react`, `mi-cv-online` o similar.

2. **Utiliza Git correctamente**
   - Aplica los flujos **Gitflow** y **GitHub Flow**.
   - Crea ramas por funcionalidad (`feature/header`, `feature/experience-list`, etc.).
   - Usa `pull requests` para fusionar ramas a `main`.
   - Añade commits frecuentes y descriptivos.

3. **Trabaja por funcionalidades**
   - Organiza tu proyecto creando un componente por cada sección del CV.
   - Mantén el código modular y reutilizable.

4. **Despliega tu CV**
   - Puedes usar plataformas como [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/).
   - Asegúrate de que la web funciona correctamente y es responsive.

5. **Entrega**
   - Envía a tu mentor:
     - El enlace al repositorio en GitHub.
     - El enlace al sitio desplegado con tu CV interactivo.

> ⚠️ Cuida cada detalle: tu CV será tu carta de presentación en el mundo profesional. ¡Hazlo con cariño y calidad!


--- 

## 🧱 Estructura de Datos

Usaremos un **objeto JavaScript** como base para representar tu CV. Aquí tienes un ejemplo basado en el perfil de Juan Antonio Macías:

Esta estructura no es obligatoria, pero te servirá de guía para organizar tu información. Puedes adaptarla a tus necesidades y estilo personal.

También puedes usar la estructura de datos que que tu elijas. No es ningún requisito mantener esta estructura.

Tienes una estructura de datos que puedes usar como referencia en el archivo `example-data.js`. Aquí tienes un ejemplo simplificado:

```js
const cvData = {
  personalInfo: {
    fullName: "Juan Antonio Macías",
    title: "Engineering Manager | Software Architect",
    location: "Madrid, España",
    email: "juan.antonio@example.com",
    phone: "+34 600 000 000",
    summary: "Ingeniero de software con más de 20 años de experiencia en desarrollo web, arquitectura de software y liderazgo técnico.",
  },
  experience: [ ... ],
  education: [ ... ],
  skills: [ ... ],
  languages: [ ... ],
  devLanguages: [ ... ],
  technologies: [ ... ]
};
```

**📝 Importante:** Personaliza esta estructura con tu propia información. Revisa tu perfil de [LinkedIn](https://www.linkedin.com/) y utilízalo como guía.

---

## 🧩 Componentes Recomendados

OJO: Esto es una sugerencia, por si no tienes mucha creatividad. Puedes crear los componentes que quieras, pero intenta que sean reutilizables y bien estructurados.

Los componentes los eliges tú, pero aquí tienes una guía de los que podrías implementar:

### Componentes Base

| Componente      | Propósito                                       |
|------------------|-------------------------------------------------|
| `<App />`        | Punto de entrada de la aplicación.              |
| `<Curriculum />` | Contenedor general del CV.                      |
| `<Header />`     | Muestra nombre, título, resumen y contacto.     |
| `<Section />`    | Componente genérico para secciones del CV.      |
| `<Footer />`    | Componente genérico para el footer del CV.      |

### Componentes por Sección

| Componente            | Props esperadas        | Propósito                                |
|------------------------|------------------------|-------------------------------------------|
| `<ExperienceList />`   | `experience`           | Lista de experiencias laborales.          |
| `<ExperienceItem />`   | Datos individuales     | Muestra cada experiencia con detalle.     |
| `<EducationList />`    | `education`            | Formación académica.                      |
| `<SkillList />`        | `skills`               | Lista de habilidades blandas o técnicas.  |
| `<LanguageList />`     | `languages`            | Idiomas que dominas.                      |
| `<ContactInfo />`      | email, phone, location | Datos de contacto (si decides mostrarlos).|

---

## ⚙️ Ejemplo de Uso

```jsx
<Curriculum data={cvData} />
```

```jsx
export const Curriculum = ({ data }) => {
  return (
    <>
      <Header info={data.personalInfo} />
      <Section title="Experiencia">
        <ExperienceList experience={data.experience} />
      </Section>
      <Section title="Educación">
        <EducationList education={data.education} />
      </Section>
      <Section title="Habilidades">
        <SkillList skills={data.skills} />
      </Section>
      <Section title="Idiomas">
        <LanguageList languages={data.languages} />
      </Section>
    </>
  );
}
```

---

## 🧪 Requisitos Técnicos

- Uso de `useState`.
- Componentización correcta y reutilizable.
- Estado compartido entre componentes.
- Patrón HOC (Higher Order Component) aplicado al menos una vez. (Como en la clase de `Todo App`)
- Eventos personalizados (onClick, onChange...).
- Estilo visual limpio y bien cuidado.
- Diseño responsive (para móviles y escritorio).

---

## 🧠 CV Pro (Versión Avanzada Opcional)

¿Quieres subir de nivel?

Puedes crear una versión **interactiva** de tu CV:

- Un **componente onboarding** (tipo popup elegante) que permita elegir:
  - Ver CV tradicional.
  - Ver CV interactivo.
- Ambos tipos de CV deben compartir la misma estructura de datos pero podrían ser componentes diferentes. Tú eliges cómo implementarlo.
- El CV interactivo mostrará **checkboxes junto a habilidades**, tecnologías e idiomas para que el recruiter seleccione lo que le interesa.
- Un botón para "Ver resumen" que mostrará solo lo seleccionado.
- Posibilidad de imprimir o exportar el resumen como PDF (modo impresión del navegador).
- Botón para "Resetear selección".

Este reto es totalmente opcional, pero si lo consigues, estarás muy por delante del resto. Además de demostrar tus habilidades en React, tendrás un CV que dejará huella.

---

## ✨ Consejos de Estilo

- Evita `alert()`, usa componentes visuales personalizados.
- Inspírate en diseños de [Figma Community](https://www.figma.com/community) o busca referencias visuales en portfolios online. En Figma puedes encontrar plantillas de CV que puedes adaptar usando el buscador.
- Cuida cada detalle visual. Este CV lo usarás en tus candidaturas reales, así que asegúrate de que sea profesional y atractivo.

---

## 📬 Recomendación final

Este proyecto será tu carta de presentación como desarrollador o desarrolladora. Cuando termines:

1. **Súbelo a GitHub.**
2. **Despliega la web (Netlify, Vercel, etc.).**
3. **Incluye el enlace en tu email y mensajes de LinkedIn.**

Este CV debe reflejar lo que eres capaz de hacer **como profesional y como artista del código**.

---

## 🧘‍♂️ Ánimo, Samurái

Recuerda: no se trata de tener el mejor CV, sino de **seguir aprendiendo con intención y cuidado**. Ve paso a paso, termina primero la versión básica, y luego si tienes tiempo, atrévete con la versión PRO.

¡Haz que tu CV sea una extensión de tu perfil como developer!