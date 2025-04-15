document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    const botoesComprar = document.querySelectorAll('.btn-comprar');
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', function() {
            const produtoNome = this.closest('.produto-info').querySelector('h3').textContent;
            adicionarAoCarrinho(produtoNome);
        });
    });
    
    criarBotaoVoltarAoTopo();
});


function adicionarAoCarrinho(nomeProduto) {
    alert(`Produto "${nomeProduto}" adicionado ao carrinho!`);

}

function criarBotaoVoltarAoTopo() {
    const botaoTopo = document.createElement('button');
    botaoTopo.innerHTML = '<i class="fas fa-arrow-up"></i>';
    botaoTopo.classList.add('btn-topo');
    document.body.appendChild(botaoTopo);
    
    botaoTopo.style.position = 'fixed';
    botaoTopo.style.bottom = '20px';
    botaoTopo.style.right = '20px';
    botaoTopo.style.backgroundColor = '#12c56c';
    botaoTopo.style.color = '#fff';
    botaoTopo.style.border = 'none';
    botaoTopo.style.borderRadius = '50%';
    botaoTopo.style.width = '50px';
    botaoTopo.style.height = '50px';
    botaoTopo.style.fontSize = '1.2rem';
    botaoTopo.style.cursor = 'pointer';
    botaoTopo.style.display = 'none';
    botaoTopo.style.zIndex = '999';
    botaoTopo.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
    botaoTopo.style.transition = 'opacity 0.3s ease';
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            botaoTopo.style.display = 'block';
            botaoTopo.style.opacity = '1';
        } else {
            botaoTopo.style.opacity = '0';
            setTimeout(() => {
                if (window.pageYOffset <= 300) {
                    botaoTopo.style.display = 'none';
                }
            }, 300);
        }
    });
    
    botaoTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}