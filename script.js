document.querySelectorAll('.biome-icon').forEach(biome => {
    biome.addEventListener('click', (event) => {
        const parent = event.target.parentElement;
        parent.style.transform = 'scale(1.5)';
        parent.style.zIndex = 1000;

        setTimeout(() => {
            window.location.href = getBiomeLink(parent.id);
        }, 800);
    });
});

function getBiomeLink(id) {
    switch(id) {
        case 'pampa':
            return 'fase1/index.html';
        case 'mata-atlantica':
            return 'fase2/index.html';
        case 'amazonica':
            return 'fase3/index.html';
        case 'caatinga':
            return 'fase4/index.html';
        case 'pantanal':
            return 'fase5/index.html';
        case 'cerrado':
            return 'fase6/index.html';
        default:
            return '#';
    }
}
