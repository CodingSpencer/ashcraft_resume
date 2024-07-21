import { projects } from "./projects.mjs";

const projectsContainer = document.getElementById("projects");

function createProject(project) {
  const section = document.createElement("div");
  section.classList.add("project-section");

  const title = document.createElement("h3");
  title.classList.add("project-title");
  title.textContent = project.name;

  const container = document.createElement("div");
  container.classList.add("project-container");

  const content = document.createElement("div");
  content.classList.add("project-content");

  const img = document.createElement("img");
  img.src = project.image;
  img.alt = project.name;

  const description = document.createElement("p");
  description.classList.add("project-description");
  description.textContent = project.description;

  const github = document.createElement("a");
  github.classList.add("project-hub-link");
  github.href = project.github;
  github.textContent = "View on GitHub";
  github.target = "_blank";

  const lastUpdate = document.createElement("p");
  lastUpdate.classList.add("project-last-update");
  lastUpdate.textContent = `Last updated: ${project.lastUpdate}`;

  const tagsContainer = document.createElement("div");
  tagsContainer.classList.add("tagsContainer");

  project.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    tagElement.className = "tag";
    tagsContainer.appendChild(tagElement);
  });

  content.appendChild(img);
  content.appendChild(description);
  content.appendChild(github);
  content.appendChild(lastUpdate);
  content.appendChild(tagsContainer);
  container.appendChild(content);
  section.appendChild(title);
  section.appendChild(content);

  content.style.display = "none";

  title.addEventListener("click", () => {
    content.style.display = content.style.display === "none" ? "block" : "none";
  });

  return section;
}

projects.forEach((project) => {
  const projectSection = createProject(project);
  projectsContainer.appendChild(projectSection);
});
