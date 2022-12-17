let text = "mehul";
let age = 22;
let hobbies = ["sport", "painting", "chess"];
alert(text);
alert(age);
alert(hobbies[1]);

let job = {title:"developer",place:"india",salary:65000};
alert(job.place);
alert(job.salary);


let adultYear;
function calculateAdultYears(userAge){
    return userAge - 10;
}

adultYear=calculateAdultYears(age);
alert(adultYear);