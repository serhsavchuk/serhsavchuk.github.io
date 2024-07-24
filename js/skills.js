function setSkills(skillsId) {
  const items = Object.freeze([
    {
      id: "ts",
      title: "TypeScript",
    },
    {
      id: "js",
      title: "JavaScript",
    },
    {
      id: "vue",
      title: "Vue",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "nuxt",
      title: "Nuxt",
    },
    {
      id: "next",
      title: "Next",
    },
    {
      id: "node",
      title: "Node.js",
    },
    {
      id: "git",
      title: "Git",
    },
    {
      id: "linux",
      title: "Linux",
    },
  ]);

  const skillsElement = document.getElementById(skillsId);
  if (!skillsElement) {
    return;
  }
  const parentElement = document.createElement("div");
  parentElement.className = "section-skills";

  items.forEach((item) => {
    const el = document.createElement("div");
    el.className = "skill";

    const skillText = document.createElement("span");
    skillText.innerHTML = item.title;

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", "./img/icons/skill-star.svg");
    imgElement.setAttribute("width", "20");
    imgElement.setAttribute("height", "20");

    el.appendChild(skillText);
    el.appendChild(imgElement);

    parentElement.appendChild(el);
  });

  skillsElement.appendChild(parentElement);
}

function initialize() {
  setSkills("skills");
  setSkills("about-skills");
}

export default initialize;
