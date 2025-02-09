document.addEventListener("DOMContentLoaded", function () {

    // Efeito de hover nas imagens (mantido do seu código original)
    const imagens = document.querySelectorAll("img");

    imagens.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "0.3s";
            img.style.opacity = "0.8";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
            img.style.opacity = "1";
        });

        // Animação de entrada suave
        img.style.opacity = "0";
        setTimeout(() => {
            img.style.transition = "opacity 1s";
            img.style.opacity = "1";
        }, 300);
    });

    // Alerta ao clicar nos links dos álbuns (mantido do seu código original)
    const linksAlbuns = document.querySelectorAll("a");

    linksAlbuns.forEach(link => {
        link.addEventListener("click", (event) => {
            const confirmacao = confirm("Você será redirecionado para o Spotify. Deseja continuar?");
            if (!confirmacao) {
                event.preventDefault(); // Cancela o redirecionamento se o usuário clicar em "Cancelar"
            }
        });
    });

    // Manipulação do formulário de criação de conta
    const formConta = document.getElementById('form-conta');
    const contasCriadasDiv = document.getElementById('contas-criadas');

    formConta.addEventListener('submit', function (e) {
        e.preventDefault();

        // Captura os valores dos inputs
        const nome = document.getElementById('nome').value;
        const senha = document.getElementById('senha').value;

        // Cria um novo elemento para exibir o nome da conta
        const contaDiv = document.createElement('div');
        contaDiv.classList.add('conta');
        contaDiv.textContent = nome;  // Exibe apenas o nome da conta

        // Adiciona o nome da conta à lista de contas criadas
        contasCriadasDiv.appendChild(contaDiv);

        // Limpa o formulário após enviar
        formConta.reset();
    });

});


