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


function translateTo(language) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach((element) => {
    const key = element.getAttribute('data-translate');
    element.textContent = translations[language][key];
  });
}

// Example of triggering translation on language change
const languageButtons = document.querySelectorAll('.translate-button');
languageButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const selectedLanguage = event.currentTarget.getAttribute('data-language');
    translateTo(selectedLanguage);
  });
});

const translations = {
  en: {
    title: "Fullstack Developer",
    showContacts: "Show Contacts",
    phone: "Phone",
    birthday: "Birthday",
    birthdayDate: "April 04, 2000",
    location: "Location",
    aboutMe: "About Me",
    aboutText1: "I'm a creative and communicative software developer! I am in constant evolution and quickly adapt to new challenges that move my professional life. My main interests are around backend development and I'm a huge data privacy enthusiast!",
    aboutText2: "In my professional career I have had contact with the most diverse technologies, from the development of complex APIs, to web and mobile frontend applications. In my challenges I also had the opportunity to work with Devops and Cloud computing. I work as a technical leadership, improving my familiarity with the agile universe, and with the operational part of the teams to optimize deliveries. Today, in addition to my work routine, I also act as co-host of Entre Chaves, a podcast aimed at the dev world.",
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
    communicationTitle: "Communication",
    communicationText: "Communicator at events, and on the Entre Chaves podcast.",
    relationshipTitle: "Relationship",
    relationshipText: "Great relationship and communication with clients.",
    testimonialsTitle: "Testimonials",
    education: "Education",
    educationText1: "Bachelor of Computer Science",
    educationText2: "High School",
    experience: "Experience",
    clients: "Clients",
    dtiPeriod: "2019 - Present",
    mySkills: "My Skills",
    languages: "Languages",
    frameworks: "Frameworks and Development Tools",
    skills: "Skills",
    sendMessage: "Send Message",
    personalProjects: "Personal Projects",
    portfolioText: "portfolioText",
    article: "Article"
  },
  pt: {
    title: "Desenvolvedor Fullstack",
    showContacts: "Mostrar Contatos",
    whatDoing: "Minhas Skills",
    phone: "Telefone",
    birthday: "Data de Nascimento",
    birthdayDate: "04 de Abril, 2000",
    location: "Endereço",
    aboutMe: "Sobre Mim",
    aboutText1: "Sou um desenvolvedor de software criativo e comunicativo! Estou em constante evolução e me adequo rapidamente a novos desafios, que movem minha vida profissional. Meus principais interesses giram em torno do desenvolvimento backend, e sou um grande entusiasta de privacidade de dados!",
    aboutText2: "Em minha carreira profissional já tive contato com as mais diversas tecnologias, desde o desenvolvimento de API's complexas, até aplicações frontend web e mobile. Em meus desafios também tive a oportunidade de trabalhar com Devops e computação em nuvem. Atuei como liderança técnica, aprimorando minha familiaridade com o universo ágil, e com a parte operacional dos times para otimizar as entregas. Hoje, além da minha rotina de trabalho, atuo também como co-host do Entre Chaves, um podcast voltado para o mundo dev.",
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
    communicationTitle: "Comunicação",
    communicationText: "Comunicador em eventos, e no podcast Entre Chaves.",
    relationshipTitle: "Relacionamento",
    relationshipText: "Ótimo relacionamento e comunicação com os clientes.",
    testimonialsTitle: "Depoimentos",
    education: "Formação",
    educationText1: "Bacharelado em Ciência da Computação",
    educationText2: "Ensino Médio",
    experience: "Experiência",
    clients: "PT Clientes",
    dtiPeriod: "2019 - Atual",
    mySkills: "Competências Técnicas",
    languages: "Linguagens",
    frameworks: "Frameworks e Ferramentas de Desenvolvimento",
    skills: "Habilidades",
    sendMessage: "Enviar Mensagem",
    personalProjects: "Projetos Pessoais",
    portfolioText: "PT portfolioText",
    article: "Artigo"
  }
};