// integrate nav bar + next buttons using js 
import {books} from "../../data.js";
//console.log(books);
const footer=``;
const navbar=``;


const openNav =()=> {
            document.getElementById("myOverlay").style.height = "90%"; // Set to 50% of viewport height
            document.getElementById("myOverlay").classList.add("open"); // Add 'open' class for rotation
        }
    document.getElementById("show").addEventListener("click",openNav)
        
const closeNav=()=> {
            document.getElementById("myOverlay").style.height = "0%";
            document.getElementById("myOverlay").classList.remove("open"); // Remove 'open' class to reset rotation
        }

  document.getElementById("close").addEventListener("click",closeNav)