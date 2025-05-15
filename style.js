import {books} from "./data.js";
const searchbtn=document.getElementById("search")
const bookNames = document.getElementsByClassName("book-name")
const quotes =document.getElementsByClassName("quotes")

export const style=()=>{ 
// in opened, program store the index of those bookNames which opened or show quotes
let opened=[];
let flag=0;

for (let i = 0; i < quotes.length; i++) {
    quotes[i].style.display="none"
}

const displayQuotes=(i)=>{
         quotes[i].style.display="block";
      
}

const hideQuotes=(i)=>{
         quotes[i].style.display="none";
      
}



for (let i = 0; i < bookNames.length; i++) {
  bookNames[i].addEventListener("click",()=>{
    // checking the quotes displayed(0) or hide(1)
   opened.forEach((j)=>{
     if(i==j){
       flag=1;
     } else {
       flag=0;
     }
   })
   
   
    if(flag==0){ // not found
      displayQuotes(i);
      opened.push(i)
    } else { // found
      hideQuotes(i);
      opened.splice(opened.indexOf(i),1);
      flag=0;
    }
    
    
  });
}
 

}

searchbtn.addEventListener("click",()=>{
       document.getElementById("select-sec").setAttribute("class","select-secAnimate")
        setInterval(()=>{
          
        document.getElementById("select-sec").style.cssText="top:-18pt; z-index:100;"},600);
})

