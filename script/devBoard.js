// task header part current date set  start here

let date = new Date().toDateString().split(' ');
date[0] += ' ,';


let formattedDate = date.join(' ');

document.getElementById('date').innerHTML =`<span class='font-medium'>${formattedDate.slice(0,5)}</span> <br> ${formattedDate.slice(5,17)}`

// task header part current date set  End here

// discover toggle task dev board section to blog section Start Here
 document.getElementById('discover-box').addEventListener('click',function (){
    window.location.href ='blogs.html';
 })
 
// discover toggle task dev board section to blog section End Here


// change the background color randomly after bg button clicked Start Here

const bgButton = document.getElementById('bg-btn');
bgButton.addEventListener('click',function(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let o = Math.random()* 9.71;
    let alpha = o.toFixed(1);
    let randomColor = `rgb(${r},${g},${b},${alpha})`
    document.body.style.backgroundColor = randomColor;
})

// change the background color randomly after bg button clicked End Here

// task boxes multi works Start 
const boxes = document.getElementById('task-boxes');
const msgContainer = document.getElementById('msg-container');
function multiFunction(event){
    alert('Board Updated Successfully');
    if(alert){
      const targetBtn = event.target;

      


      targetBtn.setAttribute('disabled','true');
      msgContainer.innerHTML = ` <div class="bg-[#F4F7FF] p-4 text-start rounded-xl">You Have Completed the task at ${new Date()} </div>
        
        `
        
    //   if(true){
        let assignTask = parseInt(document.getElementById('assign-task').innerText);
        assignTask -= 1;
        document.getElementById('assign-task').innerText = '0'+assignTask;
        let completeTask = parseInt(document.getElementById('complete-task').innerText);
        completeTask += 1;
        document.getElementById('complete-task').innerText = completeTask;
        
        if(assignTask===00 && true){
               alert('congrats!!!!You have completed all the current task')
        }

    //   }
    }

}
// task boxes multi works End

