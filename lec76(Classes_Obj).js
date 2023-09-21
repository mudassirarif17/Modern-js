class RailwayForm{
    submit(){
        console.log(this.name ,"Your Form Has been Submited for train number : ", this.trainno);
    }
    cancel(){
        console.log(this.name ," Your Form is cancelled for train number : ",this.trainno);
    }
    fill(name , trainno){
        this.name = name;
        this.trainno = trainno;
    }
}

// create a form for maddy
let maddyForm = new RailwayForm();
// Fill the form with Mudassir details
maddyForm.fill("Mudassir" , 123456);
// create a form for charry
let charryForm1 = new RailwayForm();
let charryForm2 = new RailwayForm();
// Fill the form with Mudassir details
charryForm1.fill("Chaman" , 765781);
charryForm2.fill("Chaman" , 123477);


maddyForm.submit();
charryForm1.submit();
charryForm2.submit();
charryForm1.cancel();