
document.addEventListener('DOMContentLoaded', function() {
    const formularioContato = document.getElementById('formularioContato');
    if (!formularioContato) return;
    
    formularioContato.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value.trim();
        
        if (!nome) {
            mostrarErro('nome', 'Por favor, informe seu nome');
            return;
        }
        
        if (!email) {
            mostrarErro('email', 'Por favor, informe seu e-mail');
            return;
        }
        
        if (!validarEmail(email)) {
            mostrarErro('email', 'Por favor, informe um e-mail válido');
            return;
        }
        
        if (!assunto) {
            mostrarErro('assunto', 'Por favor, selecione um assunto');
            return;
        }
        
        if (!mensagem) {
            mostrarErro('mensagem', 'Por favor, escreva sua mensagem');
            return;
        }
        
        const btnEnviar = document.querySelector('.btn-enviar');
        const textoOriginal = btnEnviar.textContent;
        
        btnEnviar.textContent = 'Enviando...';
        btnEnviar.disabled = true;
        
        setTimeout(() => {
            formularioContato.innerHTML = `
                <div class="mensagem-sucesso">
                    <i class="fas fa-check-circle"></i>
                    <h3>Mensagem enviada com sucesso!</h3>
                    <p>Obrigado pelo contato, ${nome}. Retornaremos em breve.</p>
                    <button class="btn-enviar" id="btnNovoContato">Enviar nova mensagem</button>
                </div>
            `;
            
            const mensagemSucesso = document.querySelector('.mensagem-sucesso');
            mensagemSucesso.style.textAlign = 'center';
            mensagemSucesso.style.padding = '20px';
            
            const iconeSucesso = mensagemSucesso.querySelector('i');
            iconeSucesso.style.fontSize = '4rem';
            iconeSucesso.style.color = '#28a745';
            iconeSucesso.style.marginBottom = '20px';
            
            document.getElementById('btnNovoContato').addEventListener('click', function() {
                location.reload();
            });
        }, 1500);
    });
    
    const campos = document.querySelectorAll('#formularioContato input, #formularioContato select, #formularioContato textarea');
    campos.forEach(campo => {
        campo.addEventListener('input', function() {
            this.classList.remove('input-erro');
            const mensagemErro = this.parentNode.querySelector('.mensagem-erro');
            if (mensagemErro) {
                mensagemErro.remove();
            }
        });
    });
    
    const campoTelefone = document.getElementById('telefone');
    if (campoTelefone) {
        campoTelefone.addEventListener('input', function() {
            this.value = aplicarMascaraTelefone(this.value);
        });
    }
});

function mostrarErro(campoId, mensagem) {
    const campo = document.getElementById(campoId);
    campo.classList.add('input-erro');
    campo.focus();
    
    const erroAnterior = campo.parentNode.querySelector('.mensagem-erro');
    if (erroAnterior) {
        erroAnterior.remove();
    }
    
    const mensagemErro = document.createElement('p');
    mensagemErro.classList.add('mensagem-erro');
    mensagemErro.textContent = mensagem;
    mensagemErro.style.color = '#dc3545';
    mensagemErro.style.fontSize = '0.85rem';
    mensagemErro.style.marginTop = '5px';
    
    campo.parentNode.appendChild(mensagemErro);
}

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function aplicarMascaraTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '');
    if (telefone.length <= 10) {
        telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2');
        telefone = telefone.replace(/(\d{4})(\d)/, '$1-$2');
    } else {
        telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2');
        telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2');
    }
    
    return telefone;
}