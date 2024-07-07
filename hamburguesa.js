// Icono hamburguesa
const iconoH = document.getElementById("icono-h"); 
const menuHam = document.getElementById("menu-ham");
//  const listHam = document.getElementById("nave-list-mv");
let showMenu = false;

iconoH.addEventListener("click", iconoMenu);

function iconoMenu(){
 if(showMenu === false){
   menuHam.style.display = "flex"
   menuHam.style.flexDirection = "column"
   // listHam.style.display = "block"
   showMenu = true;
 } else{
   menuHam.style.display = "none";
   menuHam.style.flexDirection = "row"
   // listHam.style.display = "none"
   showMenu = false;
 }
}