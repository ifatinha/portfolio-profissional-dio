const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const accordion = btn.parentElement;
        accordion.classList.toggle("open");
        
        let panel = btn.nextElementSibling;
        
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
})