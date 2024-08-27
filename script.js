// Palavras a serem encontradas
const palavras = ["AMAZONIA", "CAATINGA", "CERRADO", "PANTANAL", "PAMPA", "MATAATLANTICA"];
let palavraSelecionada = "";

// Selecionar letras
document.querySelectorAll('td').forEach(celula => {
    celula.addEventListener('click', function() {
        this.classList.toggle('selected');
        palavraSelecionada += this.textContent;

        // Verificar se a palavra foi encontrada
        if (palavras.includes(palavraSelecionada)) {
            alert(`Você encontrou: ${palavraSelecionada}`);
            palavraSelecionada = "";
            document.querySelectorAll('td.selected').forEach(celula => {
                celula.classList.remove('selected');
            });
        }
    });
});

// Limpar seleção ao clicar fora
document.body.addEventListener('click', function(event) {
    if (!event.target.closest('td')) {
        palavraSelecionada = "";
        document.querySelectorAll('td.selected').forEach(celula => {
            celula.classList.remove('selected');
        });
    }
}, true);
