// const toggle = document.getElementById("toggle");
// const body = document.getElementById("body");
// toggle.addEventListener("click", () => body.classList.toggle("show"));

const btnContainer = document.querySelector(".projects_menu");
const btnTabs = document.querySelectorAll(".projects_btn ");
const menuItems = document.querySelectorAll(".projects_con ");
btnContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".projects_btn ");
  console.log(clicked);
  if (!clicked) return;
  btnTabs.forEach((btn) => btn.classList.remove("active"));
  menuItems.forEach((item) => item.classList.remove("content_active"));
 
  clicked.classList.add("active");

  document
    .querySelector(`.content_${clicked.dataset.tab}`)
    .classList.add("content_active");
});  
const wrapper = document.querySelector('#wrapper')                   
const bodyHTML = document.querySelector('#body') 
const changeMode = document.querySelector('#toggle')
console.log(bodyHTML);
changeMode.addEventListener('click' ,() => {
  wrapper.classList.toggle('show')
})




