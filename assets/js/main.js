function resolveProfileInfo(profileData) {
    const photo = document.querySelector("#profileImg");
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const profileName = document.querySelector("#profileName");
    profileName.innerHTML = profileData.name + "_";

    const job = document.querySelector("#job");
    job.innerHTML = profileData.job + "_";

    const location = document.querySelector("#location");
    location.innerHTML = profileData.location + "_";

    const phone = document.querySelector("#phone");
    phone.innerHTML = profileData.phone + "_";
    phone.href = `tel:+55${profileData.phone}`;

    const mail = document.querySelector("#mail");
    mail.innerHTML = profileData.email + "_";
    mail.href = `mailto:${profileData.email}`;
}

function resolverSoftSkills(profileData) {
    const softSkills = document.querySelector("#softSkills");
    softSkills.innerHTML = profileData.skills.softSkills.map((skill) => {
        return `<li>${skill}</li>`
    }).join("");
}

function resolverHardSkills(profileData) {
    const hardSkills = document.querySelector("#hardSkills");
    hardSkills.innerHTML = profileData.skills.hardSkills.map((skill) => {
        return `<li>
                    <a href="https://www.flaticon.com/br/icones-gratis/html" title="html ícones">
                    <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
                </a>
            </li>`
    }).join("");
}

function resolverProfileLanguages(profileData) {
    const languages = document.querySelector("#languages");
    languages.innerHTML = profileData.languages.map((language) => {
        return `<li>${language}</li>`
    }).join("");
}

function resolveProjects(profileData) {
    const projects = document.querySelector("#projects");
    projects.innerHTML = profileData.portfolio.map((item) => {
        return `<li>
                    <h2>
                        <i class="fa-brands fa-github"></i>
                        ${item.name}
                    </h2>
                    <a href="${item.url}" title="${item.name}">
                        ${item.url}
                    </a>
                 </li>`
    }).join("");
}

function resolveExperience(profileData) {
    const experience = document.querySelector("#experience");
    experience.innerHTML = profileData.professionalExperience.map((experience) => {
        return `<li>
                    <h3>${experience.name}</h3>
                    <span>
                        <i class="fa-solid fa-calendar-days"></i>
                        ${experience.period}
                    </span>
                    <p>${experience.description}</p>
                </li>`
    }).join("");
}

(async () => {
    const profileData = await fetchProfileDate();
    resolveProfileInfo(profileData);
    resolverSoftSkills(profileData);
    resolverHardSkills(profileData);
    resolverProfileLanguages(profileData);
    resolveProjects(profileData);
    resolveExperience(profileData);
})()