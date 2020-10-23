function AddNumber(){
    var TelaNum = window.document.getElementById('telaNum')

    var num0 = window.document.getElementById('num0')
    var n0 = Number.parseFloat(num0.value)

    if(num0.selected)
    document.getElementById('telaNum').value=0
}