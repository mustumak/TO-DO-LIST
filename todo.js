init = function(){

    element = document.querySelector("#element").value;
    time = document.querySelector('#time').value;
    console.log(time);
    console.log(element);
    addElement();

    ID = getIndex();
    document.getElementById(ID).addEventListener('mouseover',deleteElement);
    document.querySelector('.btn-2').addEventListener('click',deleteAll);
}

tasks = new Array();
timings = new Array();

addElement = function(){

    tasks.push(element);
    timings.push(time);

    if(element =='' || time == '')
        alert("Please enter a task!!!!")
    else{
        html ='<li id="%id%">%time%--%entry%</li><button class="delete-btn">x</button>'
        newhtml = html.replace("%entry%",element);
        id = getIndex();
        newhtml = newhtml.replace("%id%",id);
        newhtml = newhtml.replace("%time%",time);

        document.querySelector('.container').insertAdjacentHTML('beforeend',newhtml);

        clearField();

}

deleteElement = function(){

    document.querySelector('.delete-btn').classList.toggle('hover');
    document.querySelector('.delete-btn').addEventListener('click',()=>{

        iD = getIndex();
        el = document.getElementById(iD)
        el.parentNode.removeChild(el);
        document.querySelector('.delete-btn').style.display = 'none';

    })
   
}

}
clearField = function(){

    document.querySelector('#element').value = "";

}
getIndex = function(){

    return tasks.indexOf(element);
    
}

deleteAll = function(){

    i = getIndex();

    while(i != -1){
        tasks.pop();

        el = document.getElementById(i)
        el.parentNode.removeChild(el);

        i -= 1;
    }
    
}





window.onload = function(){
    document.querySelector("#btn-1").addEventListener('click',init);
    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13)
           init();
   });
}