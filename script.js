document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();

              const targetId = this.getAttribute('href');
              const targetElement = document.querySelector(targetId);

              if (targetElement) {
                  const offset = targetElement.offsetTop - (window.innerHeight - targetElement.offsetHeight) / 2;

                  window.scrollTo({
                      top: offset,
                      behavior: 'smooth'
                  });
              }
          });
      });
  });