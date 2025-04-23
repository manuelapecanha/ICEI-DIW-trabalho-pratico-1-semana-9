const filmes = [
    {
      id: 1,
      imagem: "images/destaque.thesubstance.jpg",
      titulo: "The Substance",
      sinopse: "Elisabeth Sparkle, renomada por um programa de aeróbica, enfrenta um golpe devastador quando seu chefe a demite. Em meio ao seu desespero, um laboratório lhe oferece uma substância que promete transformá-la em uma versão aprimorada.",
      genero: "Terror / Ficção",
      duracao: "140 minutos",
      classificacao: "18 anos",
      avaliacao: "3.5 / 5.0",
      origem: "Reino Unido",
      diretor: "Coralie Fargeat",
      lancamento: "2024-09-19",
      elenco: "Demi Moore, Margaret Qualley, Dennis Quaid, Hugo Diego Garcia, Alexandra Papoulias, Oscar Lesage, Robin Greer, Tiffany Hofstetter."
    },
    {
      id: 2,
      imagem: "images/destaque.aindaestouaqui.jpg",
      titulo: "Ainda Estou Aqui",
      sinopse: "No início da década de 1970, o Brasil enfrenta o endurecimento da ditadura militar. No Rio de Janeiro, a família Paiva vive à beira da praia em uma casa de portas abertas para os amigos. Um dia, Rubens Paiva é levado por militares e desaparece. Eunice, sua esposa, busca a verdade e traça um novo futuro para os filhos.",
      genero: "Drama / Drama Histórico",
      duracao: "135 minutos",
      classificacao: "14 anos",
      avaliacao: "4.1 / 5.0",
      origem: "Brasil",
      diretor: "Walter Salles",
      lancamento: "2024-11-07",
      elenco: "Fernanda Torres, Valentina Herszage, Fernanda Montenegro, Selton Mello, Ólivia Torres, Bárbara Luz e Maitê Padilha."
    },
    {
      id: 3,
      imagem: "images/destaque.wicked.jpg",
      titulo: "Wicked",
      sinopse: "Na Terra de Oz, Elphaba forma uma amizade com Glinda. Após um encontro com o Mágico de Oz, o relacionamento delas é posto à prova.",
      genero: "Musical / Fantasia",
      duracao: "160 minutos",
      classificacao: "10 anos",
      avaliacao: "4.1 / 5.0",
      origem: "Estados Unidos",
      diretor: "Jon M. Chu",
      lancamento: "2024-11-21",
      elenco: "Ariana Grande, Cynthia Erivo, Jonathan Bailey, Ethan Slater, Michelle Yeon, Jeff Goldblum, Peter Dinklage e Marissa Bode."
    },
    {
      id: 4,
      imagem: "images/destaque.divertidamente2.jpg",
      titulo: "Divertidamente 2",
      sinopse: "Riley agora é adolescente.<br>Junto com novas experiências, surgem novas emoções que causam mudanças na sala de controle.",
      genero: "Infantil / Comédia",
      duracao: "96 minutos",
      classificacao: "Livre",
      avaliacao: "3.5 / 5.0",
      origem: "Estados Unidos",
      diretor: "Kelsey Mann",
      lancamento: "2024-06-20",
      elenco: "Maya Hawke, Ayo Ederibi, Adele Exarchopoulos, Lilimar, Liza Lapira, Tony Hale, Kensington Tallman e Amy Poehler."
    },
    {
      id: 5,
      imagem: "images/destaque.deadpoolwolverine.jpg",
      titulo: "Deadpool e Wolverine",
      sinopse: "Wolverine está se recuperando quando cruza o caminho de Deadpool. Juntos, enfrentam um inimigo em comum.",
      genero: "Ação / Comédia",
      duracao: "128 minutos",
      classificacao: "18 anos",
      avaliacao: "4.4 / 5.0",
      origem: "Estados Unidos",
      diretor: "Shawn Levy",
      lancamento: "2024-07-26",
      elenco: "Ryan Reynolds, Leslie Uggams, Emma Corin, Hugh Jackman, Dafne Keen, Channing Tatum, Chris Evans e Jennifer Garner."
    },
    {
      id: 6,
      imagem: "images/destaque.duna2.jpg",
      titulo: "Duna 2",
      sinopse: "Paul Atreides busca vingança contra os conspiradores que destruíram sua família. Ele enfrenta uma escolha entre o amor e o destino do universo.",
      genero: "Aventura / Ficção Científica",
      duracao: "140 minutos",
      classificacao: "14 anos",
      avaliacao: "4.6 / 5.0",
      origem: "Canadá",
      diretor: "Denis Villeneuve",
      lancamento: "2024-02-28",
      elenco: "Austin Butler, Florence Pugh, Timothée Chalamet, Léa Seydoux, Zendaya, Rebecca Ferguson, Stellan Skarsgard e Christopher Walken."
    }
  ];

  function pesquisar(event) {
    event.preventDefault();

    const termo = document.getElementById('campoBusca').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
    const titulo = card.querySelector('.card-title').textContent.toLowerCase();
    const deveExibir = titulo.includes(termo);
    card.closest('.col').style.display = deveExibir ? 'block' : 'none';
        });
   }