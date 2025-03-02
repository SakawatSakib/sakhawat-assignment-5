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



//   assign task innertext value decreasing function
 function decreaseAssignTaskInnerText(id){
    const assignElement = document.getElementById(id)
    let assignTaskValue = parseInt(assignElement.innerText);
    assignTaskValue -= 1;
    assignElement.innerText = assignTaskValue;
    return assignElement;

 }
 //   Complete task innertext value increasing  function
 function increaseCompleteTaskInnerText(id){
    const completeElement = document.getElementById(id)
    let completeTaskValue = parseInt(completeElement.innerText);
    completeTaskValue += 1;
    completeElement.innerText = completeTaskValue;
    return completeElement;

 }
const activityContainer = document.getElementById('activity-container');
 const taskButtons = document.getElementsByClassName('box-btn');
 console.log(taskButtons);

//  for loop in all task box buttons 
 for(button of taskButtons){
    button.addEventListener('click',function(event){
        
        const taskBox = event.target.closest('.shadow-lg');
        console.log(taskBox);
        const taskTitle = taskBox.querySelector(".title").textContent;
        console.log(taskTitle)
            

        if(event.target.getAttribute('disabled') === null){
            event.target.setAttribute('disabled',true);
            if(event.target.hasAttribute('disabled',true)){
                alert('Board Updated Successfully');
                decreaseAssignTaskInnerText('assign-task');
                increaseCompleteTaskInnerText("complete-task");
                let assignTaskValue = document.getElementById('assign-task').innerText ;
                if(parseInt(assignTaskValue)===0){
                    alert('congrats!!!!You have completed all the current task');
                }
            }
        }
        logActivity(taskTitle);
        //  append the dynamic target button title and time in activityContainer start here 
        function logActivity(taskTitle){
            const d = new Date().toLocaleTimeString();
            const p = document.createElement('p');
            p.className = "bg-[#F4F7FF] my-2 p-2 rounded-md";
            p.textContent = `You Have completed the task ${taskTitle} at ${d}` 
            activityContainer.appendChild(p)

        }
        //  append the dynamic target button title and time in activityContainer End here 
    })
 }
// task boxes multi works End Here

//  activity Button delete task container contents msgs Start here 

 document.getElementById('clear-btn').addEventListener('click',function(){
    const activityContainer = document.getElementById('activity-container');
    activityContainer.textContent ="";
    location.reload();
 })




















