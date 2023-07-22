fetch('http://localhost:3000/call')
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

fetch('http://localhost:3000/test')
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

fetch('http://localhost:3000/rent')
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

fetch('http://localhost:3000/power')
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
fetch('http://localhost:3000/question')
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