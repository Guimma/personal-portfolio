'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.getAttribute('data-translate') === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


function openWhatsApp() {
  // Get the input values
  const fullName = document.querySelector('[name="fullname"]').value;
  const email = document.querySelector('[name="email"]').value;
  const subject = document.querySelector('[name="subject"]').value;
  const message = document.querySelector('[name="message"]').value;

  // Format the WhatsApp message
  const formattedMessage = `Olá! Me chamo ${fullName}!\nMeu email é ${email}\n\n${subject}\n\n${message}`;

  // Create the WhatsApp URL with the pre-filled message
  const encodedMessage = encodeURIComponent(formattedMessage);
  const phoneNumber = "99696-4056"; // Hardcoded phone number
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  // Open the WhatsApp URL in a new window or tab
  window.open(whatsappURL, '_blank');
}


function sendEmail() {
  // Get the input values
  const fullName = document.querySelector('[name="fullname"]').value;
  const email = document.querySelector('[name="email"]').value;
  const subject = document.querySelector('[name="subject"]').value;
  const message = document.querySelector('[name="message"]').value;

  // Construct the mailto link with the form data
  const body = encodeURIComponent(`Hello! My name is ${fullName}.\nMy email is ${email}.\n\n${message}`);
  const mailtoLink = `mailto:lucas@campregher.com?subject=${subject}&body=${body}`;

  // Open the user's default email client with the mailto link
  window.location.href = mailtoLink;
}

// Example of triggering translation on language change
const languageButtons = document.querySelectorAll('.translate-button');
languageButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const selectedLanguage = event.currentTarget.getAttribute('data-language');
    translateTo(selectedLanguage);
  });
});

function translateTo(language) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach((element) => {
    const key = element.getAttribute('data-translate');
    element.textContent = translations[language][key];
  });

  // Update the href attribute of the download link based on the language
  const downloadResumeButton = document.getElementById('downloadLink');
  if (language === 'en') {
    downloadResumeButton.href = './assets/doc/resumeEN.pdf';
  } else if (language === 'pt') {
    downloadResumeButton.href = './assets/doc/resumePT.pdf';
  }
}

