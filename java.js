//nav-links

 document.addEventListener("DOMContentLoaded", function(){
  const navLinks = document.querySelectorAll(".navbar-nav a");
  const observation ={threshold: "0.5", rootMargin:"-45"};

  const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        const targetId = entry.target.getAttribute("id");
        // removal active class from the ids
         navLinks.forEach(function(navLink)
         {navLink.classList.remove("active");

         })
         //add active class to the link having matching href
         const activeLink = document.querySelector('.navbar-nav a[href= "#' + targetId + '"]');
         if(activeLink){
          activeLink.classList.add("active");
         }
      }
    })
  })
  //for each section
  const sections =document.querySelectorAll("section");
  sections.forEach(function(section){
    observer.observe(section)
  })
 })


// for carousel
const carousel = document.getElementById('myCarousel');
const elements = document.querySelectorAll('.connect');
// linkage of slide with the connect 
carousel.addEventListener('slide.bs.carousel', function (event) {
  const slideIndex = event.to;
  
  // removal of active-1 state from the connect
  elements.forEach(function (element) {
    element.classList.remove('active-1');
  });
  
  // addition of active-1 state to the connect (onclick)
  elements[slideIndex].classList.add('active-1');
});