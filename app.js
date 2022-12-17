let text = "mehul";
let age = 22;
let hobbies = ["sport", "painting", "chess"];
console.log(text);
console.log(age);
console.log(hobbies[1]);

let job = {title:"developer",place:"india",salary:65000};
console.log(job.place);
console.log(job.salary);


let adultYear;
function calculateAdultYears(userAge){
    return userAge - 10;
}

adultYear=calculateAdultYears(age);
console.log(adultYear);

let person={
    name:'mehul', //property
    greet(){      //method
        console.log('hello');
    }
};

person.greet();