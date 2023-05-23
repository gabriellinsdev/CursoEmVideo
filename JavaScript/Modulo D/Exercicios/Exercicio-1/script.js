
function clicar() {

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    var anoNascimento = document.querySelector('#nascimento').value
    var idade = (anoAtual - anoNascimento)
    var sexo = Array()
    var sexo = document.getElementsByName('sexo')
    var img = document.querySelector('.imagem')
    var div = document.querySelector('.resp')

    if (anoNascimento > 2023) {
        window.alert('Verifique os dados novamente')
    } else if (sexo[0].checked) {
        div.style.textAlign = 'center'
        // masculino
        if (idade <= 10) {
            document.querySelector('.frase').textContent = `detectamos homem de ${idade} anos`
            img.setAttribute('src', 'fotos/foto-bebe-m.png');
        } else if (idade <= 21) {
            document.querySelector('.frase').textContent = `detectamos homem de ${idade} anos`
            img.setAttribute('src', 'fotos/foto-jovem-m.png');
        } else if (idade <= 51) {
            document.querySelector('.frase').textContent = `detectamos homem de ${idade} anos`
            img.setAttribute('src', 'fotos/foto-adulto-m.png');
        } else {
            document.querySelector('.frase').textContent = `detectamos homem de ${idade} anos`
            img.setAttribute('src', 'fotos/foto-idoso-m.png');
        }

    } else if (sexo[1].checked) {
        // feminino
        div.style.textAlign = 'center'
        if (idade <= 10) {
            document.querySelector('.frase').textContent = `detectamos mulher de ${idade} anos`
            img.setAttribute('src', 'fotos/foto-bebe-f.png');
        } else if (idade <= 21) {
            document.querySelector('.frase').textContent = `detectamos mulher de ${idade} anos`
            img.setAttribute('src', 'fotos/foto-jovem-f.png');
        } else if (idade <= 51) {
            document.querySelector('.frase').textContent = `detectamos mulher de ${idade} anos`
            img.setAttribute('src', 'fotos/foto-adulto-f.png');
        } else {
            document.querySelector('.frase').textContent = `detectamos mulher de ${idade} anos`
            img.setAttribute('src', 'fotos/foto-idoso-f.png');
        }

    } 


}