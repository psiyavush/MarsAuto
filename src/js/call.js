"use strict";var overlayCall=document.querySelector(".overlay__call"),callBtn=document.querySelectorAll(".call"),addForm=document.querySelector(".overlay__call-form"),sent=document.querySelector(".sent"),data1=(callBtn.forEach(function(e){e.addEventListener("click",function(){overlayCall.style.display="flex"})}),addForm.addEventListener("submit",function(e){e.preventDefault(),fetch("http://localhost:3000/call",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.target[0].value,phone:e.target[1].value})}).then(function(){overlayCall.style.display="none",sent.style.display="flex",setTimeout(function(){sent.style.display="none"},4e3),e.target.reset()})}),overlayCall.addEventListener("click",function(e){e.target.classList.contains("overlay__call")&&(overlayCall.style.display="none")}),sent.addEventListener("click",function(e){e.target.classList.contains("sent")&&(sent.style.display="none")}),document.addEventListener("keyup",function(e){"Escape"===e.code&&"flex"===overlayCall.style.display&&(overlayCall.style.display="none"),"Escape"===e.code&&"flex"===sent.style.display&&(sent.style.display="none"),"Escape"===e.code&&"flex"===overlayTest.style.display&&(overlayTest.style.display="none"),"Escape"===e.code&&"flex"===overlayRent.style.display&&(overlayRent.style.display="none")}),moment.locale("ru"),document.querySelector(".data-1")),data2=document.querySelector(".data-2"),data3=document.querySelector(".data-3"),data4=document.querySelector(".data-4"),data5=document.querySelector(".data-5"),data6=document.querySelector(".data-6"),data7=document.querySelector(".data-7"),overlayTest=document.querySelector(".overlay__test"),addFormTest=document.querySelector(".overlay__test-forms"),testBtn=document.querySelector(".test-btn"),testData=document.getElementById("test-data"),testTime=document.getElementById("test-time"),rentBtn=(data1.innerHTML=moment().format("L"),data2.innerHTML=moment().add(1,"days").format("L"),data3.innerHTML=moment().add(2,"days").format("L"),data4.innerHTML=moment().add(3,"days").format("L"),data5.innerHTML=moment().add(4,"days").format("L"),data6.innerHTML=moment().add(5,"days").format("L"),data7.innerHTML=moment().add(6,"days").format("L"),testBtn.addEventListener("click",function(){overlayTest.style.display="flex"}),addFormTest.addEventListener("submit",function(e){e.preventDefault(),fetch("http://localhost:3000/test",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.target[0].value,phone:e.target[1].value,date:testData.options[testData.selectedIndex].text,time:testTime.options[testTime.selectedIndex].text})}).then(function(){overlayTest.style.display="none",sent.style.display="flex",setTimeout(function(){sent.style.display="none"},4e3),e.target.reset()})}),overlayTest.addEventListener("click",function(e){e.target.classList.contains("overlay__test")&&(overlayTest.style.display="none")}),document.querySelector(".rent-btn")),overlayRent=document.querySelector(".overlay__rent"),addFormRent=document.querySelector(".overlay__rent-forms");rentBtn.addEventListener("click",function(){overlayRent.style.display="flex"}),addFormRent.addEventListener("submit",function(e){e.preventDefault(),fetch("http://localhost:3000/rent",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:e.target[0].value,phone:e.target[1].value,date:e.target[2].value,time:e.target[3].value})}).then(function(){overlayRent.style.display="none",sent.style.display="flex",setTimeout(function(){sent.style.display="none"},4e3),e.target.reset()})}),overlayRent.addEventListener("click",function(e){e.target.classList.contains("overlay__rent")&&(overlayRent.style.display="none")});