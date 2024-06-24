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
    var sidemenu = document.getElementById("sidemenu");

    var rightValue = window.getComputedStyle(sidemenu).getPropertyValue("right");

    if (rightValue === "-200px") {
        sidemenu.style.right = "0";
    } else {
        sidemenu.style.right = "-200px";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('nav ul#sidemenu li a');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Zatvaranje bočnog menija ako je otvoren (opciono)
                var sidemenu = document.getElementById('sidemenu');
                sidemenu.classList.remove('open');
            }
        });
    });
});

