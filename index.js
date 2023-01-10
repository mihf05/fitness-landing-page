
// // Declaring DOM variables ------====================================>
const navBar = document.getElementById('navBar')
const  toggleBtn = document.getElementById('toggleIcon')
const closeBtn = document.getElementById('closeIcon')
const searchDiv = document.getElementById('searchDiv')
const searchIcon = document.getElementById('searchIcon')
const closeSearchIcon = document.getElementById('closeSearchIcon')
const navLinks = document.querySelectorAll('.navLink')


// // toggle NavBar with menu Icon ------====================================>
toggleBtn.onclick = ()=>{
    navBar.classList.add('showNavBar')
    searchDiv.style.display = 'none'
}
closeBtn.onclick = ()=>{
    navBar.classList.remove('showNavBar') 
}

// // Remove navBar by each link ------====================================>
function removeNavBar(){
    navBar.classList.remove('showNavBar') 
}
navLinks.forEach(navLink =>{
    navLink.addEventListener('click', removeNavBar)
})

// // show search Input section ------====================================>
searchIcon.onclick = ()=>{
    navBar.classList.remove('showNavBar') 
    searchDiv.style.display = 'flex'
}
closeSearchIcon.onclick = ()=>{
    searchDiv.style.display = 'none'
    
}
// add bg to the header ------====================================>
function addHeaderBG(){
    const header = document.querySelector('.header')
    if (this.scrollY >= 85){
        header.classList.add('headerBg')
    }else{
        header.classList.remove('headerBg')
    }
}
window.addEventListener('scroll', addHeaderBG)


const  toolBtn = document.getElementById('toolBtn')
const  foodBtn = document.getElementById('foodBtn')
const tools = document.querySelector('.tools')
const food = document.querySelector('.foods')

// // show tools images ------====================================>
toolBtn.addEventListener('click', ()=>{
    toolBtn.classList.add('activeBtn')
    food.classList.add('In_active')
    tools.classList.remove('In_active')

    if(food.classList.contains('In_active')){
      foodBtn.classList.remove('activeBtn')
    }else{
        foodBtn.classList.add('activeBtn')

    }
})

// show Food images ------====================================>
foodBtn.addEventListener('click', ()=>{
    foodBtn.classList.add('activeBtn')
    food.classList.remove('In_active')
    tools.classList.add('In_active')
    
    if(tools.classList.contains('In_active')){
        toolBtn.classList.remove('activeBtn')
      }else{
          toolBtn.classList.add('activeBtn')
  
      }
   
})

