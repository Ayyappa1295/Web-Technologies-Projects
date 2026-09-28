function searchJobs() {

    const keyword =
        document.getElementById("homeSearch").value;

    const location =
        document.getElementById("homeLocation").value;

    let url = "jobs.html?";

    if (keyword) {
        url += "search=" + encodeURIComponent(keyword);
    }

    if (location) {
        url += "&location=" + encodeURIComponent(location);
    }

    window.location.href = url;
}


function filterJobs() {

    const search =
        document.getElementById("jobSearch")
        .value
        .toLowerCase();

    const category =
        document.getElementById("categoryFilter")
        .value;

    const location =
        document.getElementById("locationFilter")
        .value;

    const jobs =
        document.querySelectorAll(".job-item");

    jobs.forEach(job => {

        const text =
            job.innerText.toLowerCase();

        const jobCategory =
            job.dataset.category;

        const jobLocation =
            job.dataset.location;

        const matchesSearch =
            text.includes(search);

        const matchesCategory =
            category === "" ||
            jobCategory === category;

        const matchesLocation =
            location === "" ||
            jobLocation === location;

        if (
            matchesSearch &&
            matchesCategory &&
            matchesLocation
        ) {

            job.style.display = "flex";

        } else {

            job.style.display = "none";

        }

    });

}


function applyJob() {

    alert(
        "Application started successfully! 🚀\n\nPlease login or create an account to continue."
    );

}


function saveJob() {

    alert(
        "Job saved successfully! ❤️"
    );

}


function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value;

    alert(
        "Welcome back! 👋\n\nLogin submitted for: " + email
    );

}


function registerUser(event) {

    event.preventDefault();

    alert(
        "Account created successfully! 🎉"
    );

}


function postJob() {

    alert(
        "Job posting form will open here.\n\nEmployer job posting feature is ready to be connected with a backend."
    );

}


function viewApplicants() {

    alert(
        "Applicant management page will open here."
    );

}
