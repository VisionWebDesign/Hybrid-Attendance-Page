document.getElementById("loginBtn").onclick = function(){

let role =
document.getElementById("role").value;

if(role === "student"){

window.location.href =
"../Student-page/Dashboard/student.html";

}

else if(role === "teacher"){

window.location.href =
"../Teacher Dashboard/teacher-dashboard.html";

}

else if(role === "admin"){

window.location.href =
"../Admin Page/Dashboard.html";

}

else{

alert("Please Select Role");

}

}