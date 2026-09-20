/* ============================================================
nav-toggle
   ============================================================ */
const navToggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggleBtn && navLinks) {
  navToggleBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("nav-links--open");
    navToggleBtn.setAttribute("aria-expanded", isOpen);
  });
}
/* ============================================================
   Week 3: Project data
   ============================================================ */
const projectList = [
  {
    title: "Brain Byte",
    featured: true,
    image: "profile.jpg",
    alt: "Brain Byte project",
    description:
      "A web application designed to help students learn and organize their study materials.",
    stack: "HTML • CSS • JavaScript",
    link: "https://shiro25-web.github.io/Brain_byte/",
  },
  {
    title: "SHIRO",
    featured: true,
    image: "cefb53d6d2d1ae0ba4a44e97f8a6e7b5.jpg",
    alt: "template website",
    description: "a template for a stylish portfolio website build",
    stack: "HTML • CSS • JavaScript",
    link: "https://shiro25-web.github.io/shiro-s-portfolio-website/",
  },
];

/* ============================================================
   Requirement 1 & 2: renderProjects 
   ============================================================ */
function renderProjects(projectList) {
  const container = document.querySelector(".project-container");
  if (!container) return;

  container.textContent = "";

  projectList.forEach((project) => {
    const card = document.createElement("article");
    card.className = project.featured
      ? "project-card project-card--featured"
      : "project-card";

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.alt;
    card.append(img);

    const title = document.createElement("h3");
    title.className = "project-card__title";
    title.textContent = project.title;

    // Bonus: Featured badge, only when project.featured === true
    if (project.featured === true) {
      const badge = document.createElement("span");
      badge.className = "project-card__badge";
      badge.textContent = "Featured";
      title.append(badge);
    }
    card.append(title);

    const description = document.createElement("p");
    description.className = "project-card__description";
    description.textContent = project.description;
    card.append(description);

    const stack = document.createElement("p");
    stack.textContent = project.stack;
    card.append(stack);

    const link = document.createElement("a");
    link.href = project.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "View Project";
    card.append(link);

    container.append(card);
  });
}

renderProjects(projectList);

/* ============================================================
   Requirement 5: Event delegation on .project-container
   ============================================================ */
const projectContainer = document.querySelector(".project-container");

if (projectContainer) {
  projectContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".project-card");
    if (!card) return;

    const titleEl = card.querySelector(".project-card__title");
    console.log(
      "Clicked project:",
      titleEl ? titleEl.textContent : "(unknown title)",
    );
  });
}

/* ============================================================
    Validator functions
   ============================================================ */
function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email.trim());
}

function isMessageLongEnough(message, minLength = 20) {
  return message.trim().length >= minLength;
}

function isContactMethodChosen(method) {
  return method !== "" && method !== null && method !== undefined;
}

/* ============================================================
   Requirement 3: Real contact form validation
   ============================================================ */
const contactForm = document.querySelector(".contact-form");
const errorMessageEl = document.querySelector("#error-message");

function showFormMessage(message, isSuccess = false) {
  if (!errorMessageEl) {
    console.log(message);
    return;
  }
  errorMessageEl.textContent = message;
  errorMessageEl.classList.toggle("error-message--success", isSuccess);
  errorMessageEl.classList.toggle("error-message--error", !isSuccess);
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = contactForm.querySelector("#email");
    const messageInput = contactForm.querySelector("#message");
    const methodInput = contactForm.querySelector(
      'input[name="preferred_contact"]:checked',
    );

    const emailValue = emailInput ? emailInput.value : "";
    const messageValue = messageInput ? messageInput.value : "";
    const methodValue = methodInput ? methodInput.value : "";

    if (!isValidEmail(emailValue)) {
      showFormMessage("Please enter a valid email address.");
      return;
    }

    if (!isMessageLongEnough(messageValue)) {
      showFormMessage("Your message needs to be at least 20 characters.");
      return;
    }

    if (!isContactMethodChosen(methodValue)) {
      showFormMessage("Please choose a preferred contact method.");
      return;
    }

    showFormMessage("Thanks! Your message has been sent.", true);
    contactForm.reset();
  });
}

/* ============================================================
   Class Exercise: debounce(fn, delay)
   ============================================================ */
function debounce(fn, delay) {
  let timeoutId;
  return function debounced(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

/* ============================================================
   Requirement 4: Live validation on the email field, 300ms
   ============================================================ */
const emailField = contactForm ? contactForm.querySelector("#email") : null;

if (emailField) {
  const debouncedEmailCheck = debounce(() => {
    const valid = isValidEmail(emailField.value);
    console.log("Debounced email check fired. Valid:", valid);

    if (!valid && emailField.value.trim() !== "") {
      showFormMessage("That email doesn't look quite right.");
    }
  }, 300);

  emailField.addEventListener("input", debouncedEmailCheck);
}
