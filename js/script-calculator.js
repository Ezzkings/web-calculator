function funcao(numbe){
    document.getElementById('num').value+=numbe
}
function removi(){
    var apaga = ""
    document.getElementById('num').value=apaga
}
function del(){
    document.getElementById('num').value=0
}
function equals(){ 
        var evalo = eval(document.getElementById('num').value)
        document.getElementById('num').value=evalo

    /*===============
    try{
        /*
        funcao(eval(document.getElementById('num').value))
        
    }catch(er){
        er:('erro')
    }
    ================*/

}

/*function addnum(){
    document.getElementById("num").value='1'
}
function addnum2(){
    document.getElementById("num").value='2'
}
function addnum3(){
    document.getElementById("num").value='3'
}*/


/*var num = window.document.getElementById('num'.value)
//let calc = "";

function funcao(numbe){
    //calc.push(param)
    //putnum.innerHTML=(param)
    calculo+=param;
}

/*=================================

function addnum(){
    var inputnum = window.document.getElementById('num'.value)
    
    var numbe1 = parseFloat(document.getElementById('num1').value)
    var n1 =Number.parseFloat(document.getElementById(numbe1).value)
    
    //document.getElementById("num").value='1'
}

=================================*/

/*
    var numbe=parseFloat(document.getElementById('num').value)
    numbe.innerHTML=1
    /*
    var number =parseFloat(document.getElementById('num').value)
    var num1 =Number.parseFloat(number.value)
    num1.value=1


    //
    //document.getElementById('num').value=0

    /*var txt = window.document.getElementById('txt')
    var num0 = window.document.getElementById('num0')
    var n0 = Number.parseFloat(num0.value)
    
   if(n0.selected)
    txt.inn=num1=======*/