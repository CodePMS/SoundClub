document.addEventListener("DOMContentLoaded", function () {

    // Efeito de hover nas imagens
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

    // Alerta ao clicar nos links dos álbuns
    const linksAlbuns = document.querySelectorAll("a");

    linksAlbuns.forEach(link => {
        link.addEventListener("click", (event) => {
            const confirmacao = confirm("Você será redirecionado para o Spotify. Deseja continuar?");
            if (!confirmacao) {
                event.preventDefault(); // Cancela o redirecionamento se o usuário clicar em "Cancelar"
            }
        });
    });
});
