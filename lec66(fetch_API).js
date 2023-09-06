// let p = fetch("https://goweather.herokuapp.com/weather/Ny");
var result;
let p = fetch("https://jsonplaceholder.typicode.com/posts")
p.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json();
}).then((val2)=>{
    console.log(val2)
    result = val2;
}).catch((err)=>{
    console.log(err)
})

let w = document.querySelector(".weather")
// w.innerHTML = "The waether is : " + result;