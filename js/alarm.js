var conProblem = document.getElementById('conProblem')
conProblem.onclick = function(){
    condition.style.display = 'none';
    aconditionx+=1
}
document.getElementById('conProblem').onclick = function(){
    condition.style.display = 'none';
    aconditionx+=1
    document.getElementById('problem').style.display = 'block'
    // body.style.filter="blur(20px)"; 
}
var boxes = document.getElementsByClassName("box");
var lights = document.getElementsByClassName("alarmlight");
var proConfirmx = 0
var safecancel = null
var safecancel2 = null
var settimeout = null
var settimeout2 = null    //一定要先定义成空，这样btn38才能clearInterval！！！！
document.getElementById('proConfirm').onclick = function(){
    for(let i = 0 ; i < boxes.length ; i++){
        lights[i].style.display = 'none'
    }
    document.getElementById('lright3').style.display = 'none'
    document.getElementById('lright4').style.display = 'none'//先清屏
    proConfirmx+=1
   var lr1=1 //shutdown的故障
    // clearInterval(safecancel)

     safecancel=setInterval(function(){
        
        if(lr1%2==1 && (boxes[0].checked == true || boxes[1].checked == true || boxes[2].checked == true)){
            document.getElementById('lright1').style.display = 'block'
            // console.log('111')
            for(let i = 0;i<3;i++){
                if(boxes[i].checked == true){
                    lights[i].style.display = 'block'
                }
            }
            lr1++
        }else{
            for(let i = 0;i<boxes.length;i++){
                if(boxes[i].checked == true){
                    lights[i].style.display = 'none'
                }
            }
            document.getElementById('lright1').style.display = 'none'
            lr1++
        }
   
    },400)
    // if(btn38x == 1){
    //     clearInterval(safecancel2)
    //     for(let i = 0;i<boxes.length;i++){
    //             lights[i].style.display = 'none'
    //     }
    //     document.getElementById('l2').style.display = 'none'
    //     document.getElementById('l3').style.display = 'none'
    //     document.getElementById('l4').style.display = 'none'
    //     document.getElementById('l8').style.display = 'none'
    //     document.getElementById('l9').style.display = 'none'
    //     document.getElementById('l10').style.display = 'none'
    //     document.getElementById('l11').style.display = 'none'
    //     document.getElementById('l12').style.display = 'none'
    //     document.getElementById('l13').style.display = 'none'
    //     document.getElementById('l14').style.display = 'none'
    //     document.getElementById('l15').style.display = 'none'
    //     document.getElementById('l16').style.display = 'none'
    //     document.getElementById('l17').style.display = 'none'
    //     document.getElementById('l18').style.display = 'none'
    //     document.getElementById('l19').style.display = 'none'
    //     document.getElementById('l20').style.display = 'none'
    //     document.getElementById('l21').style.display = 'none'
    
    //     document.getElementById('lright1').style.display = 'none'
    //     document.getElementById('lright2').style.display = 'none'

    //     if(boxes[0].checked == true || boxes[1].checked == true || boxes[2].checked == true){
    //         document.getElementById('lright3').style.display = 'block'
    //     }else{
    //         document.getElementById('lright3').style.display = 'none'
    //     }
    // }
    settimeout = setTimeout(()=>{
        clearInterval(safecancel)
        document.getElementById('lright1').style.display = 'none'

        document.getElementById('l2').style.opacity = '0'
        document.getElementById('l3').style.opacity = '0'
        document.getElementById('l4').style.opacity = '0'
        document.getElementById('l8').style.opacity = '0'
        document.getElementById('l9').style.opacity = '0'
        document.getElementById('l10').style.opacity = '0'
        document.getElementById('l11').style.opacity = '0'
        document.getElementById('l12').style.opacity = '0'
        document.getElementById('l13').style.opacity = '0'
        document.getElementById('l14').style.opacity = '0'
        document.getElementById('l15').style.opacity = '0'
        document.getElementById('l16').style.opacity = '0'
        document.getElementById('l17').style.opacity = '0'
        document.getElementById('l18').style.opacity = '0'
        document.getElementById('l19').style.opacity = '0'
        document.getElementById('l20').style.opacity = '0'
        document.getElementById('l21').style.opacity = '0'

        if(boxes[0].checked == true || boxes[1].checked == true || boxes[2].checked == true){
            document.getElementById('lright3').style.display = 'block'
            for(let i = 0;i<3;i++){
                if(boxes[i].checked == true){
                    lights[i].style.display = 'block'
                }
            }
        }else{
            document.getElementById('lright3').style.display = 'none'
        }
        

    },8000)

    var lr2=1
    // clearInterval(safecancel)
     safecancel2=setInterval(function(){
        if(lr2%2==1 && (boxes[3].checked == true || boxes[4].checked == true || boxes[5].checked == true || boxes[6].checked == true || boxes[7].checked == true || boxes[8].checked == true || boxes[9].checked == true || boxes[10].checked == true || boxes[11].checked == true || boxes[12].checked == true || boxes[13].checked == true || boxes[14].checked == true || boxes[15].checked == true)){
            document.getElementById('lright2').style.display = 'block'
            for(let i = 3;i<boxes.length;i++){
                if(boxes[i].checked == true){
                    lights[i].style.display = 'block'
                }
            }
            lr2++
        }else{
            for(let i = 3;i<boxes.length;i++){
                if(boxes[i].checked == true){
                    lights[i].style.display = 'none'
                }
            }
            document.getElementById('lright2').style.display = 'none'
            lr2++
        }
        // if(btn38x == 1){
        //     clearInterval(safecancel2)
        //     for(let i = 0;i<boxes.length;i++){
        //             lights[i].style.display = 'none'
        //     }
        //     document.getElementById('l2').style.display = 'none'
        //     document.getElementById('l3').style.display = 'none'
        //     document.getElementById('l4').style.display = 'none'
        //     document.getElementById('l8').style.display = 'none'
        //     document.getElementById('l9').style.display = 'none'
        //     document.getElementById('l10').style.display = 'none'
        //     document.getElementById('l11').style.display = 'none'
        //     document.getElementById('l12').style.display = 'none'
        //     document.getElementById('l13').style.display = 'none'
        //     document.getElementById('l14').style.display = 'none'
        //     document.getElementById('l15').style.display = 'none'
        //     document.getElementById('l16').style.display = 'none'
        //     document.getElementById('l17').style.display = 'none'
        //     document.getElementById('l18').style.display = 'none'
        //     document.getElementById('l19').style.display = 'none'
        //     document.getElementById('l20').style.display = 'none'
        //     document.getElementById('l21').style.display = 'none'
        
        //     document.getElementById('lright1').style.display = 'none'
        //     document.getElementById('lright2').style.display = 'none'

        //     if(boxes[3].checked == true || boxes[4].checked == true || boxes[5].checked == true || boxes[6].checked == true || boxes[7].checked == true || boxes[8].checked == true || boxes[9].checked == true || boxes[10].checked == true || boxes[11].checked == true || boxes[12].checked == true || boxes[13].checked == true || boxes[14].checked == true || boxes[15].checked == true){
        //         document.getElementById('lright4').style.display = 'block'
        //     }else{
        //         document.getElementById('lright4').style.display = 'none'
        //     }
        // }
   
    },400)
    settimeout2 = setTimeout(()=>{
        clearInterval(safecancel2)
        document.getElementById('lright2').style.display = 'none'

        document.getElementById('l2').style.opacity = '0'
        document.getElementById('l3').style.opacity = '0'
        document.getElementById('l4').style.opacity = '0'
        document.getElementById('l8').style.opacity = '0'
        document.getElementById('l9').style.opacity = '0'
        document.getElementById('l10').style.opacity = '0'
        document.getElementById('l11').style.opacity = '0'
        document.getElementById('l12').style.opacity = '0'
        document.getElementById('l13').style.opacity = '0'
        document.getElementById('l14').style.opacity = '0'
        document.getElementById('l15').style.opacity = '0'
        document.getElementById('l16').style.opacity = '0'
        document.getElementById('l17').style.opacity = '0'
        document.getElementById('l18').style.opacity = '0'
        document.getElementById('l19').style.opacity = '0'
        document.getElementById('l20').style.opacity = '0'
        document.getElementById('l21').style.opacity = '0'

        if(boxes[3].checked == true || boxes[4].checked == true || boxes[5].checked == true || boxes[6].checked == true || boxes[7].checked == true || boxes[8].checked == true || boxes[9].checked == true || boxes[10].checked == true || boxes[11].checked == true || boxes[12].checked == true || boxes[13].checked == true || boxes[14].checked == true || boxes[15].checked == true){
            document.getElementById('lright4').style.display = 'block'
            for(let i = 3;i<boxes.length;i++){
                if(boxes[i].checked == true){
                    lights[i].style.display = 'block'
                }
            }
        }else{
            document.getElementById('lright4').style.display = 'none'
        }
       

    },8000)

    document.getElementById('problem').style.display = 'none'
    if (boxes[0].checked == true) {
        document.getElementById('l2').style.opacity = '1'
    }
    if (boxes[0].checked == false) {
        document.getElementById('l2').style.opacity = '0'
    }

    if (boxes[1].checked == true) {
        document.getElementById('l3').style.opacity = '1'
    }
    if (boxes[1].checked == false) {
        document.getElementById('l3').style.opacity = '0'
    }

    if (boxes[2].checked == true) {
        document.getElementById('l4').style.opacity = '1'
    }
    if (boxes[2].checked == false) {
        document.getElementById('l4').style.opacity = '0'
    }
    
    if (boxes[3].checked == true) {
        document.getElementById('l8').style.opacity = '1'
    }
    if (boxes[3].checked == false) {
        document.getElementById('l8').style.opacity = '0'
    }

    if (boxes[4].checked == true) {
        document.getElementById('l9').style.opacity = '1'
    }
    if (boxes[4].checked == false) {
        document.getElementById('l9').style.opacity = '0'
    }

    if (boxes[5].checked == true) {
        document.getElementById('l10').style.opacity = '1'
    }
    if (boxes[5].checked == false) {
        document.getElementById('l10').style.opacity = '0'
    }

    if (boxes[6].checked == true) {
        document.getElementById('l11').style.opacity = '1'
    }
    if (boxes[6].checked == false) {
        document.getElementById('l11').style.opacity = '0'
    }

    if (boxes[7].checked == true) {
        document.getElementById('l12').style.opacity = '1'
    }
    if (boxes[7].checked == false) {
        document.getElementById('l12').style.opacity = '0'
    }

    if (boxes[8].checked == true) {
        document.getElementById('l13').style.opacity = '1'
    }
    if (boxes[8].checked == false) {
        document.getElementById('l13').style.opacity = '0'
    }

    if (boxes[9].checked == true) {
        document.getElementById('l14').style.opacity = '1'
    }
    if (boxes[9].checked == false) {
        document.getElementById('l14').style.opacity = '0'
    }

    if (boxes[10].checked == true) {
        document.getElementById('l15').style.opacity = '1'
    }
    if (boxes[10].checked == false) {
        document.getElementById('l15').style.opacity = '0'
    }

    if (boxes[11].checked == true) {
        document.getElementById('l16').style.opacity = '1'
    }
    if (boxes[11].checked == false) {
        document.getElementById('l16').style.opacity = '0'
    }

    if (boxes[12].checked == true) {
        document.getElementById('l17').style.opacity = '1'
    }
    if (boxes[12].checked == false) {
        document.getElementById('l17').style.opacity = '0'
    }

    if (boxes[13].checked == true) {
        document.getElementById('l18').style.opacity = '1'
    }
    if (boxes[13].checked == false) {
        document.getElementById('l18').style.opacity = '0'
    }

    if (boxes[14].checked == true) {
        document.getElementById('l19').style.opacity = '1'
    }
    if (boxes[14].checked == false) {
        document.getElementById('l19').style.opacity = '0'
    }

    if (boxes[15].checked == true) {
        document.getElementById('l20').style.opacity = '1'
    }
    if (boxes[15].checked == false) {
        document.getElementById('l20').style.opacity = '0'
    }

    // if (boxes[16].checked == true) {
    //     document.getElementById('l21').style.display = 'block'
    // }
    // if (boxes[16].checked == false) {
    //     document.getElementById('l21').style.display = 'none'
    // }

}   

