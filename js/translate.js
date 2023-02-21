

function kevin(){

    let s = 4;
    for(let i = 1; i<=6; i++){
        document.getElementById(`translate${i}`).style.animation = `slide ${s}s alternate infinite`;
       s+=1;
    }
 }