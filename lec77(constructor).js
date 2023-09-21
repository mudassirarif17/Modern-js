class RailwayForm{
    constructor(name , trainno , address){
        this.name = name;
        this.trainno = trainno;
        this.address = address;
        // console.log("Constructor cancelled..."+ this.name + " " + this.trainno);
    }
    preview(){
        console.log(this.name , "Your form for train number : ",this.trainno + " and your address is : " + this.address)
    }
    submit(){
        console.log(this.name ,"Your Form Has been Submited for train number : ", this.trainno);
    }
    cancel(){
        console.log(this.name ," Your Form is cancelled for train number : ",this.trainno);
        this.trainno = 0;
    }
}

// create a form for maddy
let maddyForm = new RailwayForm("Mudassir" , 123456 , "420, Pacific Ocean , Ocean , DHA - 0000555 ");
maddyForm.preview();
maddyForm.submit();
maddyForm.cancel();
maddyForm.preview();