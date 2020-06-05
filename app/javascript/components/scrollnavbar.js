const scrollNavbar = () => {
  const logoButton = document.getElementById("logo");
  const projectButton = document.getElementById("project-button")
  const skillsButton = document.getElementById("skills-button")
  const contactButton = document.getElementById("contact-button")

  logoButton.addEventListener('click', (e) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  });

  projectButton.addEventListener('click', (e) => {
    const projectPosition = document.getElementById("project-content").offsetTop
    window.scrollTo({
      top: projectPosition,
      behavior: 'smooth'
    })
  });

  skillsButton.addEventListener('click', (e) => {
    const skillsPosition = document.getElementById("skills-content").offsetTop
    window.scrollTo({
      top: skillsPosition,
      behavior: 'smooth'
    })
  });

  contactButton.addEventListener('click', (e) => {
    const contactPosition = document.getElementById("contact-csontent").offsetTop
    window.scrollTo({
      top: contactPosition,
      behavior: 'smooth'
    })
  });
}

export { scrollNavbar }
