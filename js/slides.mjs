async function setSlides() {
  const wrapper = document.getElementById("slides-wrapper");
  if (!wrapper) {
    return;
  }
  const projects = await fetch("./../json/projects.json").then((response) =>
    response.json()
  );

  if (!Array.isArray(projects)) {
    return;
  }

  projects.forEach((item) => {
    const slide = document.createElement("div");
    slide.className = "slide";

    const tools = item.tools.map((i) => `<span>${i.name}</span>`).join(" ");

    slide.innerHTML = `
      <a href="${item.url}" target="_blank" class="slide-content">
        <div class="slide-image">
          <img
            src="${item.imgPath}"
            width="165"
            height="130"
            class="img-responsive"
          />
        </div>
        <div class="slide-date">
          <span>${item.year}</span>
        </div>
        <div>
          <p class="slide-title">${item.title}</p>
          <p class="slide-description">${item.description}</p>
        </div>
        <div class="slide-tools-container">
          <p class="slide-title">Tools</p>
          <div class="slide-tools">${tools}</div>
        </div>
      </a>
    `;

    wrapper.appendChild(slide);
  });
}

export default setSlides;
