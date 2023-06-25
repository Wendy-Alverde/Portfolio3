// ceci est un court commentaire
/* Ceci est un long commentaire*/

/*let div = document.createElement('div');
div.classList.add('top');
div.innerHTML = `<span>Top zone</span>`;*/


//Menu burger
function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const link = document.querySelectorAll('.navbar a');

    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        });
    });
}

menuMobile(); // À fonctionné après avoir tout fermé et rouvert plusieurs fois

//effets Rien ne fonctionne

const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar');

    sections.forEach((section, index) => {
        if (index === 0) return;
        section.style.opacity = "0"; //On peut faire du style dans js
        section.style.transition = "all 1.6s";
    });

    skills.forEach((elem, index) => {
        section.style.width = "0"; 
        section.style.transition = "all 1.6s";
    });

    let sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.style.opacity = 1;
            }
        });
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    let skillsObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.style.width = elem.dataset.width + '%';
            }
        });
    });

    skills.forEach(skill => {
        skillsObserver.observe(skill);
    });
}

observerIntersectionAnimation();

//skills
