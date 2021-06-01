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
    icon: 'description',
  },
  // Here can be added some more projets if needed
];

githubprojects.forEach((project) => {
  getproject(project.name, project.icon);
});

function getproject(project, icon) {
  fetch(`https://api.github.com/repos/${project}`)
    .then((response) => {
      return response.json();
    })
    .then((project) => {
      // we add the project card directly to the html dom
      githubprojectsdomelement.innerHTML += createprojectcard(project, icon);
    });
}

function createprojectcard(project, icon) {
  // removing github emojis cause they are not usable in html
  project.description = project.description.replace(/:[^}]*:/, '');

  // TODO: add Project Card
  let projectcard = `<a href="#">
    <div class="item project">
      <h4 class="text-secondary">Chryz-Hub Website</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quos consequatur atque perferendis
        sapiente consectetur iusto tempora temporibus, sequi maxime.</p>
      <div>
        <span class="fab fa-html5"></span>
        <span class="fab fa-css3-alt"></span>
        <span class="fab fa-js"></span>
      </div>
    </div>
  </a>`;
  return projectcard;
}
