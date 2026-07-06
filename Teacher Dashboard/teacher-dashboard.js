// Today's Date

let today = new Date();

document.getElementById("todayDate").innerHTML =
today.toDateString();



// Attendance Chart

const ctx = document.getElementById("teacherChart");

new Chart(ctx,{

type:"line",

data:{

labels:["Week 1","Week 2","Week 3","Week 4"],

datasets:[{

label:"Attendance",

data:[90,94,91,97],

backgroundColor:"#f97316",

borderColor:"#f97316",

fill:false,

tension:.4

}]

},

options:{

responsive:true

}

});