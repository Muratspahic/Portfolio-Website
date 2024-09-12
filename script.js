const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};

function toggleMenu() {
    const sidemenu = document.getElementById('sidemenu');
    const rightValue = window.getComputedStyle(sidemenu).getPropertyValue('right');

    sidemenu.style.right = rightValue === '-200px' ? '0' : '-200px';
};

document.addEventListener('DOMContentLoaded', () => {
    const sidemenu = document.getElementById('sidemenu');
    const navLinks = sidemenu.querySelectorAll('ul li a');

    if (navLinks.length > 0) {
        navLinks.forEach(navLink => {
            navLink.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = navLink.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });

                    sidemenu.classList.remove('open');
                }
            });
        });
    }
});
