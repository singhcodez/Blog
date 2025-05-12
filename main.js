const list =document.getElementById("list");
const selectbtns=document.querySelectorAll('input[name="select"]')
const searchbtn=document.getElementById("search")
let quoteflag=0;
//, list of books
const books=[
        {
        name:"book-1",
        author:"writer",
        quotes:["do it","just do it"]
        },
        {
        name:"bro2",
        author:"writer1",
        quotes:["be calm","fresh"]
        }
        ]
        // searching 
  
const search=(books)=>{
  
   const searching=()=>{
     let sorted=[]
     if(select=="b"){
   //  console.log(searchbtn.value)
    // console.log(books[0].name)
        books.forEach((book)=>{
         if(book.name.includes(searchbtn.value.toLowerCase().replaceAll(" ","-"))){
               sorted.push(book)
         }  
            })
            display(sorted);
            
     }
     else{
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
      
     let item=` <li>
             <h2>${book.name.replaceAll("-"," ")} by ${book.author}</h2>
             <ul class="quotes">
                ${quotes}
             </ul>
          </li>`
          //appending item in html 
          list.innerHTML+=item;
  //        console.log(book.name)
        })
}
const listQuotes=(book)=>{
  let quotes=``;
  book.quotes.forEach((quote, index) => {
    // quoteflag=1, come from searching
    if(quoteflag){
       if(quote.includes(searchbtn.value.toLowerCase()))
        quotes += `<li><a href="./quotes/${book.name}/${book.name}${index}.html">${quote}</a></li>`;    
    }
    //quoteflag=0, comes from display 
    else{
  quotes += `<li><a href="./quotes/${book.name}/${book.name}${index}.html">${quote}</a></li>`;
    }
});
  return quotes;
}
display(books);
