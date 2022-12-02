let Form = document.getElementById('myForm');
let userTask = document.querySelector('.toDo'); 
let number = 0;


Form.addEventListener('submit', function() {
    
    if(userTask.value != ''){

        let liTag = document.createElement('li');

        liTag.innerHTML = `<input type="checkbox">`+userTask.value+``;
    
        let myUl = document.querySelector('#list');
    
        myUl.appendChild(liTag);
    
       userTask.value = '' ; 

        number = number +1;

        document.querySelector('#total-counter').innerHTML = number;
       

       

    } else {
        alert ('please add something');
    
}
});
   
userTask.value
    
   


   
   