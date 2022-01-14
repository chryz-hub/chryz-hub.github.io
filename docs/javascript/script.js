//Navbar toggle
const navToggle = () => {
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list li');

  // Click function on burger menu
  burger.addEventListener('click', () => {
    // Toggle Navbar and Burger
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

  // Click function on nav links
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      burger.classList.remove('toggle');
      navLinks.forEach((link) => {
        link.style.animation = '';
      });
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
    background: 'chryzhub-website.jpg',
  },
  {
    name: 'chryz-hub/js-projects',
    background: 'js-projects.jpg',
  },
  {
    name: 'chryz-hub/py-projects',
    background: 'py-projects.jpg',
  },
  {
    name: 'chryz-hub/Chryz-Hub-Blogs',
    background: 'chryzhubblog.jpg',
  },
  {
    name: 'chryz-hub/opensource-4-everyone',
    background: 'opensource.jpg',
  },
  {
    name: 'chryz-hub/web-dev-resources',
    background: 'webdevresources.jpg',
  },
  {
    name: 'chryz-hub/connect',
    background: 'connect.jpg',
  },
  // Here can be added some more projets if needed
];

githubprojects.forEach((project) => {
  getproject(project);
});

function getproject({ name, background }) {
  fetch(`https://api.github.com/repos/${name}`)
    .then((response) => {
      return response.json();
    })
    .then((project) => {
      // we add the project card directly to the html dom
      githubprojectsdomelement.innerHTML += createprojectcard(
        project,
        background
      );
    });
}

function createprojectcard(project, background) {
  // removing github emojis cause they are not usable in html
  project.description = project.description.replace(/:[^}]*:/, '');

  // TODO: add Project Card
  let projectcard = `<div class="col-12 col-sm-6 col-lg-4">
    <a href="${project.html_url}" class="project-box">
      <div class="item project">
        <img src="./assets/projects/${background}" class="project-image" alt="${project.name}">
        <div class="project-content">
          <h4 class="text-secondary">${project.name}</h4>
          <p>${project.description}</p>
        </div>
      </div>
    </a>
  </div>`;
  return projectcard;
}
