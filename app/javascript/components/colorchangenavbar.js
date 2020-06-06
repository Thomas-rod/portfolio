const navbarColorChange = () => {
  if (document.getElementById("nav-bar")) {

    // VARIABLE USED TO CHANGE THEIR COLOR
    const navLinks = document.querySelectorAll(".icon-navbar")
    const letterT = document.getElementById("letterT")
    const circleLogo = document.getElementById("circle-logo")
    const letterR = document.getElementById("letterR")

    // VARIABLE BUTTON
    const buttonsNavbar = document.querySelectorAll('.clickable');

    // VARIABLE USED TO KNOW POSITION
    const projectElement = document.getElementById("project-content")
    const skillsElement = document.getElementById("skills-content")
    const contactElement = document.getElementById("contact-content")

    const removeActive = () => {
      navLinks.forEach(link => {
        link.classList.remove("active")
      })
      letterT.setAttribute("fill", "#C0D6DF")
      letterR.setAttribute("fill", "#C0D6DF")
      circleLogo.setAttribute("fill", "#C0D6DF")
    }
    // FIRST EVENT : Listen when user is scrolling
    const changeColor = (position) => {
      if (position <= projectElement.offsetTop) {
        removeActive();
        letterT.setAttribute("fill", "#cc2c1d")
        letterR.setAttribute("fill", "#cc2c1d")
        circleLogo.setAttribute("fill", "#cc2c1d")
      } else if (position > (projectElement.offsetTop ) && position <= (skillsElement.offsetTop - 200)) {
        removeActive();
        document.getElementById("project-nav").classList.add("active")
      } else if (position > (skillsElement.offsetTop -200 ) && position <= (skillsElement.offsetTop + 100 ) ) {
        removeActive();
        document.getElementById("skills-nav").classList.add("active")
      } else if (position > (skillsElement.offsetTop + 100 )) {
        removeActive();
        document.getElementById("contact-nav").classList.add("active")
      }
    }

    window.addEventListener('scroll', (e) => {
      let windowPosition = window.pageYOffset;
      changeColor(windowPosition);
    });

    // SECOND EVENT : Listen when user is clicking on navlinks
    buttonsNavbar.forEach(button => {
      button.addEventListener('click', () => {
        const targetPosition = document.querySelector(button.getAttribute("data-target")).offsetTop
        window.scrollTo({
          top: targetPosition + 20,
          behavior: 'smooth'
        })
        let windowPosition = window.pageYOffset;
        changeColor(windowPosition);

      })
    })
  }
}


export { navbarColorChange }
