

document.addEventListener('DOMContentLoaded', function() {
    const btnComeceAqui = document.querySelector('.btn'); // Seleciona o botão "Comece aqui"

    btnComeceAqui.addEventListener('click', function() { // Adiciona um evento de clique ao botão
        window.location.href = 'pagina_de_destino.html'; // Redireciona para a página de destino desejada
    });

    const html = document.querySelector('html');
    const body = document.body;
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');

    // Função para alterar a cor da página
    function changeColor(color) {
        html.style.backgroundColor = color;
    }

    // Adiciona event listeners aos ícones para chamar a função changeColor com a cor desejada
    moonIcon.addEventListener('click', function() {
        changeColor('#121212'); // Cor escura desejada
        body.classList.add('dark-mode'); // Adiciona a classe dark-mode ao body
    });

    sunIcon.addEventListener('click', function() {
        changeColor('#f5e6da'); // Cor clara desejada
        body.classList.remove('dark-mode'); // Remove a classe dark-mode do body
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const html = document.querySelector('html');
    const body = document.body;
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');

    // Função para alterar a cor da página
    function changeColor(color) {
        html.style.backgroundColor = color;
    }

    // Adiciona um event listener ao ícone da lua para ativar o modo escuro
    moonIcon.addEventListener('click', function() {
        changeColor('#321200'); // Altere para a cor desejada para o modo escuro
        body.classList.add('dark-mode'); // Adiciona a classe dark-mode ao body
    });

    // Adiciona um event listener ao ícone do sol para voltar ao modo claro
    sunIcon.addEventListener('click', function() {
        changeColor('#f5e6da'); // Altere para a cor desejada para o modo claro
        body.classList.remove('dark-mode'); // Remove a classe dark-mode do body
    });
});