const translations = {
  en: {
    title: "Software Engineer",
    showContacts: "Show Contacts",
    phone: "Phone",
    birthday: "Birthday",
    birthdayDate: "April 04, 2000",
    location: "Location",
    aboutMe: "About Me",
    aboutText1: "I'm a creative and communicative software engineer! I am in constant evolution and quickly adapt to new challenges that move my professional life. My main interests are around backend development and I'm a huge data privacy enthusiast!",
    aboutText2: "In my professional career I have had contact with the most diverse technologies, from the development of complex APIs, to web and mobile frontend applications. In my challenges I also had the opportunity to work with Devops and Cloud computing. I work as a technical leadership, improving my familiarity with the agile universe, and with the operational part of the teams to optimize deliveries. Today, in addition to my work routine, I also act as co-host of Entre Chaves, a podcast aimed at the dev world.",
    aboutText3: "I have over 6 years of market experience, working with cutting-edge technologies for digital solutions with millions of active users. I am pleased to have participated throughout my career in the training and mentoring of less experienced developers, as well as in collaboration with management, planning, and team hiring processes. I have faced technical challenges as a trailblazer, supporting the architectural solution of complex systems.",
    whatDoing: "My Skills",
    about: "About",
    resume: "Resume",
    portfolio: "Portfolio",
    blog: "Blog",
    contact: "Contact",
    contactForm: "Contact Form",
    backendText: "API development of rich and complex domains.",
    frontendText: "Development of web and mobile applications.",
    devopsText: "Use and management of cloud computing infrastructure.",
    leadershipTitle: "Leadership",
    leadershipText: "Technical and operational leadership of development teams.",
    architechtureTitle: "Solutions and Software Architecture",
    creativityTitle: "Creativity and Inovation",
    communicationTitle: "Communication",
    costThinking: "Cost-Effective Thinking",
    communicationText: "Communicator at events, and on the Entre Chaves podcast.",
    relationshipTitle: "Relationship",
    relationshipText: "Great relationship and communication with clients.",
    testimonialsTitle: "Testimonials",
    education: "Education",
    educationText1: "Bachelor of Computer Science",
    educationText2: "High School",
    experience: "Experience",
    clients: "Clients",
    dtiPeriod: "06/2019 - Present",
    mySkills: "My Skills",
    languages: "Languages",
    frameworks: "Frameworks and Development Tools",
    skills: "Skills",
    sendMessage: "Send Message",
    personalProjects: "Personal Projects",
    portfolioText: "Here are some of the projects I have worked on.",
    article: "Article",
    testimonials1: "Champs! You are a brilliant professional! Better than being a '7th-degree ninja' (hehehe) in the acronyms that surround our profession, is being a professional who immerses themselves in the context they are working in and asks the right questions to advance or even reconsider. You are that type. Success and keep up the upward trajectory. Cheers!",    
    testimonials2: "Lucas is an incredible professional! I had the opportunity to have him as a leader  and today I see a lot of what I learned from him in my way of leading. He is committed,  hardworking and very dedicated. He knows how to work in a team and always listens  with great respect and affection. It is unique and without a doubt he will be very successful in your professional life.",
    anpText: "Internship in software development. Experience with data processing development using Visual Basic in Excel.",
    dtiPeriod: "06/2019 — Present",
    dtiCompany1: "DTI Digital",
    dtiRole1: "Squad Leader and Technical Reference of the tribe;",
    dtiRole2: "Security Chapter Leadership;",
    dtiRole3: "Co-host of the software development podcast;",
    dtiRole4: "Strategic and operational planning participation;",
    dtiRole5: "Trailblazer role;",
    dtiRole6: "Support in hiring new employees;",
    dtiRole7: "Backlog planning for new leads;",
    dtiProject1: "Banco Inter - Global Account",
    dtiTask1: "Squad Leader and Technical Reference of the tribe;",
    dtiTask2: "Development of microservices in Java 17 and Micronaut;",
    dtiTask3: "Deep use of Github Copilot;",
    dtiTask4: "Migration and documentation of a complex legacy system;",
    dtiTask5: "AWS Cloud management;",
    dtiTask6: "Technical refinement and architectural solutions planning;",
    dtiTask7: "Strategic and operational planning participation;",
    dtiTask8: "Support in hiring new employees;",
    dtiTask9: "Trailblazer role;",
    dtiProject2: "VALE - Geotec",
    dtiTask10: "Squad Leader and Technical Reference of the tribe;",
    dtiTask11: "VALE's dam monitoring platform;",
    dtiTask12: "Flutter app development;",
    dtiTask13: "Angular frontend;",
    dtiTask14: "Java Spring Boot microservices;",
    dtiTask15: "Improvement of a legacy system with performance issues;",
    dtiTask16: "Constant contact with stakeholders;",
    dtiTask17: "Monitoring and observability with Application Insights;",
    dtiTask18: "Code, SQL, and server performance optimization by +400%;",
    dtiTask19: "Saved over 1 million reais in Azure Cloud resources;",
    dtiTask20: "Achieved 99% stability in the legacy system;",
    dtiTask21: "Mentoring less experienced developers;",
    dtiProject3: "VALE - GCM",
    dtiTask22: "Fullstack Developer;",
    dtiTask23: "Angular frontend and C# .Net backend;",
    dtiTask24: "VALE's medical contingency portal during the COVID-19 pandemic;",
    dtiTask25: "Worked in an urgent context;",
    dtiProject4: "Banco BS2 - International Account",
    dtiTask26: "Fullstack Developer;",
    dtiTask27: "Microservices in C# .Net 3.1 and Vue.js frontend;",
    dtiTask28: "Azure Cloud and Azure Functions;",
    dtiTask29: "Agile methodologies;",
    downloadResume: "Download Resume"
  },
  pt: {
    title: "Engenheiro de Software",
    showContacts: "Mostrar Contatos",
    whatDoing: "Minhas Skills",
    phone: "Telefone",
    birthday: "Data de Nascimento",
    birthdayDate: "04 de Abril, 2000",
    location: "Endereço",
    aboutMe: "Sobre Mim",
    aboutText1: "Sou um desenvolvedor de software criativo e comunicativo! Estou em constante evolução e me adequo rapidamente a novos desafios, que movem minha vida profissional. Meus principais interesses giram em torno do desenvolvimento backend, e sou um grande entusiasta de privacidade de dados!",
    aboutText2: "Em minha carreira profissional já tive contato com as mais diversas tecnologias, desde o desenvolvimento de API's complexas, até aplicações frontend web e mobile. Em meus desafios também tive a oportunidade de trabalhar com Devops e computação em nuvem. Atuei como liderança técnica, aprimorando minha familiaridade com o universo ágil, e com a parte operacional dos times para otimizar as entregas. Hoje, além da minha rotina de trabalho, atuo também como co-host do Entre Chaves, um podcast voltado para o mundo dev.",
    aboutText3: "Tenho mais de 6 anos de experiência de mercado, atuando em tecnologias de ponta para soluções digitais com milhões de usuários ativos. Fico feliz em ter participado ao longo da minha carreira no treinamento e mentoria de desenvolvedores menos experiêntes, e colaboração com a gerência, planejamento, e processo de contratação das equipes. Enfrentei desafios técnicos como trailblazer, apoiando na solução arquitetural de sistemas complexos.",
    about: "Sobre",
    resume: "Currículo",
    portfolio: "Trabalhos",
    blog: "Blog",
    contact: "Contato",
    contactForm: "Formulário de Contato",
    backendText: "Desenvolvimento de API's de domínios ricos e complexos.",
    frontendText: "Desenvolvimento de aplicações web e mobile.",
    devopsText: "Utilização e gerência de infraestrutura computacional em nuvem.",
    leadershipTitle: "Liderança",
    leadershipText: "Liderança técnica e operacional de times de desenvolvimento.",
    architechtureTitle: "Arquitetura de Software e Soluções",
    creativityTitle: "Criatividade e Inovação",
    communicationTitle: "Comunicação",
    costThinking: "Pensamento Econômico",
    communicationText: "Comunicador em eventos, e no podcast Entre Chaves.",
    relationshipTitle: "Relacionamento",
    relationshipText: "Ótimo relacionamento e comunicação com os clientes.",
    testimonialsTitle: "Depoimentos",
    education: "Formação",
    educationText1: "Bacharelado em Ciência da Computação",
    educationText2: "Ensino Médio",
    experience: "Experiência",
    clients: "Clientes",
    dtiPeriod: "06/2019 - Atual",
    mySkills: "Competências Técnicas",
    languages: "Linguagens",
    frameworks: "Frameworks e Ferramentas de Desenvolvimento",
    skills: "Habilidades",
    sendMessage: "Enviar Mensagem",
    personalProjects: "Projetos Pessoais",
    portfolioText: "Aqui está um pouco dos projetos em que trabalhei.",
    article: "Artigo",
    testimonials1: "Champs! Você é um profissional brilhante! Melhor do que ser 'ninja 7 faixas' (hehehe) nos acrônimos que cercam a nossa profissão, é ser um profissional que se imerge no contexto que está trabalhando e faz as perguntas certas para avançar ou, até mesmo, repensar. Você é deste tipo. Sucesso e continue nessa curva ascendente. Abraço!",
    testimonials2: "O Lucas é um profissional incrível! Tive a oportunidade de tê-lo como líder e hoje enxergo muito do que aprendi com ele na minha forma de liderar. Ele é comprometido, esforçado e muito dedicado. Sabe trabalhar em equipe e sempre escuta com muito respeito e carinho. É diferenciado e, sem dúvida, terá muito sucesso na vida profissional.",
    anpText: "Estágio em desenvolvimento de software. Experiência com desenvolvimento de tratamento de dados utilizando Visual Basic em Excel.",
    dtiPeriod: "06/2019 — Present",
    dtiCompany1: "DTI Digital",
    dtiRole1: "Líder de squad e referência técnica da tribo;",
    dtiRole2: "Liderança do Chapter de Segurança;",
    dtiRole3: "Co-host do podcast de desenvolvimento de software;",
    dtiRole4: "Participação de planejamento estratégico e operacional;",
    dtiRole5: "Atuação de Trailblazer;",
    dtiRole6: "Apoio na contratação de novos colaboradores;",
    dtiRole7: "Planejamento de backlog para novos leads;",
    dtiProject1: "Banco Inter - Remessa Internacional",
    dtiTask1: "Líder de squad e referência técnica da tribo;",
    dtiTask2: "Desenvolvimento de microsserviços em Java 17 e Micronaut;",
    dtiTask3: "Uso aprofundado do Github Copilot;",
    dtiTask4: "Migração e documentação de um sistema legado complexo;",
    dtiTask5: "Gerenciamento da AWS Cloud;",
    dtiTask6: "Refinamento técnico e planejamento de soluções arquiteturais;",
    dtiTask7: "Participação de planejamento estratégico e operacional;",
    dtiTask8: "Apoio na contratação de novos colaboradores;",
    dtiTask9: "Atuação de Trailblazer;",
    dtiProject2: "VALE - Geotec",
    dtiTask10: "Líder de squad e referência técnica da tribo;",
    dtiTask11: "Plataforma de monitoramento de barragens da VALE;",
    dtiTask12: "Desenvolvimento de app Flutter;",
    dtiTask13: "Frontend em Angular;",
    dtiTask14: "Microsserviços em Java Spring Boot;",
    dtiTask15: "Atuação na evolução de um sistema legado com deficiência de performance;",
    dtiTask16: "Contato constante com os stakeholders;",
    dtiTask17: "Monitoramento e observabilidade com Application Insights;",
    dtiTask18: "Otimização de performance de código, SQL, e servidor de +400%;",
    dtiTask19: "+1 milhão de reais economizados em recursos na Azure Cloud;",
    dtiTask20: "Atingimos 99% de estabilidade no sistema legado;",
    dtiTask21: "Mentoria de desenvolvedores menos experientes;",
    dtiProject3: "VALE - GCM",
    dtiTask22: "Desenvolvedor Fullstack;",
    dtiTask23: "Frontend em Angular e Backend em C# .Net;",
    dtiTask24: "Portal de contingenciamento médico da VALE durante a pandemia do COVID-19;",
    dtiTask25: "Atuação em contexto de urgência;",
    dtiProject4: "Banco BS2 - Conta Internacional",
    dtiTask26: "Desenvolvedor Fullstack;",
    dtiTask27: "Microsserviços em C# .Net 3.1 e Frontend Vue.js;",
    dtiTask28: "Azure Cloud e Azure Functions;",
    dtiTask29: "Metodologias Ágeis;",
    downloadResume: "Baixar Currículo"
  }
};