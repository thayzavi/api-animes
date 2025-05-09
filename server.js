const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const animes = [
    {
      "nome": "Chainsaw Man",
      "descricao": "Denji é um jovem caçador de demônios que se funde com <br> seu cão-demônio Pochita para se tornar o Chainsaw Man.",
      "imagem": "https://cdn.myanimelist.net/images/anime/1806/126216.jpg"
    },
    {
      "nome": "Attack on Titan",
      "descricao": "Eren Jaeger jurou eliminar todos os Titãs, <br> mas em uma batalha desesperada ele se torna aquilo que mais odeia.",
      "imagem": "https://cdn.myanimelist.net/images/anime/1517/100633.jpg"
    },
    {
      "nome": "Jujutsu Kaisen",
      "descricao": "Yuji Itadori ingere um dedo amaldiçoado e <br> se torna o receptáculo de Sukuna, o Rei das Maldições.",
      "imagem": "https://cdn.myanimelist.net/images/anime/1792/138022.jpg"
    },
    {
      "nome": "Naruto",
      "descricao": "Naruto é um jovem ninja que sonha em se <br> tornar o Hokage, o líder de sua vila.",
      "imagem": "https://cdn.myanimelist.net/images/anime/9/59431.jpg"
    },
    {
      "nome": "One Piece",
      "descricao": "Monkey D. Luffy parte em uma jornada para <br>encontrar o One Piece, o maior tesouro do mundo.",
      "imagem": "https://cdn.myanimelist.net/images/anime/1770/97704.jpg"
    },
    {
      "nome": "Demon Slayer",
      "descricao": "Tanjiro Kamado se torna um caçador de <br> demônios após sua família ser massacrada.",
      "imagem": "https://cdn.myanimelist.net/images/anime/1368/93482.jpg"
    },
    {
      "nome": "Death Note",
      "descricao": "Light Yagami encontra um caderno <br> que permite matar qualquer pessoa apenas escrevendo seu nome.",
      "imagem": "https://cdn.myanimelist.net/images/anime/1499/134184.jpg"
    },
    {
      "nome": "Hunter x Hunter",
      "descricao": "Gon Freecss busca se tornar um Hunter para encontrar seu pai desaparecido.",
      "imagem": "https://cdn.myanimelist.net/images/anime/1337/99013.jpg"
    },
    {
      "nome": "Fullmetal Alchemist: Brotherhood",
      "descricao": "Os irmãos Elric tentam recuperar seus corpos <br> após uma experiência alquímica fracassada.",
      "imagem": "https://cdn.myanimelist.net/images/anime/1208/94745.jpg"
    },
    {
      "nome": "Tokyo Ghoul",
      "descricao": "Após a conclusão da Operação de Extermínio da Família Tsukiyama, os membros da Comissão <br> de Counter Ghouls (CCG) cresceram exponencialmente em poder e continuam a perseguir <br>seu objetivo de exterminar todos os ghoul no Japão..",
      "imagem": "https://cdn.myanimelist.net/images/anime/1545/121995.jpg"
    },
    {
      "nome": "Bleach",
      "descricao": "Ichigo Kurosaki recebe poderes de Shinigami <br> e deve proteger os vivos e os mortos dos Hollows.",
      "imagem": "https://cdn.myanimelist.net/images/anime/1908/135431.jpg"
    },
    {
      "nome": "Black Clover",
      "descricao": "Asta, um jovem sem magia, busca se tornar o Rei Mago.",
      "imagem": "https://cdn.myanimelist.net/images/anime/2/88336.jpg"
    },
    {
      "nome": "Fairy Tail",
      "descricao": "Natsu Dragneel e seus amigos embarcam em diversas aventuras como membros da guilda Fairy Tail.",
      "imagem": "https://cdn.myanimelist.net/images/anime/3/60551.jpg"
    },
    {
      "nome": "My Hero Academia",
      "descricao": "Izuku Midoriya nasce sem poderes em um mundo de heróis, mas recebe o dom do maior herói de todos, All Might.",
      "imagem": "https://cdn.myanimelist.net/images/anime/10/78745.jpg"
    },
    {
      "nome": "Re:Zero",
      "descricao": "Subaru Natsuki é transportado para um mundo de fantasia onde descobre que pode voltar no tempo ao morrer.",
      "imagem": "https://cdn.myanimelist.net/images/anime/1522/128039.jpg"
    },
    {
      "nome": "Solo Leveling",
      "descricao": "Dez anos atrás, o Portão apareceu e conectou o mundo <br> real com o reino da magia e dos monstros. Para combater essas feras vis, <br> as pessoas comuns receberam poderes sobre-humanos e ficaram conhecidas como Caçadores.",
      "imagem": "https://cdn.myanimelist.net/images/manga/3/222295.jpg"
    },
    {
      "nome": "Akame ga Kill!",
      "descricao": "O jovem adolescente Tatsumi decide ingressar na Night Raid,<br> um grupo de guerreiros secretos que lutam contra o império.",
      "imagem": "https://cdn.myanimelist.net/images/anime/1429/95946.jpg"
    },
    {
      "nome": "A viagem de Chihiro",
      "descricao": "Chihiro e seus pais são obrigados a se mudarem para outra <br>cidade. Durante a mudança seu pai, decide tomar um atalho para economizar tempo, porém.",
      "imagem": "https://cdn.myanimelist.net/images/anime/6/79597.jpg"
    },
    {
      "nome": "Meu Amigo Totoro",
      "descricao": "Duas irmãs se mudam para o campo com o pai para ficarem mais <br> próximas da mãe hospitalizada e descobrem que as árvores ao redor são habitadas por Totoros.",
      "imagem": "https://cdn.myanimelist.net/images/anime/1110/147278.jpg"
    },
    {
      "nome": "Devilman",
      "descricao": "O coração mole de Akira Fudou sempre foi uma tarefa fácil. <br>Quando ele se reúne com seu amigo de infância, Ryou Asuka, em um encontro fatídico.",
      "imagem": "https://cdn.myanimelist.net/images/manga/2/1431.jpg"
    },
    {
      "nome": "Your Name",
      "descricao": "Mitsuha é a filha do prefeito de uma pequena cidade, mas sonha em tentar <br> a sorte em Tóquio. Taki trabalha em um restaurante em Tóquio e deseja largar o seu emprego. ",
      "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcOS51_xAfB6HD5HDdU6A3n3B5U9yPbEJmLQ&s"
    },
    {
      "nome": "Suzume",
      "descricao": "Uma garota de 17 anos chamada Suzume descobre uma porta misteriosa nas montanhas, <br> e logo outras começam a aparecer por todo o Japão.<br> Quando abertas, elas trazem desastre e destruição, e apenas Suzume pode fechá-las novamente. ",
      "imagem": "https://m.media-amazon.com/images/M/MV5BYTg2ZjRjYTUtYjA0Ny00M2VjLThhZmMtMzM2Yjc1ZDExMWNlXkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281_.jpg"
    },
    {
      "nome":"Dragon Ball",
      "descricao":"Son Goku é um menino com um rabo de macaco que vive sozinho nas montanhas após a morte do seu avô. Um dia, uma lembrança do avô de Goku atrai Bulma, uma garota em busca <br>das lendárias esferas do dragão, capazes de invocar o dragão Shenglong, que realiza qualquer desejo.",
      "imagem":"https://cdn.myanimelist.net/images/anime/13/8309.jpg"
    }
  ];

  //rota para lista animes
  app.get('/', (req, res) => {
    res.json({animes});
  });

  // rota para pegar anime por um nome específico 
  app.get('/animes/:nome', (req, res) => {
    const animeNome = req.params.nome.toLocaleLowerCase();
    const anime = animes.find(anime => anime.nome.toLocaleLowerCase() === animeNome);

    if(!anime) {
        return res.status(404).json({error: "Anime não encontrdo"});
    }
    res.json(anime);
  });

  //Rota para adicionar um novo anime 
  app.post('/animes', (req, res) => {
    const novoAnime = req.body;

    if (!novoAnime.nome || !novoAnime.descricao || !novoAnime.imagem){
        return res.status(400).json({error:"Nome, descrição  e imagem são obrigatorios"});
    }

    animes.push(novoAnime);

    res.status(201).json(novoAnime);
  });

  //Rota para atualizar 
  app.put('/animes/:nome', (req, res) => {
    const animeNome = req.params.nome.toLocaleLowerCase();
    const index = animes.findIndex(anime => anime.nome.toLocaleLowerCase()=== animeNome);
    
    if (index === -1){
      return res.status(400).json({error:"NOme, descrição e imagem são obrigatório "});
    }

    animes[index] = {nome, descricao, imagem};

    res.json(animes[index]);
  });

  // Rota para deletar um anime

  app.delete('animes/nome:', (req,res) => {
    const animeNome = req.params.nome.toLocaleLowerCase();
    const index = animes.findIndex(anime => anime.nome.toLocaleLowerCase() === animeNome );
    
    if (index === -1) {
      return res.status(404).json({error:"Anime não encontrado"});
    }

    const animeRemovido = animes.splice(index, 1);

    res.json({message:"Anime removido com sucesso ", anime: animeRemovido[0]});
  });
  //iniciar o servidor
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });

