
function dividir(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    var dividir = parseInt(num1) / parseInt(num2);

    document.getElementById('resultado').value = dividir;
}