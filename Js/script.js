const circle = document.querySelector(".image-circle");
let angle = 0;

function rotateCircle() {
    angle += 0.3;
    circle.style.transform = `rotateY(${angle}deg)`;
    requestAnimationFrame(rotateCircle);
}
rotateCircle();

document.addEventListener("DOMContentLoaded", () => {
    const lines = [
        { raw: "// Hi, I'm Kashif — Full Stack Web Developer", cls: "t-cm" },
        { raw: "const contact = {", cls: "" },
        { raw: '  name: "Kashif",', cls: "t-attr" },
        { raw: '  role: "Full Stack Web Developer",', cls: "t-attr" },
        { raw: '  email: "m.kashif.k103@gmail.com",', cls: "t-str" },
        { raw: '  phone: "+92 312 6704115",', cls: "t-str" },
        { raw: '  skills: ["HTML","CSS","JS","React","Node","PHP","Python"],', cls: "" },
        { raw: "}", cls: "" },
        { raw: 'console.log("Ready to build something great!")', cls: "t-k" }
    ];

    const container = document.getElementById("typing-lines");
    const cursor = document.querySelector(".typing-cursor");
    if (!container || !cursor) return;

    let lineIndex = 0, charIndex = 0;
    const typingSpeed = 40;
    const linePause = 600;
    const loopDelay = 1000;

    function typeLine() {
        if (lineIndex >= lines.length) {
            setTimeout(() => {
                container.innerHTML = "";
                lineIndex = 0;
                charIndex = 0;
                typeLine();
            }, loopDelay);
            return;
        }

        const { raw, cls } = lines[lineIndex];
        if (charIndex === 0) {
            const span = document.createElement("span");
            if (cls) span.className = cls;
            span.setAttribute("data-line", lineIndex);
            container.appendChild(span);
        }

        const span = container.querySelector(`span[data-line="${lineIndex}"]`);
        span.textContent += raw[charIndex];
        charIndex++;

        if (charIndex < raw.length) {
            setTimeout(typeLine, typingSpeed);
        } else {
            container.appendChild(document.createElement("br"));
            charIndex = 0;
            lineIndex++;
            setTimeout(typeLine, linePause);
        }
    }

    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
    }, 500);

    typeLine();
});


const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.3 }
);

cards.forEach((card) => observer.observe(card));

const parallax = document.querySelector(".parallax-bg");
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    parallax.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});

const createParticle = () => {
    const particle = document.createElement("span");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.querySelector(".parallax-bg").appendChild(particle);
    setTimeout(() => particle.remove(), 6000);
};
setInterval(createParticle, 400);