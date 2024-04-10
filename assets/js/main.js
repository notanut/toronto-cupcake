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