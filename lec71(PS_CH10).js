let url = "https://kontests.net/api/v1/all";
let r = fetch(url);

r.then((res)=>{
    return res.json();
}).then((result)=>{
    console.log(result);
    let cards = document.querySelector(".cards")
    ihtml = "";
    result.map((element)=>{
       ihtml +=  `
       <div class="card col-md-3 m-3 col-sm-2" style="width: 18rem;">
       <img src="https://media.istockphoto.com/id/1406633906/photo/girl-programmer-in-the-modern-developer-workplace-for-writing-code-with-white-computer.jpg?s=1024x1024&w=is&k=20&c=GHDDcwR1PphtAcYP3YjLWTTD28plvCD_d0Vu8HxYMoQ=" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${element.name}</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="${element.url}" target="_blank" class="btn btn-primary">Get Details</a>
       </div>
     </div>
        `
    })
    cards.innerHTML = ihtml;
})

