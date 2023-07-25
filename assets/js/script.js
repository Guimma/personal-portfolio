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
    aboutText1: "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.",
    aboutText2: "My job is to build your website so that it is functional and user-friendly but at the same time attractive.Moreover, Iadd personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bringacross yourmessage and identity in the most creative way. I created web design for many famous brand companies.",
    whatDoing: "What i'm doing",
    about: "About",
    resume: "Resume",
    portfolio: "Portfolio",
    blog: "Blog",
    contact: "Contact",
    contactForm: "Contact Form",
    backendText: "EN BACKEND TEXT",
    frontendText: "EN FRONTEND TEXT",
    devopsText: "EN devopsText",
    leadershipTitle: "Leadership",
    leadershipText: "EN leader text",
    communicationTitle: "Communication",
    communicationText: "EN comm text",
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
    whatDoing: "What i'm doing",
    phone: "Telefone",
    birthday: "Data de Nascimento",
    birthdayDate: "04 de Abril, 2000",
    location: "Endereço",
    aboutMe: "Sobre Mim",
    aboutText1: "PT I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.\n\nI enjoy\nturning complex problems into simple, beautiful and intuitive designs.",
    aboutText2: "PT My job is to build your website so that it is functional and user-friendly but at the same time attractive.Moreover, Iadd personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bringacross yourmessage and identity in the most creative way. I created web design for many famous brand companies.",
    whatDoing: "Meu Trabalho",
    about: "Sobre",
    resume: "Currículo",
    portfolio: "Trabalhos",
    blog: "Blog",
    contact: "Contato",
    contactForm: "Formulário de Contato",
    backendText: "PT BACKEND TEXT",
    frontendText: "PT FRONTEND TEXT",
    devopsText: "PT devopsText",
    leadershipTitle: "Liderança",
    leadershipText: "PT leader text",
    communicationTitle: "Comunicação",
    communicationText: "PT comm text",
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