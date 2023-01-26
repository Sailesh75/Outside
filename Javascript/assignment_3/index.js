//DOM manipulation
const domFunction = (element, className, id, text, targetId, dataIndex) => {
  var element = document.createElement(element);
  element.className = className;
  element.id=id;
  element.appendChild(document.createTextNode(text));
  document.querySelector(targetId).appendChild(element);
  element.dataset.index = dataIndex;
};

//carousel-controls
domFunction('div','carousel-controls','','','.container');
domFunction('button','carousel-control','prev','Previous','.carousel-controls');
domFunction('div','carousel-indicators','','','.carousel-controls');
domFunction('span','indicator active','','','.carousel-indicators','0');
domFunction('span','indicator','','','.carousel-indicators','1');
domFunction('span','indicator','','','.carousel-indicators','2');
domFunction('button','carousel-control','next','Next','.carousel-controls');

var images = document.querySelectorAll('.carousel-image-wrapper img');
var indicators = document.querySelectorAll('.indicator');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var currentIndex = 0;
var translateX = 0;
var slideInterval = setInterval(nextSlide,3000);

prev.addEventListener('click', function() {
  clearInterval(slideInterval);
  prevSlide();
});

next.addEventListener('click', function() {
  clearInterval(slideInterval);
  nextSlide();
});


for (var i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener('click', function() {
      clearInterval(slideInterval);
      var currentIndex = parseInt(this.getAttribute('data-index'));
      goToSlide(currentIndex);
    });
  }
  
  function prevSlide() {
    goToSlide(currentIndex - 1);
  }
  
  function nextSlide() {
    goToSlide(currentIndex + 1);
  }
  
  function goToSlide(index) {
    if (index < 0) {
      index = images.length - 1;
    } else if (index >= images.length) {
      index = 0;
    }
  
    indicators[currentIndex].classList.remove('active');
    indicators[index].classList.add('active');
    images[currentIndex].classList.remove('active');
    images[index].classList.add('active');
  
    translateX = -1 * (index * images[0].clientWidth);
    images[currentIndex].parentNode.style.transform = 'translateX(' + translateX + 'px)';
    currentIndex = index;
  }
  
