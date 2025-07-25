const cvData = {
	personalInfo: {
		fullName: "Juan Simón Abad",
		title: "Frontend Engineer",
		location: "Madrid, España",
		email: "juansim87@gmail.com",
		phone: "+34 654 936 255",
		summary:
			"Desarrollador web y comunicador audiovisual con experiencia en SEO. Me considero una persona resolutiva, con iniciativa, capacidad de aprendizaje y trabajo en equipo.",
		photo: "/images/avatar-perfil.webp",
	},

	experience: [
		{
			id: 1,
			title: "Frontend Engineer",
			company: "Rocket418",
			location: "Madrid, España",
			startDate: "oct. 2023",
			endDate: "Presente",
			description:
				"Desarrollo de nuevas funcionalidades en React y refactorización de código heredado. Mejora del sistema de navegación y experiencia de usuario.",
		},
		{
			id: 2,
			title: "Redactor SEO",
			company: "Atresmedia",
			location: "Madrid, España",
			startDate: "ene. 2020",
			endDate: "oct. 2023",
			description:
				"Implementación y creación de estrategias globales para contenido SEO de laSexta.com",
		},
		{
			id: 3,
			title: "Técnico de marketing",
			company: "Atresmedia",
			location: "Madrid, España",
			startDate: "jul. 2017",
			endDate: "dic. 2019",
			description:
				"Redacción y gestión de promociones de contenidos para Atresmedia, elaborando informes diarios, coordinando la comunicación interna y analizando el impacto de las campañas.",
		},
		{
			id: 4,
			title: "Jefe de redacción",
			company: "Toigo Radio",
			location: "Salamanca, España",
			startDate: "jun. 2015",
			endDate: "jul. 2016",
			description:
				"Gestión de equipo para redacción de contenidos en la web. Realizador de Informa2, los informativos de tarde emitidos en el mes de mayo. Gestión de redes sociales.",
		},
		{
			id: 5,
			title: "Intérprete y operario de máquinas",
			company: "Hergon Metropolitan UK Limited",
			location: "Londres, UK",
			startDate: "jun. 2014",
			endDate: "dic. 2014",
			description:
				"Intérprete para los operarios españoles en la obra de la línea de metro Elizabeth en Londres. Operario de máquinas.",
		},
	],

	education: [
		{
			id: 1,
			degree: "Bootcamp de desarrollo front-end",
			institution: "Upgrade hub",
			location: "Madrid, España",
			startDate: "nov. 2021",
			endDate: "jul. 2022",
			description:
				"Desarrollo web con enfoque en HTML, CSS, JavaScript, TypeScript, Angular y React.",
		},
		{
			id: 2,
			degree: "Máster en Formación y Comunicación Digital",
			institution: "EAE Business School",
			location: "Madrid, España",
			startDate: "2017",
			endDate: "2018",
			description: "Conocimiento en marketing, branding y analítica digital.",
		},
		{
			id: 3,
			degree: "Postgrado Experto en Locución Audiovisual",
			institution: "Universidad Pontificia de Salamanca",
			location: "Salamanca, España",
			startDate: "ene. 2012",
			endDate: "jun. 2012",
			description:
				"Locución comercial, radiofónica, doblaje y exposición oral.",
		},
	],

	softSkills: [
		{ id: 1, name: "Arquitectura hexagonal" },
		{ id: 2, name: "Resolución de problemas" },
		{ id: 3, name: "Comunicación efectiva" },
		{ id: 4, name: "Trabajo en equipo" },
		{ id: 5, name: "Aprendizaje continuo" },
	],

	devLanguages: [
		{ id: 1, name: "HTML", level: "professional" },
		{ id: 2, name: "CSS", level: "professional" },
		{ id: 3, name: "JavaScript", level: "professional" },
		{ id: 4, name: "TypeScript", level: "academic" },
	],

	technologies: [
		{ id: 1, name: "React" },
		{ id: 2, name: "Angular" },
		{ id: 3, name: "Node.js" },
		{ id: 4, name: "Vite" },
		{ id: 5, name: "Bootstrap" },
		{ id: 6, name: "Figma" },
		{ id: 7, name: "Git" },
		{ id: 8, name: "SCRUM" },
	],

	languages: [
		{
			id: 1,
			name: "Español",
			level: "Competencia nativa o bilingüe",
		},
		{
			id: 2,
			name: "Inglés",
			level: "Competencia profesional completa",
		},
	],
};

export default cvData;
