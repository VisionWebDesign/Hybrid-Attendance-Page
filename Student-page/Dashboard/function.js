let today = new Date();

document.getElementById("todayDate").innerHTML =
today.toDateString();

const ctx = document.getElementById("attendanceChart");

new Chart(ctx,{

type:"bar",

data:{

labels:["Week 1","Week 2","Week 3","Week 4","Week 5","Week 6","Week 7","Week 8"],

datasets:[{

label:"Attendance %",

data:[80,85,78,90],

backgroundColor:"#f97316"

}]

},

options:{

responsive:true

}

});