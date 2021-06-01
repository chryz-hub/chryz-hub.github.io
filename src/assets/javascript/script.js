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
  },
  {
    name: 'chryz-hub/chryz-hub.github.io',
  },
  // Here can be added some more projets if needed
];

githubprojects.forEach((project) => {
  getproject(project.name);
});

function getproject(project) {
  fetch(`https://api.github.com/repos/${project}`)
    .then((response) => {
      return response.json();
    })
    .then((project) => {
      // we add the project card directly to the html dom
      githubprojectsdomelement.innerHTML += createprojectcard(project);
    });
}

function createprojectcard(project) {
  // removing github emojis cause they are not usable in html
  project.description = project.description.replace(/:[^}]*:/, '');

  // TODO: add Project Card
  let projectcard = `<a href="${project.html_url}">
    <div class="item project">
      <h4 class="text-secondary">${project.name}</h4>
      <p>${project.description}</p>
      <div>
      <!-- TODO add icons -->
       <!-- <span class="fab fa-html5"></span>
        <span class="fab fa-css3-alt"></span>
        <span class="fab fa-js"></span> -->
      </div>
    </div>
  </a>`;
  return projectcard;
}
