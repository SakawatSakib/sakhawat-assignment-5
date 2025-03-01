// task header part current date set 

let date = new Date().toDateString().split(' ');
date[0] += ' ,';
let formattedDate = date.join(' ');
document.getElementById('date').innerText = formattedDate;
