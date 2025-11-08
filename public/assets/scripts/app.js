console.log("Script carregado com sucesso!"); //teste de carregamento do script

// Dados simulados

/* const dados = {
  "usuarios": [
    {
      "id": 1,
      "login": "admin",
      "senha": "123",
      "nome": "Administrador do Sistema",
      "email": "admin@  .com"
    },
    {
      "id": 2,
      "login": "user",
      "senha": "123",
      "nome": "Usuario Comum",
      "email": "user@abc.com"
    }
  ],
  "noticias": [
    {
      "id": 1,
      "titulo": "Inscrições Abertas para Oficina de Teatro",
      "descricao": "Participe da nossa nova oficina de teatro para iniciantes. Vagas limitadas!",
      "conteudo": "A Escola Livre de Artes - Arena da Cultura está com inscrições abertas para a Oficina de Iniciação Teatral. As aulas acontecerão todas as terças e quintas, das 19h às 22h, no Núcleo de Formação e Criação Artística e Cultural (NUFAC). O curso é voltado para maiores de 16 anos e não exige experiência prévia. Venha desenvolver sua expressividade e criatividade conosco!",
      "imagem": "/images/teatro-NUFAC-ELA.jpg"
    },
    {
      "id": 2,
      "titulo": "Exposição de Artes Visuais 'Cores da Cidade'",
      "descricao": "Alunos da ELA apresentam trabalhos inspirados na paisagem urbana de Belo Horizonte.",
      "conteudo": "A exposição 'Cores da Cidade' reúne pinturas, desenhos e fotografias produzidos pelos alunos do curso de Artes Visuais da Escola Livre de Artes. A mostra está em cartaz no Centro Cultural da Pampulha e pode ser visitada gratuitamente de segunda a sábado, das 9h às 18h.",
      "imagem": "/images/Artes-Visuais-ELA.jpg"
    }
  ],
  "eventos": [
    {
      "id": 3,
      "titulo": "Show da banda 'Arena Rock'",
      "data": "20/10/2025",
      "descricao": "Apresentação especial da banda formada por professores e alunos da ELA.",
      "local": "Praça da Liberdade",
      "imagem": "/images/Arena-Rock.jpg"
    },
    {
      "id": 4,
      "titulo": "Sarau de Poesia 'Vozes da Periferia'",
      "data": "25/10/2025",
      "descricao": "Microfone aberto para poetas e artistas locais mostrarem seu talento.",
      "local": "Arena da Cultura",
      "imagem": "/images/Sarau-Poesia.jpg"
    },
    {
      "id": 5,
      "titulo": "Mostra de Dança Contemporânea",
      "data": "30/10/2025",
      "descricao": "Espetáculo de encerramento do semestre dos alunos de dança.",
      "local": "Teatro Francisco Nunes",
      "imagem": "/images/banner4.jpg"
    }
  ],
  "banners": [
    {
      "id": 6,
      "slide": 1,
      "nome": "Teatro",
      "descricao": "Aulas de teatro para iniciantes - Inscreva-se já!",
      "imagem": "/images/banner1.jpg"
    },
    {
      "id": 7,
      "slide": 2,
      "nome": "Aulas de Circo",
      "descricao": "Aulas de circo para todas as idades - Venha se divertir!",
      "imagem": "/images/banner2.jpg"
    },
    {
      "id": 8,
      "slide": 3,
      "nome": "Patrimônio Cultural",
      "descricao": "Aulas de patrimônio cultural - Conheça nossa história!",
      "imagem": "/images/banner3.jpg"
    },
    {
      "id": 9,
      "slide": 4,
      "nome": "Dança Contemporânea",
      "descricao": "Aulas de dança contemporânea - Movimente-se conosco!",
      "imagem": "/images/banner4.jpg"
    },
    {
      "id": 10,
      "slide": 5,
      "nome": "Design Popular",
      "descricao": "Aulas de design popular - Crie arte com a gente!",
      "imagem": "/images/banner5.jpg"
    }
  ],
  "inscritos": [
    {
      "id": 11,
      "nome": "Rafael Vasconcelos",
      "CPF": "12345678900",
      "telefone": "31989107964",
      "email": "rafael.vasconcelos@sga.pucminas.br",
      "curso": "Oficina de Teatro"
    },
    {
      "id": 12,
      "nome": "Jessica Mendonça",
      "CPF": "98765432100",
      "telefone": "31974109965",
      "email": "jessica.vasconcelos@sga.pucminas.br",
      "curso": "Design Popular"
    },
    {
      "id": 13,
      "nome": "Ana Silva",
      "CPF": "45612378900",
      "telefone": "31998599856",
      "email": "ana.silva@sga.pucminas.br",
      "curso": "Dança Contemporânea"
    }
  ],
  "mensagens": []
}
 */

