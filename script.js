const biomas = document.querySelectorAll('.bioma');

biomas.forEach(bioma => {
    bioma.addEventListener('click', () => {
        const curiosidade = bioma.querySelector('.curiosidade-container');
        const allCuriosidades = document.querySelectorAll('.curiosidade-container');
        
        allCuriosidades.forEach(c => c.style.display = 'none');  // Esconder todas as curiosidades
        
        curiosidade.style.display = 'block';  // Mostrar curiosidade do bioma clicado
    });
});
