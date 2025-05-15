// list of book
import {books} from "./data.js"
import {style} from "./style.js"
const list =document.getElementById("list");
const selectbtns=document.querySelectorAll('input[name="select"]')
const labels=document.getElementsByTagName("label")
const searchbtn=document.getElementById("search")
let quoteflag=0;

        // searching 
  
const search=(books)=>{
  
   const searching=()=>{
     let sorted=[]
     if(select=="b"){
       labels[0].style.cssText="background-color:var(--primary);color:var(--tertiary);font-weight:bold;";
       labels[1].style.cssText="background-color:var(--secondary);color:var(--tertiary);font-weight:normal;"
       searchbtn.placeholder="eg:atomic habits, art of war, book etc...."
   //  console.log(searchbtn.value)
    // console.log(books[0].name)
        books.forEach((book)=>{
         if(book.name.toLowerCase().includes(searchbtn.value.toLowerCase().replaceAll(" ","-"))){
               sorted.push(book)
         }  
            })
            display(sorted);
            
     }
     else{
       labels[1].style.cssText="background-color:var(--primary);color:var(--tertiary);font-weight:bold;";
       labels[0].style.cssText="background-color:var(--secondary);color:var(--tertiary);font-weight:normal;"
       searchbtn.placeholder="eg: what you think...,quotes etc....."
        list.innerHTML=""
         books.forEach((book)=>{
             
              quoteflag=1;
              let quotes =listQuotes(book);
              list.innerHTML+=quotes;
         })
     }
     }
   searching();
      
      searchbtn.addEventListener("input",searching);
      
}

let select="b";
selectbtns.forEach((btn)=>{
  btn.addEventListener("change",()=>{
    if(btn.checked)
     select=btn.value;
//     console.log(select)
     search(books);
})
  })


// display books
const display= (books)=>{
  // getting quotes & putting it in <li>
    quoteflag=0;
     list.innerHTML=""
      books.forEach((book,index)=>{
      let quotes=listQuotes(book);
      
  //    console.log(quotes);
      
     let item=` <li class="book-name">
             <h2>${book.name.replaceAll("-"," ")} by ${book.author}</h2>
             <ul class="quotes">
                ${quotes}
             </ul>
          </li><hr>`
          //appending item in html 
          list.innerHTML+=item;
  //        console.log(book.name)
       
        })
        style();
}
const listQuotes=(book)=>{
  let quotes=``;
  book.quotes.forEach((quote, index) => {
    // quoteflag=1, come from searching
    if(quoteflag){
       if(quote.toLowerCase().includes(searchbtn.value.toLowerCase()))
        quotes += `<li><a href="./quotes/${book.name}/${book.name}${index}.html">${quote}</a></li><br><br>`;    
    }
    //quoteflag=0, comes from display 
    else{
  quotes += `<li><a href="./quotes/${book.name}/${book.name}${index}.html">${quote}</a></li>`;
    }
});
  return quotes;
}
display(books);
search(books);
style();