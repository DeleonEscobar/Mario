
function suma(){
    var n1 = document.getElementById('txt1').value;
    var n2 = document.getElementById('txt2').value;
    var resultado = (parseInt(n1) + parseInt(n2));

    document.getElementById('txt3').value=resultado;
}