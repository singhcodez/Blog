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
     
      // show all quotes 
const url=new  URLSearchParams(window.location.search)
const bookname=url.get("book")

books.forEach((book)=>{
    if(book.name==bookname){
        book.quotes.forEach((quote)=>{
            document.getElementById("show-quote").innerHTML+=`${quote} <br>`;
        } )
        document.getElementById("show-quote").innerHTML+=`         <a href="javascript:void(0)" class="closebtn" id="close">&times;</a>"`;
        return 0;
    }
}
) 
      
        
const closeNav=()=> {
            document.getElementById("myOverlay").style.height = "0%";
            document.getElementById("myOverlay").classList.remove("open"); // Remove 'open' class to reset rotation
        }

  document.getElementById("close").addEventListener("click",closeNav)
