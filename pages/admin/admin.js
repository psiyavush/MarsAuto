fetch('https://mars-auto-default-rtdb.europe-west1.firebasedatabase.app/call.json')
.then((response) => response.json())
.then((data) => {
    data.forEach((item, i) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${i+1}</td>
            <td>${item.name}</td>
            <td>${item.phone}</td>
        `
        document.querySelector('.call').appendChild(row); 
  
    });
})

fetch('https://mars-auto-default-rtdb.europe-west1.firebasedatabase.app//test.json')
.then((response) => response.json())
.then((data) => {
    data.forEach((item, i) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${i+1}</td>
            <td>${item.name}</td>
            <td>${item.phone}</td>
            <td>${item.date}</td>
            <td>${item.time}</td>
        `
        document.querySelector('.test').appendChild(row); 
  
    });
});

fetch('https://mars-auto-default-rtdb.europe-west1.firebasedatabase.app/rent.json')
.then((response) => response.json())
.then((data) => {
    data.forEach((item, i) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${i+1}</td>
            <td>${item.name}</td>
            <td>${item.phone}</td>
            <td>${item.date}</td>
            <td>${item.time}</td>
        `
        document.querySelector('.rent').appendChild(row); 
  
    });
});

fetch('https://mars-auto-default-rtdb.europe-west1.firebasedatabase.app/power.json')
.then((response) => response.json())
.then((data) => {
    data.forEach((item, i) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${i+1}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.text}</td>
            
        `
        document.querySelector('.power').appendChild(row); 
  
    });
});
fetch('https://mars-auto-default-rtdb.europe-west1.firebasedatabase.app/question.json')
.then((response) => response.json())
.then((data) => {
    data.forEach((item, i) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${i+1}</td>
            <td>${item.name}</td>
            <td>${item.phone}</td>
            <td>${item.text}</td>
            
        `
        document.querySelector('.question').appendChild(row); 
  
    });
})