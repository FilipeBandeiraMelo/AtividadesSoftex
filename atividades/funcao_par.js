/*exercício 1 - Crie uma função que imprima a sequência de números pares entre 1 e 20
(a função não recebe parâmetro) e depois faça uma chamada à função para listar os números */

function par() {
    for (i = 0; i <= 20; i += 2) {
        console.log(i)
    }
}

par();
