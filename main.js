let task = document.querySelector("[value='Add Task']");
let tasks = document.querySelector(".tasks")
let leng = [...document.querySelectorAll(".tasks > div")]
let text = document.querySelector("[type='text']");
let i = 1;
let arr = [];


window.onload = function(){
    if (JSON.parse(localStorage.getItem("tasks"))){
        console.log("Exist")
        for(r of JSON.parse(localStorage.getItem("tasks"))){
            let d = document.createElement("div");
            d.id = `${r.id}`
            d.title = `${r.title}`
            d.innerHTML += `${r.div}`
            tasks.appendChild(d)
        }
    }else{
        console.log("Empty");
    }
}
task.onclick = function(){
    if (text.value){
        tasks.appendChild(creatDiv(text.value));
        tasks.style.setProperty("--count",leng.length);
        text.value = "";
        text.focus();
    }else{
        console.log("No");
    }
}

function creatDiv(va){
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let inp = document.createElement("input");
    h2.append(va)
    inp.setAttribute("type","submit");
    inp.setAttribute("value","delete");
    // inp.setAttribute("onclick","delet()");
    inp.id = `di00${i}`;
    div.id = `div0${i}`;
    div.title = `${va}`
    i++;
    div.appendChild(h2);
    div.appendChild(inp);

    arr.push({
        "id":div.id,
        "title":div.title,
        "div":div.innerHTML
    });
    window.localStorage.setItem("tasks",JSON.stringify(arr))

    return div;
}

function reldiv(di,h2,inp){
    tasks.innerHTML += di
    di.innerHTML += h2
    di.innerHTML += inp
    
    // di.appendChild(h2);
    // di.appendChild(inp);
    return di
}

// function delet(){
    
    document.addEventListener("click",function(ee){
        if (ee.target.value == "delete"){
            let mustre = document.querySelector(`div:has(> #${ee.target.id})`);
            if (document.querySelector("[value='delete']")){
                console.log(mustre);
                mustre.remove();
                var items = JSON.parse(localStorage.getItem("tasks"));
                for (let ind = 0; ind < items.length;ind++){
                    if(mustre.id == items[ind].id){
                        console.log(items[ind]);
                        items.splice(ind,1);
                    }
                }
                localStorage.setItem("tasks",JSON.stringify(items))
        }else{
            console.log("No delete");
        }
    }
});
