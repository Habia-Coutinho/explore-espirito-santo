document.addEventListener("DOMContentLoaded", () => {
let idiomaAtual = localStorage.getItem("idioma") || "pt";
  
  //========
  //SLIDER 
  //========
  
  //lista de imagens
  const imagens = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Vit%C3%B3ria%2C_Esp%C3%ADrito_Santo%2C_Brazil-12July2009.jpg",
    alt: {
      pt: "Vista panorâmica da cidade de Vitória, capital do Espírito Santo.",
      en: "Panoramic view of Vitória, capital of Espírito Santo."
    },
    descricao: {
      pt: "Vitória é a capital do Espírito Santo e uma das três capitais insulares do Brasil. A cidade se destaca pelas belas paisagens, praias urbanas, ilhas e forte importância econômica.",
      en: "Vitória is the capital of Espírito Santo and one of Brazil’s three island capitals. The city stands out for its beautiful landscapes, urban beaches, islands, and strong economic importance."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Pal%C3%A1cio_Anchieta_Vit%C3%B3ria_Esp%C3%ADrito_Santo_2019-4733.jpg",
    alt: {
      pt: "Fachada do Palácio Anchieta, sede histórica do governo estadual em Vitória.",
      en: "Facade of the Anchieta Palace, historic seat of the state government in Vitória."
    },
    descricao: {
      pt: "O Palácio Anchieta é um dos edifícios históricos mais importantes do estado. Localizado no centro de Vitória, abriga a sede do governo e possui grande valor arquitetônico e cultural.",
      en: "The Anchieta Palace is one of the most important historical buildings in the state. Located in downtown Vitória, it houses the state government and has great architectural and cultural value."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7c/VitorJubini_Gastronomia_Anchieta_ES_%2839080737410%29.jpg",
    alt: {
      pt: "Moqueca capixaba servida em panela de barro tradicional.",
      en: "Capixaba moqueca served in a traditional clay pot."
    },
    descricao: {
      pt: "A moqueca capixaba é um dos pratos mais famosos do Espírito Santo. Feita com peixe, tomate, cebola, coentro e urucum, é preparada tradicionalmente em panela de barro.",
      en: "Capixaba moqueca is one of the most famous dishes in Espírito Santo. Made with fish, tomato, onion, cilantro, and annatto, it is traditionally prepared in a clay pot."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Convento_e_Igreja_de_Nossa_Senhora_da_Penha%2C_Vila_Velha%2C_Esp%C3%ADrito_Santo%2C_Brasil.jpg",
    alt: {
      pt: "Convento da Penha localizado no alto de um morro em Vila Velha.",
      en: "Penha Convent located on top of a hill in Vila Velha."
    },
    descricao: {
      pt: "O Convento da Penha é um dos principais cartões-postais do Espírito Santo. Construído no século XVI, é um importante símbolo religioso e turístico.",
      en: "The Penha Convent is one of the main landmarks of Espírito Santo. Built in the 16th century, it is an important religious and tourist symbol."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/28/Of%C3%ADcio_das_paneleiras_de_goiabeiras_Vit%C3%B3ria_1.jpg",
    alt: {
      pt: "Artesãs produzindo panelas de barro tradicionais em Goiabeiras, Vitória.",
      en: "Artisans producing traditional clay pots in Goiabeiras, Vitória."
    },
    descricao: {
      pt: "As panelas de barro de Goiabeiras são patrimônio cultural brasileiro. Produzidas artesanalmente, são essenciais na culinária capixaba.",
      en: "The Goiabeiras clay pots are Brazilian cultural heritage. Handmade, they are essential in Capixaba cuisine."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/28/Torta_Capixaba_1_Rafael_Deminicis.jpg",
    alt: {
      pt: "Torta capixaba tradicional preparada com frutos do mar.",
      en: "Traditional Capixaba pie made with seafood."
    },
    descricao: {
      pt: "A torta capixaba é um prato típico muito consumido na Semana Santa. Sua receita reúne bacalhau, siri, camarão, palmito e temperos regionais.",
      en: "Capixaba pie is a traditional dish widely consumed during Easter week. Its recipe includes cod, crab, shrimp, hearts of palm, and regional seasonings."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/70/Cachoeira_V%C3%A9u_de_Noiva_-_panoramio_%281%29.jpg",
    alt: {
      pt: "Cachoeira Véu de Noiva cercada pela natureza em Santa Leopoldina.",
      en: "Véu de Noiva waterfall surrounded by nature in Santa Leopoldina."
    },
    descricao: {
      pt: "A Cachoeira Véu de Noiva é uma atração natural conhecida pela beleza de sua queda d’água e pela vegetação preservada ao redor.",
      en: "Véu de Noiva Waterfall is a natural attraction known for its beautiful water drop and preserved surrounding vegetation."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Parque_Estadual_da_Cachoeira_da_Fuma%C3%A7a_-_Luciano_Daniel_%2802%29.jpg",
    alt: {
      pt: "Paisagem do Parque Estadual da Cachoeira da Fumaça.",
      en: "Landscape of Cachoeira da Fumaça State Park."
    },
    descricao: {
      pt: "O Parque Estadual da Cachoeira da Fumaça abriga uma das cachoeiras mais conhecidas do Espírito Santo. O local é procurado para ecoturismo, trilhas e contato com a natureza.",
      en: "The Cachoeira da Fumaça State Park hosts one of the best-known waterfalls in Espírito Santo. It is popular for ecotourism, hiking, and nature experiences."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/f/fc/Monumento_Natural_O_Frade_e_A_Freira_-_Luciano_Daniel_%2804%29.jpg",
    alt: {
      pt: "Formação rochosa O Frade e a Freira em Cachoeiro de Itapemirim.",
      en: "Rock formation Frade e Freira in Cachoeiro de Itapemirim."
    },
    descricao: {
      pt: "O Frade e a Freira é uma famosa formação rochosa do sul do estado. O monumento natural está ligado a lendas regionais e atrai visitantes.",
      en: "Frade e Freira is a famous rock formation in the southern part of the state. The natural monument is linked to local legends and attracts visitors."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/c/c9/Torii_do_Mosteiro_Zen_Morro_da_Vargem_e_Buda_gigante_de_Ibira%C3%A7u_ES.JPG",
    alt: {
      pt: "Grande estátua de Buda no Mosteiro Zen de Ibiraçu.",
      en: "Large Buddha statue at Ibiraçu Zen Monastery."
    },
    descricao: {
      pt: "Ibiraçu abriga um dos maiores Budas do Ocidente. O local também possui mosteiro zen e recebe visitantes interessados em cultura e espiritualidade.",
      en: "Ibiraçu is home to one of the largest Buddhas in the Western world. The site also has a Zen monastery and welcomes visitors interested in culture and spirituality."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/78/Congo_Capixaba_%284381580257%29.jpg",
    alt: {
      pt: "Apresentação cultural do Congo Capixaba com músicos e dançarinos.",
      en: "Capixaba Congo cultural performance with musicians and dancers."
    },
    descricao: {
      pt: "O Congo Capixaba é uma importante manifestação cultural do Espírito Santo, marcada por música, dança e forte tradição popular.",
      en: "Capixaba Congo is an important cultural expression in Espírito Santo, marked by music, dance, and strong popular tradition."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Instrumentos_musicais%2C_Congo_Quilombo_do_Retiro%2C_Santa_Leopoldina._n._04.jpg",
    alt: {
      pt: "Instrumentos tradicionais usados no Congo Capixaba.",
      en: "Traditional instruments used in Capixaba Congo."
    },
    descricao: {
      pt: "Os tambores e instrumentos artesanais são parte essencial das apresentações do Congo, preservando ritmos e costumes históricos.",
      en: "Drums and handmade instruments are essential to Congo performances, preserving rhythms and historical traditions."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Travestidos_de_Jo%C3%A3o_Bananeira.jpg",
    alt: {
      pt: "Participantes caracterizados na tradição popular João Bananeira.",
      en: "Participants dressed in the traditional João Bananeira celebration."
    },
    descricao: {
      pt: "João Bananeira é uma tradição cultural capixaba ligada às festas juninas. As pessoas usam máscaras e folhas de bananeira como fantasia.",
      en: "João Bananeira is a Capixaba cultural tradition linked to June festivals. People wear masks and banana leaves as costumes."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Vendanovadoimigrante.JPG",
    alt: {
      pt: "Vista panorâmica de Venda Nova do Imigrante em região montanhosa.",
      en: "Panoramic view of Venda Nova do Imigrante in a mountainous region."
    },
    descricao: {
      pt: "Venda Nova do Imigrante é conhecida pela influência italiana, clima agradável, produção agrícola e belas paisagens serranas.",
      en: "Venda Nova do Imigrante is known for its Italian influence, pleasant climate, agricultural production, and beautiful mountain landscapes."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/48/Santa_Teresa-ES_%2850898272912%29.jpg",
    alt: {
      pt: "Vista urbana e montanhosa do município de Santa Teresa.",
      en: "Urban and mountainous view of Santa Teresa city."
    },
    descricao: {
      pt: "Santa Teresa é reconhecida pela herança italiana, natureza preservada, gastronomia e importância histórica para a imigração no estado.",
      en: "Santa Teresa is known for its Italian heritage, preserved nature, gastronomy, and historical importance for immigration in the state."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Entardecer_em_Cambur%C3%AD.jpg/1920px-Entardecer_em_Cambur%C3%AD.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    alt: {
      pt: "O entardecer na praia de Camburi em Vitória",
      en: "Sunset at Camburi beach in Vitória"
    },
    descricao: {
      pt: "A Praia de Camburi, em Vitória, é uma das principais praias urbanas da capital. Conhecida pela longa faixa de areia e pelo pôr do sol, é muito frequentada para caminhadas e esportes.",
      en: "Camburi Beach in Vitória is one of the city's main urban beaches. Known for its long sandy strip and sunset views, it is popular for walking and sports."
    }
  },

  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Vista_da_Praia_do_Morro%2C_Guarapari_ES.JPG?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    alt: {
      pt: "Vista da Praia do Morro, em Guarapari, Espírito Santo",
      en: "View of Praia do Morro in Guarapari, Espírito Santo"
    },
    descricao: {
      pt: "A Praia do Morro, em Guarapari, é uma das mais conhecidas do estado. Com mar tranquilo e boa infraestrutura, é ideal para lazer e turismo.",
      en: "Praia do Morro in Guarapari is one of the best-known beaches in the state. With calm waters and good infrastructure, it is ideal for leisure and tourism."
    }
  }
];
  
  //elementos
  
  const imgEl = document.querySelector(".slide-img");
  const descricaoEl = document.getElementById("descricao");
  const btnNext = document.querySelector(".proximo");
  const btnPrev = document.querySelector(".anterior");
const slider = document.querySelector(".slider");
    
  let index = 0;
  let intervalo;
  
// Atualiza o Slide na tela
  
function atualizarSlide() {
  const atual = imagens[index];

  imgEl.src = atual.src;
  imgEl.alt = atual.alt[idiomaAtual];
  descricaoEl.textContent = atual.descricao[idiomaAtual];
}

// Passa para o prox Slide
  
function proximoSlide() {
  index++;

  // Volta pro início quando chega no final
  
  if (index >= imagens.length) {
    index = 0;
  }

  atualizarSlide();
}
  
  // Volta para o slide anterior
  
function anteriorSlide() {
  index--;

  // Vai para o último slide
  
  if (index < 0) {
    index = imagens.length - 1;
  }

  atualizarSlide();
}
  
// Iniciar Autoplay (troca automática)
  
function iniciarAutoplay() {
  intervalo = setInterval(proximoSlide, 5000);
}
  
// Reiniciar Autoplay (após interação)

function reiniciarAutoplay() {
  clearInterval(intervalo);
  iniciarAutoplay();
}

  //Evento dos Botoes
  
// botão próximo
btnNext.addEventListener("click", () => {
  proximoSlide();
  reiniciarAutoplay();
});

// botão anterior
btnPrev.addEventListener("click", () => {
  anteriorSlide();
  reiniciarAutoplay();
});

//Pausar Slider ao passar o mouse
  
if (slider) {
  slider.addEventListener("mouseenter", () => {
    clearInterval(intervalo);
  });

  slider.addEventListener("mouseleave", () => {
    iniciarAutoplay();
  });
}

// Mostra o primeiro slide
  
atualizarSlide();

// Inicia troca automática
  
iniciarAutoplay();
  
  //=========
  //DICIONÁRIO
  //==========
  
  // Pt / En
  
  const textos = {
  pt: {
    titulo: "Espírito Santo",
    subtitulo: "Terra de beleza, cultura e tradição",
    tema: "Alternar Tema",

    nav: {
      sobre: "Sobre",
      localizacao: "Localização",
      cultura: "Cultura",
      comidas: "Comidas Típicas",
      galeria: "Galeria",
      quiz: "Quiz",
      curiosidades: "Curiosidades"
    },

    sobre: {
      titulo: "Visite o Espírito Santo",
      p1:"O Espírito Santo é um estado brasileiro conhecido pela diversidade de paisagens, reunindo praias, montanhas, áreas verdes e cidades em desenvolvimento. Possui uma economia diversificada, com destaque para atividades portuárias, comércio, indústria, agricultura e turismo.",
      p2:"O estado também se destaca pela qualidade de vida em diversos municípios e pela combinação entre crescimento urbano e preservação ambiental. Sua história e beleza natural fazem do Espírito Santo um lugar de grande importância no Brasil."
    },

    localizacao: {
      titulo: "Localização:",
      p1: "O Espírito Santo está localizado na região Sudeste do Brasil. Faz divisa com a Bahia ao norte, Minas Gerais a oeste e noroeste, Rio de Janeiro ao sul e sudoeste, além de ser banhado pelo Oceano Atlântico a leste.",
      p2:"Sua localização estratégica favorece o comércio, o turismo e a ligação com importantes regiões do país."
    },

    cultura: {
      titulo: "Cultura:",
      p1:"A cultura do Espírito Santo é resultado da influência indígena, africana, europeia e de povos imigrantes, especialmente italianos e alemães. O estado preserva festas religiosas, manifestações folclóricas, tradições populares e artesanato regional.",
      p2:"Entre os destaques culturais estão o Congo capixaba, a panela de barro artesanal e diversas celebrações tradicionais. A diversidade cultural fortalece a identidade capixaba e mantém vivas as raízes históricas do estado."
    },

    comidas: {
      titulo: "Comidas Típicas:",
      p1: "A culinária do Espírito Santo é uma das mais tradicionais do Brasil, marcada pelo uso de ingredientes frescos e frutos do mar. Entre os pratos mais famosos estão a moqueca capixaba, preparada tradicionalmente sem leite de coco e sem azeite de dendê, e a torta capixaba, bastante consumida durante a Semana Santa.",
      p2:"Também se destacam receitas com peixes, camarões, siri e mariscos. A gastronomia capixaba representa fortemente a cultura e as tradições do estado."
    },
    
    anterior: "Anterior",
     proximo: "Próximo",
    quizTitulo: "Quiz Capixaba",
    perguntaLabel: "Pergunta:",
    correto: "Resposta Correta",
    errado: "Resposta Errada",
    finalizar: "Quiz finalizado!",
    tentar: "Refazer o quiz",
    pontuacao: "Você fez",
    
    curiosidades: {
      titulo: "Curiosidades:",
      itens: [
        "Vitória é a capital do estado",
        "Vila Velha abriga o Convento da Penha",
        "Estado famoso por praias e montanhas",
        "Forte tradição pesqueira"
      ]
    },
    footer: "Desenvolvido por Hábia Coutinho © 2026",
    },
    
  en: {
    titulo: "Espírito Santo",
    subtitulo: "Land of beauty, culture and tradition",
    tema: "Toggle Theme",

    nav: {
      sobre: "About",
      localizacao: "Location",
      cultura: "Culture",
      comidas: "Typical Food",
      galeria: "Gallery",
      quiz: "Quiz",
      curiosidades: "Trivia"
    },

    sobre: {
      titulo: "Visit Espírito Santo",
      p1: "Espírito Santo is a Brazilian state known for its diverse landscapes, bringing together beaches, mountains, green areas, and developing cities. It has a diversified economy, with emphasis on port activities, commerce, industry, agriculture, and tourism.",
      p2: "The state also stands out for the quality of life in several municipalities and for the balance between urban growth and environmental preservation. Its history and natural beauty make Espírito Santo a place of great importance in Brazil."
    },

    localizacao: {
      titulo: "Location:",
      p1:"Espírito Santo is located in the Southeast region of Brazil. It borders Bahia to the north, Minas Gerais to the west and northwest, Rio de Janeiro to the south and southwest, and is also bordered by the Atlantic Ocean to the east.",
      p2:"Its strategic location favors trade, tourism, and connections with important regions of the country."
    },

    cultura: {
      titulo: "Culture:",
      p1: "The culture of Espírito Santo is the result of Indigenous, African, European influences and immigrant peoples, especially Italians and Germans. The state preserves religious festivals, folk expressions, popular traditions, and regional craftsmanship.",
      p2:"Among the cultural highlights are the Capixaba Congo, handmade clay pots, and various traditional celebrations. This cultural diversity strengthens the Capixaba identity and keeps the state's historical roots alive."
    },

    comidas: {
      titulo: "Typical Foods:",
      p1: "The cuisine of Espírito Santo is one of the most traditional in Brazil, marked by the use of fresh ingredients and seafood. Among the most famous dishes are the “moqueca capixaba”, traditionally prepared without coconut milk and dendê oil, and the “torta capixaba”, widely consumed during Easter week.",
      p2:"Recipes with fish, shrimp, crab, and shellfish are also highlights. Capixaba cuisine strongly represents the culture and traditions of the state."
    },
    
    anterior: "Previous",
    proximo: "Next",
    quizTitulo: "Capixaba Quiz",
    perguntaLabel: "Question:",
    correto: "Correct Answer",
    errado: "Wrong Answer",
    finalizar: "Quiz finished!",
    tentar: "Restart Quiz",
    pontuacao: "You scored",
    
    curiosidades: {
      titulo: "Trivia:",
      itens: [
        "Vitória is the capital city",
        "Vila Velha has the Penha Convent",
        "Famous for beaches and mountains",
        "Strong fishing tradition"
      ]
    },
    footer: "Created by Hábia Coutinho © 2026"
  }
};
  
  //Funcao que troca os idiomas
  
const btnPt = document.getElementById("btn-pt");
const btnEn = document.getElementById("btn-en");
  
  function setText(seletor, texto) {
  const el = document.querySelector(seletor);
  if (el) el.textContent = texto;
}
  
function aplicarIdioma() {
  const t = textos[idiomaAtual];

  //titulos
  document.getElementById("titulo").textContent = t.titulo;
  document.getElementById("sobre-titulo").textContent = t.sobre.titulo;

  //subtitulos
  document.getElementById("subtitulo").textContent = t.subtitulo;
  
  //sobre
document.getElementById("sobre-p1").textContent = t.sobre.p1;
document.getElementById("sobre-p2").textContent = t.sobre.p2;

//localizacao
setText("#localizacao-titulo", t.localizacao.titulo);
setText("#loc-p1", t.localizacao.p1);
setText("#loc-p2", t.localizacao.p2);

//cultura
setText("#cultura-titulo", t.cultura.titulo);
setText("#cultura-p1", t.cultura.p1);
setText("#cultura-p2", t.cultura.p2);

//comidas
setText("#comidas-titulo", t.comidas.titulo);
setText("#comidas-p1", t.comidas.p1);
setText("#comidas-p2", t.comidas.p2);
  
  //galeria
  document.getElementById("galeria-titulo").textContent = t.nav.galeria;
  document.getElementById("btn-prev-text").textContent = t.anterior;
document.getElementById("btn-next-text").textContent = t.proximo;
  //quiz
document.getElementById("quiz-titulo").textContent = t.quizTitulo;
  document.getElementById("pergunta-titulo").textContent = t.perguntaLabel;
  
  //nav
  document.querySelectorAll(".navegacao a")[0].textContent = t.nav.sobre;
document.querySelectorAll(".navegacao a")[1].textContent = t.nav.localizacao;
document.querySelectorAll(".navegacao a")[2].textContent = t.nav.cultura;
document.querySelectorAll(".navegacao a")[3].textContent = t.nav.comidas;
document.querySelectorAll(".navegacao a")[4].textContent = t.nav.galeria;
document.querySelectorAll(".navegacao a")[5].textContent = t.nav.quiz;
document.querySelectorAll(".navegacao a")[6].textContent = t.nav.curiosidades;
  
  //curiosidades
  document.getElementById("curiosidades-titulo").textContent = t.curiosidades.titulo;
  
const lista = document.querySelectorAll("#curiosidades li");

lista.forEach((li, i) => {
  const icone = li.querySelector("i");

if (icone) {
  li.innerHTML = `<i class="${icone.className}"></i> ${t.curiosidades.itens[i]}`;
}
});
  
  //tema
  document.getElementById("theme-text").textContent = t.tema;

  //reset
  document.getElementById("reset").textContent = t.tentar;

  btnPt.classList.toggle("ativo", idiomaAtual === "pt");
  btnEn.classList.toggle("ativo", idiomaAtual === "en");
  
  //footer
  document.querySelector(".rodape p").textContent = t.footer;
  
  atualizarSlide();
}

aplicarIdioma();
  
  
  //Eventos dos botoes
  if (btnPt && btnEn) {
  btnPt.addEventListener("click", () => {
  idiomaAtual = "pt";
    localStorage.setItem("idioma", idiomaAtual);
  aplicarIdioma();
    
    pontos = 0;
indexPergunta = 0;
carregarPergunta();
});

btnEn.addEventListener("click", () => {
  idiomaAtual = "en";
  localStorage.setItem("idioma", idiomaAtual);
  aplicarIdioma();
  
  pontos = 0;
indexPergunta = 0;
carregarPergunta();
});
  }
  
  //=================
  //TEMA ESCURO
  //==================
  
  //Dark Mode
  
  const botaoTema = document.getElementById("theme-btn");

if (botaoTema) {
  const icone = botaoTema.querySelector("i");

  const temaSalvo = localStorage.getItem("tema") || "light";
  
  // Aplicar tema salvo
  
  if (temaSalvo === "dark") {
    document.body.classList.add("dark");
    icone.classList.remove("fa-sun");
    icone.classList.add("fa-moon");
  }

  // Evento de clique
  
  botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const temaAtual = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("tema", temaAtual);

    if (temaAtual === "dark") {
      icone.classList.remove("fa-sun");
      icone.classList.add("fa-moon");
    } else {
      icone.classList.remove("fa-moon");
      icone.classList.add("fa-sun");
    }
  });
}
  
//================
  //SCROLL TOPO
  //===============
  
  //De footer para header
  
const header = document.getElementById("topo");
const footer = document.getElementById("rodape");

if (header) {
  header.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (footer) {
  footer.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

//=========
  //QUIZ 
  //=========
  
  //Perguntas
  
const perguntas = [
  {
    pt: "Qual prato é típico do Espírito Santo?",
    en: "Which dish is typical of Espírito Santo?",
    opcoes: {
      pt: ["Feijoada", "Moqueca Capixaba", "Churrasco"],
      en: ["Feijoada", "Capixaba Moqueca", "Barbecue"]
    },
    correta: {
      pt: "Moqueca Capixaba",
      en: "Capixaba Moqueca"
    }
  },
  {
    pt: "Qual é a capital do Espírito Santo?",
    en: "What is the capital of Espírito Santo?",
    opcoes: {
      pt: ["Vitória", "Vila Velha", "Serra"],
      en: ["Vitória", "Vila Velha", "Serra"]
    },
    correta: {
      pt: "Vitória",
      en: "Vitória"
    }
  },
  {
    pt: "O que NÃO faz parte da moqueca capixaba tradicional?",
    en: "What is NOT part of traditional capixaba moqueca?",
    opcoes: {
      pt: ["Peixe", "Leite de coco", "Tomate"],
      en: ["Fish", "Coconut milk", "Tomato"]
    },
    correta: {
      pt: "Leite de coco",
      en: "Coconut milk"
    }
  },
  {
    pt: "Qual cidade abriga o famoso Convento da Penha?",
    en: "Which city is home to the famous Penha Convent?",
    opcoes: {
      pt: ["Serra", "Cariacica", "Vila Velha"],
      en: ["Serra", "Cariacica", "Vila Velha"]
    },
    correta: {
      pt: "Vila Velha",
      en: "Vila Velha"
    }
  },
  {
    pt: "O Espírito Santo pertence a qual região do Brasil?",
    en: "Espírito Santo belongs to which region of Brazil?",
    opcoes: {
      pt: ["Sul", "Sudeste", "Centro-Oeste"],
      en: ["South", "Southeast", "Midwest"]
    },
    correta: {
      pt: "Sudeste",
      en: "Southeast"
    }
  },
  {
    pt: "Qual desses elementos é um símbolo cultural do estado?",
    en: "Which of these is a cultural symbol of the state?",
    opcoes: {
      pt: ["Panela de barro", "Chapéu de couro", "Rede amazônica"],
      en: ["Clay pot", "Leather hat", "Amazon hammock"]
    },
    correta: {
      pt: "Panela de barro",
      en: "Clay pot"
    }
  },
  {
    pt: "O Congo Capixaba é:",
    en: "Capixaba Congo is:",
    opcoes: {
      pt: ["Uma dança e manifestação cultural", "Um prato típico", "Um ponto turístico"],
      en: ["A cultural dance and expression", "A typical dish", "A tourist attraction"]
    },
    correta: {
      pt: "Uma dança e manifestação cultural",
      en: "A cultural dance and expression"
    }
  },
  {
    pt: "Qual cidade é conhecida pelas montanhas e influência italiana?",
    en: "Which city is known for mountains and Italian influence?",
    opcoes: {
      pt: ["Venda Nova do Imigrante", "Guarapari", "Linhares"],
      en: ["Venda Nova do Imigrante", "Guarapari", "Linhares"]
    },
    correta: {
      pt: "Venda Nova do Imigrante",
      en: "Venda Nova do Imigrante"
    }
  },
  {
    pt: "Qual destas praias é famosa no Espírito Santo?",
    en: "Which of these beaches is famous in Espírito Santo?",
    opcoes: {
      pt: ["Copacabana", "Praia de Camburi", "Praia de Pipa"],
      en: ["Copacabana Beach", "Camburi Beach", "Pipa Beach"]
    },
    correta: {
      pt: "Praia de Camburi",
      en: "Camburi Beach"
    }
  },
  {
    pt: "Por que a panela de barro é importante na cultura capixaba?",
    en: "Why is the clay pot important in capixaba culture?",
    opcoes: {
      pt: [
        "É usada para plantar",
        "É apenas decoração",
        "É usada na culinária tradicional"
      ],
      en: [
        "Used for planting",
        "Only decoration",
        "Used in traditional cooking"
      ]
    },
    correta: {
      pt: "É usada na culinária tradicional",
      en: "Used in traditional cooking"
    }
  }
];

  //Elementos
let indexPergunta = 0;
let pontos = 0;

const perguntaEl = document.getElementById("pergunta");
const respostasEl = document.getElementById("respostas");
const resultado = document.getElementById("resultado");
const reset = document.getElementById("reset");

  //Funcao principal
function carregarPergunta() {
  const atual = perguntas[indexPergunta];

  resultado.textContent = "";
  reset.classList.add("escondido");

  perguntaEl.textContent = idiomaAtual === "pt" ? atual.pt : atual.en;
  respostasEl.innerHTML = "";

  atual.opcoes[idiomaAtual].forEach((opcao) => {
    const btn = document.createElement("button");
    btn.classList.add("resposta");
    btn.textContent = opcao;

    btn.addEventListener("click", () => {
      const correta = opcao === atual.correta[idiomaAtual];

      if (correta) {
        resultado.textContent = textos[idiomaAtual].correto;
        pontos++;
      } else {
        resultado.textContent = textos[idiomaAtual].errado;
      }
      
      const botoes = respostasEl.querySelectorAll("button");

      botoes.forEach((b) => {
       if (b.textContent === atual.correta[idiomaAtual]) {
          b.classList.add("certo");
        } else {
          b.classList.add("errado");
        }

        b.disabled = true;
      });

      setTimeout(() => {
        indexPergunta++;

        if (indexPergunta < perguntas.length) {
          carregarPergunta();
        } else {
          perguntaEl.textContent = textos[idiomaAtual].finalizar;
          respostasEl.innerHTML = "";
          resultado.textContent = `${textos[idiomaAtual].pontuacao} ${pontos} / ${perguntas.length}`;
          reset.classList.remove("escondido");
        }
      }, 800);
    });

    respostasEl.appendChild(btn);
  });
}

carregarPergunta();

  //Reset
reset.addEventListener("click", () => {
  indexPergunta = 0;
  pontos = 0;
  resultado.textContent = "";
  reset.classList.add("escondido");
  carregarPergunta();
});
  
});