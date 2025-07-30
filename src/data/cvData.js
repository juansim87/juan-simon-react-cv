const cvData = {
	personalInfo: {
		fullName: "Juan Simón Abad",
		title: "Frontend Engineer -  React",
		location: "Madrid (España)",
		email: "juansim87@gmail.com",
		phone: "+34 654 936 255",
		linkedin: "https://www.linkedin.com/in/juan-simon-frontend",
		github: "https://github.com/juansim87",
		summary:
			"Desarrollador web y comunicador audiovisual con experiencia en SEO. Me considero una persona resolutiva, con iniciativa, capacidad de aprendizaje y trabajo en equipo.",
		photo: "/images/avatar-perfil.webp",
	},

	experience: [
		{
			id: "exp1",
			title: "Frontend Engineer  -  React",
			company: "Rocket418",
			location: "Remoto",
			startDate: "oct. 2023",
			endDate: "Presente",
			description: [
				"Desarrollo de nuevas funcionalidades",
				"Refactorización de código heredado",
				"Mejora del sistema de navegación y experiencia de usuario",
			],
		},
		{
			id: "exp2",
			title: "Redactor SEO",
			company: "Atresmedia",
			location: "Madrid (España)",
			startDate: "ene. 2020",
			endDate: "oct. 2023",
			description: [
				"Redacción de contenido SEO",
				"Creación e implementación de estrategias de posicionamiento para contenido de laSexta.com",
			],
		},
		{
			id: "exp3",
			title: "Técnico de marketing",
			company: "Atresmedia",
			location: "Madrid (España)",
			startDate: "jul. 2017",
			endDate: "dic. 2019",
			description: [
				"Redacción y gestión de promociones de contenidos para Atresmedia",
				"Elaboración de informes diarios",
				"Coordinación de comunicación interna",
				"Análisis de impacto de campañas de promoción",
			],
		},
		{
			id: "exp4",
			title: "Jefe de redacción",
			company: "Toigo Radio",
			location: "Salamanca (España)",
			startDate: "jun. 2015",
			endDate: "jul. 2016",
			description: [
				"Gestión de equipo para redacción de contenidos en la web",
				"Realizador de Informa2",
				"Gestión de redes sociales",
			],
		},
		{
			id: "exp5",
			title: "Intérprete y operario de máquinas",
			company: "Hergon Metropolitan UK Limited",
			location: "Londres (UK)",
			startDate: "jun. 2014",
			endDate: "dic. 2014",
			description: [
				"Intérprete para operarios españoles en la obra de la línea de metro Elizabeth",
				"Operario de máquinas",
			],
		},
	],

	education: [
		{
			id: "edu1",
			degree: "Máster en Desarrollo Web (fullstack), Mobile, IA",
			institution: "ElevenCode School",
			location: "Remoto",
			startDate: "feb. 2024",
			endDate: "Presente",
			description: [
				"Desarrollo web y mobile con enfoque en React, React Native y Node.js",
				"Clean Code",
				"Arquitectura hexagonal",
				"Testing",
				"Formación adicional sobre herramientas IA",
			],
		},
		{
			id: "edu2",
			degree: "Bootcamp de desarrollo Frontend",
			institution: "UpgradeHub",
			location: "Madrid (España)",
			startDate: "nov. 2021",
			endDate: "jul. 2022",
			description: [
				"Desarrollo web con enfoque en HTML, CSS, JavaScript, TypeScript, Angular y React.",
			],
		},
		{
			id: "edu3",
			degree: "Máster en Periodismo y Comunicación Digital",
			institution: "EAE Business School",
			location: "Madrid (España)",
			startDate: "2017",
			endDate: "2018",
			description: [
				"Marketing, branding y analítica digital",
				"Comunicación corporativa",
				"Comunicación Y Periodismo Digital",
			],
		},
		{
			id: "edu4",
			degree: "Posgrado Experto en Locución Audiovisual",
			institution: "Universidad Pontificia de Salamanca",
			location: "Salamanca (España)",
			startDate: "ene. 2012",
			endDate: "jun. 2012",
			description: [
				"Locución comercial",
				"Locución radiofónica",
				"Doblaje",
				"Exposición oral",
			],
		},
	],

	softSkills: [
		{ id: "skl1", skill: "Comunicación efectiva" },
		{ id: "skl2", skill: "Trabajo en equipo" },
		{ id: "skl3", skill: "Dirección de equipos de trabajo" },
		{ id: "skl4", skill: "Resolución de problemas" },
		{ id: "skl5", skill: "Aprendizaje continuo" },
	],

	devLanguages: [
		{
			id: "dev1",
			name: "HTML",
			level: "Profesional",
			logo: "/logos/html5-logo.png",
		},
		{ id: "dev2", name: "CSS", level: "Profesional", logo: "/logos/css3-logo.png" },
		{
			id: "dev3",
			name: "JavaScript",
			level: "Profesional",
			logo: "/logos/js-logo.png",
		},
		{
			id: "dev4",
			name: "TypeScript",
			level: "Profesional",
			logo: "/logos/ts-logo.png",
		},
	],

	technologies: [
		{
			id: "tec1",
			name: "React",
			level: "Profesional",
			logo: "/logos/react-logo.png",
		},
		{
			id: "tec2",
			name: "Angular",
			level: "Profesional",
			logo: "/logos/angular-logo.png",
		},
		{
			id: "tec3",
			name: "Node.js",
			level: "Profesional",
			logo: "/logos/nodejs-logo.png",
		},
		{
			id: "tec4",
			name: "Vite",
			level: "Profesional",
			logo: "/logos/vitejs-logo.png",
		},
		{
			id: "tec5",
			name: "Bootstrap",
			level: "Académico",
			logo: "/logos/bootstrap-logo.png",
		},
		{ id: "tec6", name: "Figma", level: "Académico", logo: "/logos/figma-logo.png" },
		{ id: "tec7", name: "Git", level: "Profesional", logo: "/logos/git-logo.png" },
	],

	languages: [
		{
			id: "lan1",
			language: "Español",
			countryFlag: "España",
			level: "Nativo",
			flag: "/icons/es.svg",
		},
		{
			id: "lan2",
			language: "Inglés",
			countryFlag: "Reino Unido",
			level: "Profesional (C1)",
			flag: "/icons/gb.svg",
		},
	],
};

export default cvData;
