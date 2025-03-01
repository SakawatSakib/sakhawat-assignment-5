// task header part current date set  start here

let date = new Date().toDateString().split(' ');
date[0] += ' ,';


let formattedDate = date.join(' ');

document.getElementById('date').innerHTML =`<span class='font-medium'>${formattedDate.slice(0,5)}</span> <br> ${formattedDate.slice(5,17)}`

// task header part current date set  End here

// discover toggle task section to blog section Start Here


// discover toggle task section to blog section End Here

