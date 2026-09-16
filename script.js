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

function renderProjects(projectList) {
  const container = document.querySelector(".project-container");
  container.innerHTML = "";

  projectList.forEach((project) => {
    const card = document.createElement("article");
    card.className = project.featured
      ? "project-card project-card--featured"
      : "project-card";

    card.innerHTML = `
      <img src="${project.image}" alt="${project.alt}" />
      <h3 class="project-card__title">
        ${project.title}
        ${project.featured ? '<span class="project-card__badge">Featured</span>' : ""}
      </h3>
      <p class="project-card__description">${project.description}</p>
      <p>${project.stack}</p>
      <a href="${project.link}" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects(projectList);
});
