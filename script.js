function mostrarCuriosidade(event, texto) {
    const curiosidade = document.getElementById('curiosidade');
    curiosidade.style.left = `${event.pageX}px`;
    curiosidade.style.top = `${event.pageY - 50}px`;
    curiosidade.innerText = texto;
    curiosidade.style.display = 'block';
    
    // Remove a curiosidade após 3 segundos
    setTimeout(() => {
        curiosidade.style.display = 'none';
    }, 3000);
}
