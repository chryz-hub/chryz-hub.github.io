import Link from './link.js'

//Navbar toggle
const navToggle = () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li');

    burger.addEventListener('click', () => {
        // Toggle Navbar
        navList.classList.toggle('active');
        burger.classList.toggle('toggle');

        // Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
    });
}

const links = () => {
    const anchor = document.querySelectorAll('.link')
    anchor.forEach((anchorTag) => {
        const redirectTo = anchorTag.getAttribute('href')
        if (redirectTo.length == 0 || redirectTo == '#'){
            // Not Implemented
            // Nothing to do as the link redirects to the
            // same page
        } else {
            anchorTag.addEventListener('click', (event) => {
                event.preventDefault()
                const redirect = new Link(
                    redirectTo,
                    !redirectTo.startsWith('.')
                )
            })
        }
    })
}

links()
navToggle();