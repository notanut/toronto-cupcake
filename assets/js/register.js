// js buat register
const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

// js buat navbar
/*show menu*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
      // nambah show-menu class ke nav menu
      nav.classList.toggle('show-menu')
      // nambah show-icon buat nunjukin sm hide menu icon
      toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle','nav-menu')

/*nampilin dropdown menu*/
const dropdownItems = document.querySelectorAll('.dropdown_item')

//ngambil semua dropdown item
dropdownItems.forEach((item) =>{
   const dropdownButton = item.querySelector('.dropdown_button') 

   //button click
   dropdownButton.addEventListener('click', () =>{
       const showDropdown = document.querySelector('.show-dropdown')
       toggleItem(item)
       if(showDropdown && showDropdown!== item){
           toggleItem(showDropdown)
       }
   })
})

const toggleItem = (item) =>{
   const dropdownContainer = item.querySelector('.dropdown_container')
   if(item.classList.contains('show-dropdown')){
       dropdownContainer.removeAttribute('style')
       item.classList.remove('show-dropdown')
   } else{
       dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
       item.classList.add('show-dropdown')
   }
}

const mediaQuery = matchMedia('(min-width: 1118px)'),
     dropdownContainer = document.querySelectorAll('.dropdown_container')

const removeStyle = () =>{
   if(mediaQuery.matches){
       dropdownContainer.forEach((e) =>{
           e.removeAttribute('style')
       })
       dropdownItems.forEach((e) =>{
           e.classList.remove('show-dropdown')
       })
   }
}
addEventListener('resize', removeStyle)