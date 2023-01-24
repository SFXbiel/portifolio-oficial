const texto = document.querySelector('.game');

function typeWhiter(elemento) {
    const textoArray = elemento.innerText.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerText += letra, 100 * i);
    });
}
typeWhiter(texto);
typeWhiter(document.querySelector('h1'))
