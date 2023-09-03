let p = fetch("");
p.then((val)=>{
    return val.json();
}).then((val2)=>{
    return val2.json();
}).catch((err)=>{
    console.log(err)
})