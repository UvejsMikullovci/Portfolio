const circleElement = document.querySelector('.circle');

const mouse = { x: 0, y: 0 },
    circle = { x: 0, y: 0 };

window.addEventListener('mousemove', e => {
    mouse.x = e.x;
    mouse.y = e.y;
});

const speed = 0.15;

const tick = () => {
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px)`;

    window.requestAnimationFrame(tick);
}

tick();



const textElement = document.getElementById("appearingText");
const words = textElement.innerText.split(" ");
textElement.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");


gsap.from("#about span", {
    opacity: 0,
    y: 20,
    stagger: 0.05,
    duration: 1,
    scrollTrigger: {
        trigger: textElement,
        start: "top 99.99%",
        end: "bottom 0.01%",
        scrub: true,
        once: true,
        markers: false
    }
});



gsap.from('.header', { duration: 1, y: '-100%' })
gsap.from('.name', { duration: 1, y: '-100%' })

gsap.from('#mainText1', { duration: 1, y: '500%' })
gsap.from('#mainText2', { duration: 1, y: '500%' })
gsap.from('#mainText3', { duration: 1, y: '500%' })
gsap.from('#mainText4', { duration: 1, y: '500%' })
gsap.from('#mainText5', { duration: 1, y: '500%' })

document.querySelectorAll("#work .row h1").forEach(h1 => {
    h1.addEventListener("mouseenter", function() {
        this.closest("#work .row").style.backgroundColor = "#eb5939";
        this.closest("#work .row h1").style.color = "#111";
        document.querySelector(".circle").style.borderColor = "transparent";
    });

    h1.addEventListener("mouseleave", function() {
        this.closest("#work .row").style.backgroundColor = "#111";
        this.closest("#work .row h1").style.color = "#b7ab98";
        document.querySelector(".circle").style.borderColor = "#eb5939"; 
    });
});

document.querySelectorAll("#history .row").forEach(row => {
    row.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "#eb5939";
        this.querySelectorAll("h1").forEach(h1 => {
            h1.style.color = "#111";
        });
        this.querySelectorAll("p").forEach(h1 => {
            h1.style.opacity = "1";
        });
        document.querySelector(".circle").style.borderColor = "transparent";
    });

    row.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "#111";
        this.querySelectorAll("h1").forEach(h1 => {
            h1.style.color = "#b7ab98";
        });
        document.querySelector(".circle").style.borderColor = "#eb5939"; 
    });
});


gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {

    const text = new SplitType("#appearingText2", { types: "words" });

    gsap.fromTo(
        text.words,
        { color: "#2E2C29" },
        {
            color: "#b7aa98",
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#experience",
                start: "top 0%",
                end: "bottom 120%",
                scrub: 1,
            }
        }
    );
});

let projects = [
    { id: 1, name: "YumYum", description: "Website for a delivery service for a restaurant/fast food company.", img: "projects/yumyum.png", year: 2022, role: "WordPress Developer" },
    { id: 2, name: "JobHuntly", description: "Website for job finding and hosting service.", img: "projects/huntly.png", year: 2023, role: "Fullstack Developer" },
    { id: 3, name: "HiMod", description: "E-Commerce for auto parts and car repair services.", img: "projects/himod.png", year: 2021, role: "Frontend Developer" },
    { id: 4, name: "MarimoStudios", description: "Website for an architecture firm to display their work.", img: "projects/marimostudios.png", year: 2022, role: "Frontend Developer" },
    { id: 5, name: "EcoBazar", description: "E-commerce for a fruit farm/store with delivery services.", img: "projects/eco.png", year: 2024, role: "Fullstack Developer, UI/UX Designer" },
    { id: 6, name: "JavaScript Game", description: "Currently under development, but will be running soon!", img: "projects/game.png", year: 2025, role: "Fullstack Developer" }
];

projects.forEach(project => {
    let container = document.getElementById("projectContainer");
    let projectElement = document.createElement("div");
    projectElement.classList.add("project-card");
    projectElement.innerHTML = `
        <div class="project-image">
            <img src="${project.img}" alt="${project.name}">
        </div>
        <div class="project-info">
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <div class="project-meta">
                <h3>Project Info</h3>
                <div class="line"></div>
                <div class="projectrow"><strong>Year:</strong> ${project.year}</div>
                <div class="line"></div>
                <div class="projectrow"><strong>Role:</strong> ${project.role}</div>
                <div class="line"></div>
            </div>
            <a href="http://yumyum.great-site.net/homepage" class="live-demo">LIVE DEMO <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
    `;
    container.appendChild(projectElement);
});