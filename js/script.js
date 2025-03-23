const sections = document.querySelectorAll("section");
const navegacao = document.getElementById("navegacao");
const subir = document.getElementById("subir");
const descer = document.getElementById("descer");

let currentSectionIndex = 0;

function updateNavigation() {
    if (currentSectionIndex === 0) {
        navegacao.style.display = "none"; 
    } else {
        navegacao.style.display = "flex"; 
        subir.disabled = currentSectionIndex === 0;
        descer.disabled = currentSectionIndex === sections.length - 1;
    }
}

subir.addEventListener("click", () => {
    if (currentSectionIndex === 1) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        currentSectionIndex = 0;
    } else if (currentSectionIndex > 0) {
        currentSectionIndex--;
        sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
    }
    updateNavigation();
});

descer.addEventListener("click", () => {
    if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
    }
    updateNavigation();
});

document.addEventListener("scroll", () => {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            currentSectionIndex = index;
            updateNavigation();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    updateNavigation();
});
