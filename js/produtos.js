document.addEventListener('DOMContentLoaded', function() {
    const produtos = [
        {
            id: 1,
            nome: 'Maçã Fuji',
            descricao: 'Maçãs selecionadas da variedade Fuji. Doces e crocantes.',
            preco: 8.99,
            imagem: 'https://www.svicente.com.br/on/demandware.static/-/Sites-storefront-catalog-sv/default/dw2923b805/Produtos/21318-0000000002131-maca%20fuji%20kg-flv-1.jpg',
            categoria: 'hortifruti'
        },
        {
            id: 2,
            nome: 'Banana Prata',
            descricao: 'Bananas da variedade prata, ideal para o dia a dia.',
            preco: 5.99,
            imagem: 'https://www.bernardaoemcasa.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/c/cc143e3f49d34923320905e1a3837768.jpg',
            categoria: 'hortifruti'
        },
        {
            id: 3,
            nome: 'Filé Mignon',
            descricao: 'Corte nobre e macio, perfeito para ocasiões especiais.',
            preco: 69.90,
            imagem: 'https://superprix.vteximg.com.br/arquivos/ids/195050-600-600/38180.jpg?v=637497988331870000',
            categoria: 'carnes'
        },
        {
            id: 4,
            nome: 'Picanha Bovina',
            descricao: 'Corte suculento e saboroso para seu churrasco.',
            preco: 59.90,
            imagem: 'https://gbarbosa.vtexassets.com/arquivos/ids/214890/655269358d0743e14888f97f.jpg?v=638354965060330000',
            categoria: 'carnes'
        },
        {
            id: 5,
            nome: 'Vinho Tinto Seco',
            descricao: 'Vinho tinto seco importado com aroma intenso e sabor marcante.',
            preco: 79.90,
            imagem: 'https://cdn.awsli.com.br/2500x2500/1377/1377751/produto/156444238/7da168e879.jpg',
            categoria: 'bebidas'
        },
        {
            id: 6,
            nome: 'Cerveja Artesanal IPA',
            descricao: 'Cerveja artesanal tipo IPA com notas cítricas e amargor equilibrado.',
            preco: 12.90,
            imagem: 'https://cervejabox.vteximg.com.br/arquivos/ids/243863-1000-1000/ipa.jpg?v=638721751902730000',
            categoria: 'bebidas'
        },
        {
            id: 7,
            nome: 'Queijo Minas',
            descricao: 'Queijo minas frescal produzido artesanalmente.',
            preco: 24.90,
            imagem: 'https://tirolez.com.br/wp-content/uploads/tirolezapi/PT-3-8-105Queijo%20Minas%20Frescal%203kg.png',
            categoria: 'laticinios'
        },
        {
            id: 8,
            nome: 'Leite Integral',
            descricao: 'Leite integral pasteurizado de alta qualidade.',
            preco: 5.49,
            imagem: 'https://anossadrogaria.vteximg.com.br/arquivos/ids/837145-700-700/972675_00.jpg?v=637291161033030000',
            categoria: 'laticinios'
        },
        {
            id: 9,
            nome: 'Sabonete Líquido',
            descricao: 'Sabonete líquido perfumado para todos os tipos de pele.',
            preco: 9.90,
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBi2jcLJxIFpH7rq-u1zp6Q5PwhKIlyNmzkg&s',
            categoria: 'higiene'
        },
        {
            id: 10,
            nome: 'Detergente Concentrado',
            descricao: 'Detergente concentrado para limpeza pesada.',
            preco: 7.49,
            imagem: 'https://assets.ype.ind.br/uploads/card_detergente_concentrado_clear-1738070861.png',
            categoria: 'higiene'
        },
        {
            id: 11,
            nome: 'Laranja',
            descricao: 'Laranjas doces e suculentas, ótimas para suco ou consumo in natura.',
            preco: 4.99,
            imagem: 'https://media.istockphoto.com/id/466430234/pt/foto/umbigo-laranjas-em-uma-caixa-de-madeira.jpg?s=612x612&w=0&k=20&c=pijqKwqGq2z5dq6HII71CEHebrdEbktC-UvmprIK9Hw=',
            categoria: 'hortifruti'
        },
        {
            id: 12,
            nome: 'Peito de Frango',
            descricao: 'Peito de frango resfriado e sem osso.',
            preco: 19.90,
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2GGEd4oAamK7U7jN6Qj6elNv_rgDxu3T4A&s',
            categoria: 'carnes'
        }
    ];
    
    const produtosContainer = document.getElementById('produtosContainer');
    if (!produtosContainer) return;

    exibirProdutos(produtos);
    
    const botoesCategoria = document.querySelectorAll('.categoria-lista a');
    botoesCategoria.forEach(botao => {
        botao.addEventListener('click', function(e) {
            e.preventDefault();
            
            botoesCategoria.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const categoria = this.getAttribute('data-categoria');
            if (categoria === 'todos') {
                exibirProdutos(produtos);
            } else {
                const produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);
                exibirProdutos(produtosFiltrados);
            }
        });
    });
    
    const seletorOrdenacao = document.getElementById('ordenar');
    if (seletorOrdenacao) {
        seletorOrdenacao.addEventListener('change', function() {
            const categoriaAtiva = document.querySelector('.categoria-lista a.active').getAttribute('data-categoria');
            let produtosAtivos = produtos;
            
            if (categoriaAtiva !== 'todos') {
                produtosAtivos = produtos.filter(produto => produto.categoria === categoriaAtiva);
            }
            
            const produtosOrdenados = ordenarProdutos(produtosAtivos, this.value);
            exibirProdutos(produtosOrdenados);
        });
    }
});

function exibirProdutos(produtos) {
    const produtosContainer = document.getElementById('produtosContainer');
    if (!produtosContainer) return;
    
    produtosContainer.innerHTML = '';
    
    if (produtos.length === 0) {
        produtosContainer.innerHTML = '<p class="sem-produtos">Nenhum produto encontrado nesta categoria.</p>';
        return;
    }
    
    produtos.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.classList.add('produto-card');
        
        produtoElement.innerHTML = `
            <div class="produto-imagem">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <div class="produto-preco">R$ ${produto.preco.toFixed(2)}</div>
                <button class="btn-comprar" data-id="${produto.id}">Comprar</button>
            </div>
        `;
        
        produtosContainer.appendChild(produtoElement);
    });
    
    const botoesComprar = document.querySelectorAll('.btn-comprar');
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', function() {
            const produtoNome = this.closest('.produto-info').querySelector('h3').textContent;
            adicionarAoCarrinho(produtoNome);
        });
    });
}


function ordenarProdutos(produtos, criterio) {
    let produtosOrdenados = [...produtos];
    
    switch (criterio) {
        case 'preco-menor':
            produtosOrdenados.sort((a, b) => a.preco - b.preco);
            break;
        case 'preco-maior':
            produtosOrdenados.sort((a, b) => b.preco - a.preco);
            break;
        case 'az':
            produtosOrdenados.sort((a, b) => a.nome.localeCompare(b.nome));
            break;
        case 'za':
            produtosOrdenados.sort((a, b) => b.nome.localeCompare(a.nome));
            break;
        default:
            break;
    }
    
    return produtosOrdenados;
}