document.getElementById('proCancel').onclick = function(){
    document.getElementById('problem').style.display = 'none'
    // document.getElementsById('box').checked = false
 
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].checked = false;
           }
           for (let i = 0; i < lights.length; i++) {
            lights[i].style.display = 'none'
       }
           document.getElementById('l2').style.opacity = '0'
           document.getElementById('l3').style.opacity = '0'
           document.getElementById('l4').style.opacity = '0'
           document.getElementById('l8').style.opacity = '0'
           document.getElementById('l9').style.opacity = '0'
           document.getElementById('l10').style.opacity = '0'
           document.getElementById('l11').style.opacity = '0'
           document.getElementById('l12').style.opacity = '0'
           document.getElementById('l13').style.opacity = '0'
           document.getElementById('l14').style.opacity = '0'
           document.getElementById('l15').style.opacity = '0'
           document.getElementById('l16').style.opacity = '0'
           document.getElementById('l17').style.opacity = '0'
           document.getElementById('l18').style.opacity = '0'
           document.getElementById('l19').style.opacity = '0'
           document.getElementById('l20').style.opacity = '0'
           document.getElementById('l21').style.opacity = '0'

    document.getElementById('lright3').style.display = 'none'
    document.getElementById('lright4').style.display = 'none'


}


document.getElementById('btn37').onmousedown = function(){
    document.getElementById('btn37').style.opacity = 1
}
document.getElementById('btn37').onmouseup = function(){
    document.getElementById('btn37').style.opacity = 0
}
var btn38x = 0
document.getElementById('btn38').onmousedown = function(){
    document.getElementById('btn38').style.opacity = 1
    btn38x = 1//有问题  
    clearInterval(safecancel2)
    clearInterval(safecancel)

    for(let i = 0;i<boxes.length;i++){
        if(boxes[i].checked == true){
            lights[i].style.display = 'block'
        }
    }
    document.getElementById('l2').style.opacity = '0'
    document.getElementById('l3').style.opacity = '0'
    document.getElementById('l4').style.opacity = '0'
    document.getElementById('l8').style.opacity = '0'
    document.getElementById('l9').style.opacity = '0'
    document.getElementById('l10').style.opacity = '0'
    document.getElementById('l11').style.opacity = '0'
    document.getElementById('l12').style.opacity = '0'
    document.getElementById('l13').style.opacity = '0'
    document.getElementById('l14').style.opacity = '0'
    document.getElementById('l15').style.opacity = '0'
    document.getElementById('l16').style.opacity = '0'
    document.getElementById('l17').style.opacity = '0'
    document.getElementById('l18').style.opacity = '0'
    document.getElementById('l19').style.opacity = '0'
    document.getElementById('l20').style.opacity = '0'
    document.getElementById('l21').style.opacity = '0'

    document.getElementById('lright1').style.display = 'none'
    document.getElementById('lright2').style.display = 'none'

    if(boxes[0].checked == true || boxes[1].checked == true || boxes[2].checked == true){
        document.getElementById('lright3').style.display = 'block'
    }else{
        document.getElementById('lright3').style.display = 'none'
    }
    if(boxes[3].checked == true || boxes[4].checked == true || boxes[5].checked == true || boxes[6].checked == true || boxes[7].checked == true || boxes[8].checked == true || boxes[9].checked == true || boxes[10].checked == true || boxes[11].checked == true || boxes[12].checked == true || boxes[13].checked == true || boxes[14].checked == true || boxes[15].checked == true){
        document.getElementById('lright4').style.display = 'block'
    }else{
        document.getElementById('lright4').style.display = 'none'
    }
}
document.getElementById('btn38').onmouseup = function(){
    document.getElementById('btn38').style.opacity = 0
    btn38x = 0
}


