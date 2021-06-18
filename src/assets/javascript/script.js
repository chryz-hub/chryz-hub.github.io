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
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });
  });
};

navToggle();

// GitHub Projects
// ##############################################

var githubprojectsdomelement = document.getElementById('githubprojects');

let githubprojects = [
  {
    name: 'chryz-hub/chryz-hub.github.io',
    background: 'community-website.jpg',
  },
  {
    name: 'chryz-hub/js-projects',
    background: 'js-projects.PNG'
  },
  {
    name: 'chryz-hub/py-projects',
    background: 'py-projects.PNG'
  },
  // Here can be added some more projets if needed
];

githubprojects.forEach((project) => {
  getproject(project);
});

function getproject({name, background}) {
  fetch(`https://api.github.com/repos/${name}`)
    .then((response) => {
      return response.json();
    })
    .then((project) => {
      // we add the project card directly to the html dom
      githubprojectsdomelement.innerHTML += createprojectcard(project, background);
    });
}

function createprojectcard(project, background) {
  // removing github emojis cause they are not usable in html
  project.description = project.description.replace(/:[^}]*:/, '');

  // TODO: add Project Card

  let projectcard = `<a href="${project.html_url}">
    <div class="item project" style="background-image: url(https://raw.githubusercontent.com/chryz-hub/chryz-hub.github.io/master/src/assets/images/projects/${background})">
      <h4 class="text-secondary">${project.name}</h4>
      <p>${project.description}</p>
      <div>
        <span class="fab fa-react"></span>
        <span class="fab fa-js"></span>
      </div>
    </div>
  </a>`;
  return projectcard;
}
