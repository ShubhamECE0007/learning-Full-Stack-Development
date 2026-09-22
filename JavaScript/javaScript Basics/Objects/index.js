let Credentials = {
    Name:"Shubham Singh",
    Branch:"Electronics And Communiacation",
    Roll_No:2503203100121,
    CollegeName:"ABES Engineering College",
    Year :function(){
        console.log("I am in 2nd Year of Engineering");
    },
    printDetails : function(){
        console.log("My name is "+this.Name);
        console.log("I am from "+this.Branch+" Branch");
        console.log("My Roll Number is "+this.Roll_No);
        console.log("I am studying in " + this.CollegeName);
        this.Year();
    }
}

Credentials.printDetails();
console.log(Object.keys(Credentials));
console.log(Object.values(Credentials));
console.log(Object.entries(Credentials));

