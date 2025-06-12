// integrate nav bar + next buttons using js 
import {books} from "../../data.js";
//console.log(books);

      // show all quotes
   console.log(window.location)  
const url=new  URLSearchParams(window.location.search)
const bookname=url.get("book")??"";

books.forEach((book,currentIndex)=>{
    
    // problem ⭐ 
        if(false){//bookname=null
        // nav tabs of navbar
        document.getElementById("navbar").innerHTML=`    <a href="../../index.html">Home</a>
    <a href="#" id="show" >Show All books</a>`
        
        // show quotes of particular book
        books[Math.round(Math.random()*(--books.length))].quotes.forEach((quote)=>{
            document.getElementById("show-quote").innerHTML+=`${quote} <hr>`;
        } )
        document.getElementById("show-quote").innerHTML+=`<a href="javascript:void(0)" class="closebtn" id="close">&times;</a>`;
     // previous & forward tabs 
       
       
        return 0;
    }
// problem section ended
    
    if(book.name==bookname){
        // nav tabs of navbar
        document.getElementById("navbar").innerHTML=`    <a href="../../index.html">Home</a>
    <a href="#" id="show" >Show All Quotes</a>
    <a href="./${book.name}${currentIndex+1}.html">Next</a>`
        
        // show quotes of particular book
        book.quotes.forEach((quote)=>{
            document.getElementById("show-quote").innerHTML+=`${quote} <hr>`;
        } )
        document.getElementById("show-quote").innerHTML+=`<a href="javascript:void(0)" class="closebtn" id="close">&times;</a>`;
     // previous & forward tabs 
       if(currentIndex==0){
       document.getElementById("prevNext").innerHTML=`           
        <a href="../../index.html">Previous</a>
        <a href="./${book.name}${currentIndex+1}.html">Next learn </a>`
       }
       else{
           document.getElementById("prevNext").innerHTML=`           
        <a href="./${book.name}${currentIndex-1}.html">Previous</a>
        <a href="./${book.name}${currentIndex+1}.html">Next learn </a>`
    
       }
        return 0;
    }
}
) 
 

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