var cancellights = document.getElementsByClassName("cancellight");
for(let i = 0 ; i < 3; i++){
    cancellights[i].onclick = function(){
        // clearInterval(safecancel2)
        // clearInterval(safecancel)

        if(boxes[0].checked == true || boxes[1].checked == true || boxes[2].checked == true){
            // clearInterval(safecancel)        
            // clearInterval(settimeout)
            // clearInterval(settimeout2)
            boxes[i].checked = false
            cancellights[i].style.opacity = '0'
            lights[i].style.display = 'none'
        }
        
       
        console.log(i)
    }
}
for(let i = 3 ; i < cancellights.length; i++){
    cancellights[i].onclick = function(){
        // clearInterval(safecancel2)
        // clearInterval(safecancel)

        if(boxes[i].checked == true ){
            // clearInterval(safecancel2)        
       
            // clearInterval(settimeout2)
            boxes[i].checked = false
            cancellights[i].style.opacity = '0'
            lights[i].style.display = 'none'
        }
        
        
        console.log(i)
    }
}
// if(boxes[3].checked == true || boxes[4].checked == true || boxes[5].checked == true || boxes[6].checked == true || boxes[7].checked == true || boxes[8].checked == true || boxes[9].checked == true || boxes[10].checked == true || boxes[11].checked == true || boxes[12].checked == true || boxes[13].checked == true || boxes[14].checked == true || boxes[15].checked == true){
//             cancellights[i].style.opacity = '0'
//         }