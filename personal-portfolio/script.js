/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    if (isDark) {

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   SCROLL TO TOP
========================= */

const scrollTop =
    document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});

scrollTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        alert("Please fill in all fields.");

        return;

    }


    const mailTo =
        "mailto:your-email@example.com" +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(
            "Name: " +
            name +
            "\nEmail: " +
            email +
            "\n\nMessage:\n" +
            message
        );


    window.location.href = mailTo;

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* =========================
   PROJECT LINKS
========================= */

const projectLinks =
    document.querySelectorAll(".project-link");

projectLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        if (link.getAttribute("href") === "#") {

            event.preventDefault();

            alert(
                "Project link will be added once the project is deployed."
            );

        }

    });

});
