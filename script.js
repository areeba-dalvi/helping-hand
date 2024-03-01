
// COUNTER STARTS
// Function to check if an element is in the viewport
const isInViewport = (element) => {
                  const rect = element.getBoundingClientRect();
                  return (
                      rect.top >= 0 &&
                      rect.left >= 0 &&
                      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                  );
              };
              
              // Function to start counters when the section is in the viewport
              const startCounters = () => {
                  const counterNum = document.querySelectorAll(".counter-numbers");
                  const speed = 5;
              
                  counterNum.forEach((curElem) => {
                      const updatedNumber = () => {
                          const targetNumber = parseInt(curElem.dataset.number);
                          const initialNum = parseInt(curElem.innerText);
                          const incrementNumber = Math.trunc(targetNumber / speed);
              
                          if (initialNum < targetNumber) {
                              curElem.innerText = `${initialNum + incrementNumber}`;
                              // Add style to the 'K'
                              curElem.innerHTML += '<span style="color: #F0AC1A;">+</span>';
                              setTimeout(updatedNumber, 300);
                          }
                      };
                      updatedNumber();
                  });
              };
              
              // Using Intersection Observer to detect when the section is in the viewport
              const counterSection = document.getElementById('counter-section');
              const observer = new IntersectionObserver((entries) => {
                  entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                          // Start counters when the section is in the viewport
                          startCounters();
                          // Disconnect the observer after the counters have started
                          observer.disconnect();
                      }
                  });
              });
              
              // Start observing the section
              observer.observe(counterSection);
              
              
              
              // COUNTER ENDS
              
              
              
              
              
              
              
              
              
              
              
              // HEADER TOGGLE BUTTON
              
              $(document).ready(function () {
                  $('.slick-carousel').slick({
                      autoplay: true,
                      autoplaySpeed: 2000,
                      dots: false,
                      prevArrow: false,
                      nextArrow: false,
                      responsive: [
                          {
                              breakpoint: 768,
                              settings: {
                                  arrows: false
                              }
                          }
                      ]
                  });
              
                  // Mobile menu toggle
                  $('#mobile-menu-button').click(function () {
                      $('#mobile-menu').slideToggle();
                  });
              });
              
              $(document).ready(function () {
                  $('.testimonial-carousel').slick({
                      autoplay: true,
                      autoplaySpeed: 5000,
                      arrows: false,
                      responsive: [
                          {
                              breakpoint: 768,
                              settings: {
                                  
                              }
                          }
                      ]
                  });
              
                  // Mobile menu toggle
                  $('#mobile-menu-button').click(function () {
                      $('#mobile-menu');
                  });
              });
              
              // HEADER TOGGLE BUTTON ENDS
              
              
              
              // PROGRESS BUTTON START
              let calcScrollValue = () => {
                  let scrollProgress = document.getElementById("progress");
                  let progressValue = document.getElementById("progress-value");
                  let pos = document.documentElement.scrollTop;
                  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
                  let scrollValue = Math.round((pos * 100) / calcHeight);
              
                  if(pos > 100){
                      scrollProgress.style.display = "grid";
                  }
                  else{
                      scrollProgress.style.display = "none";
                  }
              
                  scrollProgress.addEventListener("click", () =>{
                      document.documentElement.scrollTop = 0;
                  });
              
                  scrollProgress.style.background = `conic-gradient(#F0AC1A ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
              };
              
              window.onscroll = calcScrollValue;
              window.onload = calcScrollValue;
              
              // PROGRESS BUTTON END
              
                    
              
              
              
              
              // AOS LIBRARY
              AOS.init({
                  offset: 300,
                  duration:1000
              });























// // scroll section
// let sections = document.querySelectorAll('section');



// window.onscroll = () =>{
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;
//         // let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             // acttive sections for animation on scroll
//             sec.classList.add('show-animate');
//         }
//         // if want to use animation that repeats on scroll
//         else{
//             sec.classList.remove('show-animate');
//         }

//     });
   
// }