const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const container = btn.nextElementSibling;
        container.classList.toggle("open");
        
    })
})