// Função para carregar os dados e renderizar os elementos nas páginas
document.addEventListener('DOMContentLoaded', () => {
    const feedNoticias = document.getElementById('feed-noticias');
    const agendaEventos = document.getElementById('agenda-eventos');
    const carouselInner = document.getElementById('carousel-inner');
    const detalheItem = document.getElementById('detalhe-item');


    // Se estiver na página inicial, renderiza os cards
    if (feedNoticias && agendaEventos) {


        //MÉTODOS PARA BUSCAR OS DADOS DO SERVIDOR

        // Renderiza o carrosel de imagens
        fetch('http://localhost:3000/banners')
            .then(response => {
                if (!response.ok) throw new Error('Erro ao buscar os banners');
                return response.json();
            })
            .then(banners => {
                banners.forEach((banner, index) => {
                    const ativo = index === 0 ? 'active' : '';
                    const item = `
                    <div class="carousel-item ${ativo}">
                        <a href="cadastro_inscricao.html" class="text-decoration-none text-dark">
                            <img src="${banner.imagem}" class="d-block mx-auto img-fluid rounded" alt="${banner.nome}">
                            <div class="carousel-caption d-block d-sm-block bg-white bg-opacity-75 rounded p-2 text-center">
                                <h5>${banner.nome}</h5>
                                <p>${banner.descricao}</p>
                            </div>
                        </a>
                    </div>
                `;
                    carouselInner.innerHTML += item;
                });
            })
            .catch(error => {
                console.error('Erro ao carregar os banners:', error);
            });


        // Renderiza os cards de notícias
        fetch('http://localhost:3000/noticias')
            .then(response => {
                if (!response.ok) throw new Error('Erro ao buscar as notícias');
                return response.json();
            })
            .then(noticias => {
                noticias.forEach(noticia => {
                    const card = `
                <div class="card shadow-sm border-start border-4 border-warning p-3">
                    <h5 class="card-title">${noticia.titulo}</h5>
                    <p class="card-text">${noticia.descricao}</p>
                    <p> <img src="${noticia.imagem}" class="img-fluid rounded shadow-sm w-50"></p>
                    <a href="detalhes.html?tipo=noticia&id=${noticia.id}" class="btn btn-primary btn-sm">Leia mais</a>
                </div>
            `;
                    feedNoticias.innerHTML += card;
                });
            })
            .catch(error => {
                console.error('Erro ao carregar as notícias:', error);
            });


        // Renderiza a agenda de eventos
        fetch('http://localhost:3000/eventos')
            .then(response => {
                if (!response.ok) throw new Error('Erro ao buscar os eventos');
                return response.json();
            })
            .then(eventos => {
                eventos.forEach(evento => {
                    const card = `
                <div class="card shadow-sm border-start border-4 border-primary p-3 text-center">
                    <h5 class="card-title">${evento.titulo}</h5>
                    <p class="card-text">Data: ${evento.data}<br>${evento.descricao}</p>
                    <a href="detalhes.html?tipo=evento&id=${evento.id}" class="btn btn-outline-primary btn-sm">Detalhes</a>
                </div>
            `;
                    agendaEventos.innerHTML += card;
                });
            })
            .catch(error => {
                console.error('Erro ao carregar as notícias:', error);
            });


        //MÉTODOS PARA CARREGAR OS DADOS DIRETAMENTE PELO JAVASCRIPT (SEM FETCH)

        /* 

        // Renderiza o carrosel de imagens
        dados.banners.forEach((banner, index) => {
            const ativo = index === 0 ? 'active' : '';
            const item = `
                <div class="carousel-item ${ativo}">
                    <a href="cadastro_inscricao.html" class="text-decoration-none text-dark">
                    <img src="${banner.imagem}" class="d-block mx-auto img-fluid rounded" alt="${banner.nome}">
                        <div class="carousel-caption d-block d-sm-block bg-white bg-opacity-75 rounded p-2 text-center">
                            <h5>${banner.nome}</h5>
                            <p>${banner.descricao}</p>
                        </div>
                    </a>
                    
                </div>
    `;
            carouselInner.innerHTML += item;
        });


        // Renderiza as notícias
        dados.noticias.forEach(noticia => {
            const card = `
                <div class="card shadow-sm border-start border-4 border-warning p-3">
                    <h5 class="card-title">${noticia.titulo}</h5>
                    <p class="card-text">${noticia.descricao}</p>
                    <p> <img src="${noticia.imagem}" class="img-fluid rounded shadow-sm w-50"></p>
                    <a href="detalhes.html?tipo=noticia&id=${noticia.id}" class="btn btn-primary btn-sm">Leia mais</a>
                </div>
            `;
            feedNoticias.innerHTML += card;
        });



        // Renderiza os eventos
        dados.eventos.forEach(evento => {
            const card = `
                <div class="card shadow-sm border-start border-4 border-primary p-3 text-center">
                    <h5 class="card-title">${evento.titulo}</h5>
                    <p class="card-text">Data: ${evento.data}<br>${evento.descricao}</p>
                    <a href="detalhes.html?tipo=evento&id=${evento.id}" class="btn btn-outline-primary btn-sm">Detalhes</a>
                </div>
            `;
            agendaEventos.innerHTML += card;
        });
        */

    }


    // Se estiver na página de detalhes, renderiza o item específico
    if (detalheItem) {

        const urlParams = new URLSearchParams(window.location.search);
        const tipo = urlParams.get('tipo');
        const id = parseInt(urlParams.get('id'));

        // MÉTODOS PARA BUSCAR OS DADOS DO SERVIDOR

        let endpoint = '';
        if (tipo === 'noticia') endpoint = 'http://localhost:3000/noticias';
        else if (tipo === 'evento') endpoint = 'http://localhost:3000/eventos';

        if (endpoint) {
            fetch(endpoint)
                .then(response => response.json())
                .then(itens => {
                    const item = itens.find(i => i.id === id);

                    if (item) {
                        let conteudoHtml = '';

                        if (tipo === 'noticia') {
                            conteudoHtml = `
                            <div class="row g-5">
                                <div class="col-md-6">
                                    <img src="${item.imagem}" class="img-fluid rounded shadow-sm w-100" alt="${item.titulo}">
                                </div>
                                <div class="col-md-6">
                                    <h1 class="fw-bold">${item.titulo}</h1>
                                    <p class="lead">${item.descricao}</p>
                                    <hr>
                                    <p>${item.conteudo}</p>
                                </div>
                            </div>
                        `;
                        } else if (tipo === 'evento') {
                            conteudoHtml = `
                            <div class="row g-5">
                                <div class="col-md-6">
                                    <img src="${item.imagem}" class="img-fluid rounded shadow-sm" alt="${item.titulo}">
                                </div>
                                <div class="col-md-6">
                                    <h1 class="fw-bold">${item.titulo}</h1>
                                    <p class="lead"><strong>Data:</strong> ${item.data}</p>
                                    <p class="lead"><strong>Local:</strong> ${item.local}</p>
                                    <hr>
                                    <p>${item.descricao}</p>
                                </div>
                            </div>
                        `;
                        }

                        detalheItem.innerHTML = conteudoHtml;

                    } else {
                        detalheItem.innerHTML = '<p class="text-center">Item não encontrado.</p>';
                    }
                })
                .catch(error => {
                    console.error('Erro ao carregar o item:', error);
                    detalheItem.innerHTML = '<p class="text-center">Erro ao carregar o item.</p>';
                });
        }

        //MÉTODOS PARA CARREGAR OS DADOS DIRETAMENTE PELO JAVASCRIPT (SEM FETCH)

        /*
            let item = null;
            if (tipo === 'noticia') {
                item = dados.noticias.find(n => n.id === id);
            } else if (tipo === 'evento') {
                item = dados.eventos.find(e => e.id === id);
            }
    
            if (item) {
                let conteudoHtml = '';
                if (tipo === 'noticia') {
                    conteudoHtml = `
                        <div class="row g-5">
                            <div class="col-md-6">
                                <img src="${item.imagem}" class="img-fluid rounded shadow-sm w-100" alt="${item.titulo}">
                            </div>
                            <div class="col-md-6">
                                <h1 class="fw-bold">${item.titulo}</h1>
                                <p class="lead">${item.descricao}</p>
                                <hr>
                                <p>${item.conteudo}</p>
                            </div>
                        </div>
                    `;
                } else if (tipo === 'evento') {
                    conteudoHtml = `
                        <div class="row g-5">
                            <div class="col-md-6">
                                <img src="${item.imagem}" class="img-fluid rounded shadow-sm" alt="${item.titulo}">
                            </div>
                            <div class="col-md-6">
                                <h1 class="fw-bold">${item.titulo}</h1>
                                <p class="lead"><strong>Data:</strong> ${item.data}</p>
                                <p class="lead"><strong>Local:</strong> ${item.local}</p>
                                <hr>
                                <p>${item.descricao}</p>
                            </div>
                        </div>
                    `;
                }
                detalheItem.innerHTML = conteudoHtml;
            } else {
                detalheItem.innerHTML = '<p class="text-center">Item não encontrado.</p>';
            }
    
        */

    }

});

// Funções auxiliares dos botões de formulário

function enviarDuvida() {
    fetch('http://localhost:3000/mensagens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            mensagem: document.getElementById('mensagem').value
        })
    })
    .then(response => {
        if (!response.ok) throw new Error('Erro ao enviar a dúvida');
        return response.json();
    })
    .then(data => {
        console.log('Dúvida enviada com sucesso:', data);
        alert('Sua dúvida foi enviada com sucesso! Em breve entraremos em contato.');
    })
    .catch(error => {
        console.error('Erro ao enviar a dúvida:', error);
        alert('Houve um erro ao enviar sua dúvida. Por favor, tente novamente mais tarde.');
    });

}