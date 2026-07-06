// Date

let today = new Date();

document.getElementById("todayDate").innerHTML =
today.toDateString();



// Chart

const ctx = document.getElementById("adminChart");

new Chart(ctx,{

type:"bar",

data:{

labels:["Jan","Feb","Mar","Apr"],

datasets:[{

label:"Attendance",

data:[78,84,82,90],

backgroundColor:"#f97316"

}]

},

options:{

responsive:true

}

});