// Menyorot link navbar saat scroll
window.addEventListener('scroll', highlightNav);

function highlightNav() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3 && pageYOffset < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}


const isElementInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 && 
    rect.left >= 0 && 
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const handleScroll = () => {
  const textContainer = document.querySelector('#home .text-container');
  if (textContainer && isElementInViewport(textContainer)) {
    textContainer.classList.add('slide-in'); // Add slide-in class when in view
    window.removeEventListener('scroll', handleScroll); // Remove listener after triggering
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', handleScroll); // Listen for scroll events
});

$(document).ready(function () {
  $(".opacity-0").css("opacity", "0")
  $(".opacity-0").css("opacity", "1")
  $(".opacity-0").css("transition", "1s")
});

const cursorEffect = (e, element, size, duration, timingFunctions) => {
	const mouseX = e.clientX - size / 2;
	const mouseY = e.clientY - size / 2;
	element.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
	element.style.transition = `transform ${duration}ms ${timingFunctions}`;
};

$(window).on("mousemove", (e) => {
	cursorEffect(e, $(".cursor")[0], 63, 40, "linear");
});

(function addCursor() {
  $("body").prepend($("<div>").addClass("cursor"));
})();

$(document).ready(function() {
  $(".about-right").hover(function() {
    $(this).addClass("bounce");
  }, function() {
    $(this).removeClass("bounce");
  });
});