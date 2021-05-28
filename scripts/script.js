function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });;
let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];
let html = document.documentElement;
let scrollPosition;

btn.onclick = function () {
   scrollPosition = window.pageYOffset;
   modal.style.display = "flex";
   html.style.top = -scrollPosition + "px";
   html.classList.add("modal__opened");
}

span.onclick = function () {
   html.classList.remove("modal__opened");
   window.scrollTo(0, scrollPosition);
   html.style.top = "";
   modal.style.display = "none";
}

window.onclick = function (event) {
   if (event.target == modal) {
      html.classList.remove("modal__opened");
      window.scrollTo(0, scrollPosition);
      html.style.top = "";
      modal.style.display = "none";
   }
};
let skillValue = {
  'html': 95,
  'css': 85,
  'js': 70,
  'bootstrap': 75,
  'sass': 80,
  'gulp': 60,
  'git': 60,
  'visual': 80,
  'photoshop': 60,
}

function numberAnimation(value, sibling){
    let n = 0;
    let t = Math.round(800/value);
    let interval = setInterval(() => {
            ++n;
            if(n==value) clearInterval(interval);
            sibling.innerHTML = n + "%";
        }, t);
}
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry =>{
      if(entry.isIntersecting){
        numberAnimation(skillValue[entry.target.id], entry.target.nextElementSibling);
        entry.target.style.width = skillValue[entry.target.id] + "%";
      }
      if(!entry.isIntersecting){
        entry.target.style.width = 0;
      }
    })
},{ threshold: 0.2});
document.querySelectorAll('.myBar').forEach( (elem) => {observer.observe(elem)});
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
;
let start = null;
let slider = document.getElementsByClassName('slider')[0];

 slider.addEventListener("touchstart",function(event){
   if(event.touches.length === 1){
      start = event.touches.item(0).clientX;
    }else{
      start = null;
    }
  });
  slider.addEventListener("touchend",function(event){
    let offset = 50;
    if(start){

      let end = event.changedTouches.item(0).clientX;

      if(end > start + offset){
       minusSlide();
      }
      if(end < start - offset ){
        plusSlide();
      }
    }
  });;
const svg = document.getElementById('21'),
      container = document.getElementsByClassName('roadMapBox');
svg.setAttribute('width', `${container[0].clientWidth}`);
svg.setAttribute('height', `${container[0].clientHeight}`);  // height and width for svg
let containerCoord = container[0].getBoundingClientRect(),
    containetElements = document.getElementsByClassName('roadMapBox__item'),
    right = null,
    y = null,
    left = null,
    height = null;
const gradient = `<linearGradient id="linear-gradient">
  <stop offset="0%" stop-color="rgba(65,122,150,1)"/>
  <stop offset="21%" stop-color="rgba(136,209,227,1)"/>
  <stop offset="40%" stop-color="rgba(24,255,109,1)"/>
  <stop offset="61%" stop-color="rgba(255,232,8,1)"/>
  <stop offset="100%" stop-color="rgba(38,158,66,1)"/>
  </linearGradient>`;

function getCoordinates(num){
  let elemRect = containetElements[num].getBoundingClientRect();
  right = elemRect.right - containerCoord.right + containerCoord.width;
  left = elemRect.left - containerCoord.left;
  height = containetElements[num].clientHeight / 2;
  y = (elemRect.y - containerCoord.y) + height;
}
function setAtributes(elem, id){
  elem.setAttribute('id', `${id}`);
  getCoordinates(id);
  if(id%2)elem.setAttribute('x1', left);
  else elem.setAttribute('x1', right);
  elem.setAttribute('y1', y);
  getCoordinates(++id);
  if(id%2)elem.setAttribute('x2', left);
  else elem.setAttribute('x2', right);
  elem.setAttribute('y2', y);
  elem.setAttribute("stroke-width", "3");
  elem.setAttribute("stroke", "url(#linear-gradient)");
}
function drawLines(elem){
  let newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
  setAtributes(newLine, elem);
  newLine.classList.add('path');
  svg.append(newLine);
}

if(window.innerWidth >= 675){
svg.innerHTML = gradient;
for (let i = 0; i < --containetElements.length; i++){
  drawLines(i);
}
}
  function drawLinesMobile(elem){
    let newLine = document.createElementNS('http://www.w3.org/2000/svg','path');
    setAtributesMobile(newLine, elem);
    newLine.classList.add('path');
    svg.append(newLine);
  }
  function setAtributesMobile(elem, id){
    elem.setAttribute('id', `${id}`);
    getCoordinates(id);
    let mx = right;
    if(id%2) mx = left;
    let my = y;
    let h1 = height;
    getCoordinates(++id);
    let y2 = y;
    let h2 = height;
    elem.setAttribute("d", `M ${mx},${my}, C ${mx+30}, ${my+(h1+h2)/2}  ${mx+30}, ${y2-(h1+h2)/2}, ${mx}, ${y2}`);
    if(--id%2){ elem.setAttribute("d", `M ${mx},${my}, C ${mx-30}, ${my+(h1+h2)/2}  ${mx-30}, ${y2-(h1+h2)/2}, ${mx}, ${y2}`) ;}
    elem.setAttribute("stroke-width", "3");
    elem.setAttribute("fill", "transparent");
    elem.setAttribute("stroke", "url(#linear-gradient)");
  }
  if(window.innerWidth < 675){
    svg.innerHTML = gradient;
    for (let i = 0; i < --containetElements.length; i++){
      drawLinesMobile(i);
    }
  }

  window.addEventListener("resize", (event) => {
    svg.innerHTML = '';
    svg.innerHTML = gradient;
    svg.setAttribute('width', `${container[0].clientWidth}`);
    svg.setAttribute('height', `${container[0].clientHeight}`);
    containerCoord = container[0].getBoundingClientRect();
    if(window.innerWidth < 675){
      for (let i = 0; i < --containetElements.length; i++){
        drawLinesMobile(i);
      }}
      if(window.innerWidth >= 675){
        svg.innerHTML = gradient;
        for (let i = 0; i < --containetElements.length; i++){
          drawLines(i);
        }
  }})
;