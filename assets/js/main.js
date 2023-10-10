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

function resolverHardSkills(profileData) {
    const softSkills = document.querySelector("#softSkills");
    console.log(softSkills);
    
}

(async () => {
    const profileData = await fetchProfileDate();
    resolveProfileInfo(profileData);
    resolverHardSkills(profileData);
})()