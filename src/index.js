  const files = [
    require("../dados/marco/18-03-2020.json"),
    require("../dados/marco/19-03-2020.json"),
    require("../dados/marco/20-03-2020.json"),
    require("../dados/marco/21-03-2020.json"),
    require("../dados/marco/22-03-2020.json"),
    require("../dados/marco/23-03-2020.json"),
    require("../dados/marco/24-03-2020.json"),
    require("../dados/marco/25-03-2020.json"),
    require("../dados/marco/26-03-2020.json"),
    require("../dados/marco/27-03-2020.json"),
    require("../dados/marco/28-03-2020.json"),
    require("../dados/marco/29-03-2020.json"),
    require("../dados/marco/30-03-2020.json"),
    require("../dados/marco/31-03-2020.json"),
    require("../dados/abril/01-04-2020.json"),
    require("../dados/abril/02-04-2020.json"),
    require("../dados/abril/03-04-2020.json"),
    require("../dados/abril/04-04-2020.json"),
    require("../dados/abril/05-04-2020.json"),
    require("../dados/abril/06-04-2020.json"),
    require("../dados/abril/07-04-2020.json"),
    require("../dados/abril/08-04-2020.json"),
    require("../dados/abril/09-04-2020.json"),
    require("../dados/abril/10-04-2020.json"),
    require("../dados/abril/11-04-2020.json"),
    require("../dados/abril/12-04-2020.json"),
    require("../dados/abril/13-04-2020.json"),
    require("../dados/abril/14-04-2020.json"),
    require("../dados/abril/15-04-2020.json"),
    require("../dados/abril/16-04-2020.json"),
    require("../dados/abril/17-04-2020.json"),
    require("../dados/abril/18-04-2020.json"),
    require("../dados/abril/19-04-2020.json"),
    require("../dados/abril/20-04-2020.json"),
    require("../dados/abril/21-04-2020.json"),
    require("../dados/abril/22-04-2020.json"),
    require("../dados/abril/23-04-2020.json"),
    require("../dados/abril/24-04-2020.json"),
    require("../dados/abril/25-04-2020.json"),
    require("../dados/abril/26-04-2020.json"),
    require("../dados/abril/27-04-2020.json"),
    require("../dados/abril/28-04-2020.json"),
    require("../dados/abril/29-04-2020.json"),
    require("../dados/abril/30-04-2020.json"),
    require("../dados/maio/01-05-2020.json"),
    require("../dados/maio/02-05-2020.json"),
    require("../dados/maio/03-05-2020.json"),
    require("../dados/maio/04-05-2020.json"),
    require("../dados/maio/05-05-2020.json"),
    require("../dados/maio/06-05-2020.json"),
    require("../dados/maio/07-05-2020.json"),
    require("../dados/maio/08-05-2020.json"),
    require("../dados/maio/09-05-2020.json"),
    require("../dados/maio/10-05-2020.json"),
    require("../dados/maio/11-05-2020.json"),
    require("../dados/maio/12-05-2020.json"),
    require("../dados/maio/13-05-2020.json"),
    require("../dados/maio/14-05-2020.json"),
    require("../dados/maio/15-05-2020.json"),
    require("../dados/maio/16-05-2020.json"),
    require("../dados/maio/17-05-2020.json"),
    require("../dados/maio/18-05-2020.json"),
    require("../dados/maio/19-05-2020.json"),
    require("../dados/maio/20-05-2020.json"),
    require("../dados/maio/21-05-2020.json"),
    require("../dados/maio/22-05-2020.json"),
    require("../dados/maio/23-05-2020.json"),
    require("../dados/maio/24-05-2020.json"),
    require("../dados/maio/25-05-2020.json"),
    require("../dados/maio/26-05-2020.json"),
    require("../dados/maio/27-05-2020.json"),
    require("../dados/maio/28-05-2020.json"),
    require("../dados/maio/29-05-2020.json"),
    require("../dados/maio/31-05-2020.json"),
    require("../dados/junho/01-06-2020.json"),
    require("../dados/junho/02-06-2020.json"),
    require("../dados/junho/03-06-2020.json"),
    require("../dados/junho/04-06-2020.json"),
    require("../dados/junho/05-06-2020.json"),
    require("../dados/junho/08-06-2020.json"),
    require("../dados/junho/09-06-2020.json"),
    require("../dados/junho/10-06-2020.json"),
    require("../dados/junho/11-06-2020.json"),
    require("../dados/junho/12-06-2020.json"),
    require("../dados/junho/13-06-2020.json"),
    require("../dados/junho/14-06-2020.json"),
    require("../dados/junho/15-06-2020.json"),
    require("../dados/junho/16-06-2020.json"),
    require("../dados/junho/17-06-2020.json"),
    ];
    //adiciona em files todos os file, ou seja, todos os arquivos que contem os dados utilizados.
    //precisa atualizar os jsons no file sempre para que eles se apliquem

    const labels = files.map((file) => {
      return file.data;
    });
    //na const labels é aplicado a todos os files uma função map
    //tal função é responsável por buscar todos os elementos determinados e devolver um array com a mesma quantia de elementos

    const recuperadosConfirmados = files.map((file) => {
      return file.confirmados.recuperados || "0";
    });

    const totalConfirmados = files.map((file) => {
      return file.confirmados.total || "0";
    });

    const obitosConfirmados = files.map((file) => {
      return file.confirmados.obitos || "0";
    });

    const internadosTotal = files.map((file) => {
      return file.confirmados.internados.total || "0";
    });

    const internadosUti = files.map((file) => {
      return file.confirmados.internados.uti || "0";
    });

    const obitosSuspeitos = files.map((file) => {
      return file.suspeitos.obitos || "0";
    });
    //todos os maps realizados acima tem como objetivo buscar determinada informação e devolver um array com a mesma quantidade de itens

    const linksReferencia = files.map((file) => {
      return file.fonte;
    });
    //colocar nas "bolinhas" de cada gráfico

    const atualizaData = files[files.length-1].data;
    const atualizaDataTabela = document.querySelector(".atualizadia-js")
    atualizaDataTabela.innerHTML = atualizaData;
    //busca o ultimo file de data e mostra no campo atualiza data da tabela

    const atualizaTotalConfirmadosTabela = files[files.length-1].confirmados.total;
    const atualizaConfirmadosTabela = document.querySelector(".totalconfirmadostabela-js")
    atualizaConfirmadosTabela.innerHTML = atualizaTotalConfirmadosTabela;
    //busca os dados de total dentro de confirmados do ultimo file de files e atualiza na tabela

    const atualizaTotalObitosConfirmadosTabela = files[files.length-1].confirmados.obitos;
    const atualizaObitosConfirmadosTabela = document.querySelector(".obitosconfirmados-js")
    atualizaObitosConfirmadosTabela.innerHTML = atualizaTotalObitosConfirmadosTabela;
    //busca obitos dentro de confirmados do ultimo file de files

    const atualizaTotalObitosSuspeitosTabela = files[files.length-1].suspeitos.obitos;
    const atualizaObitosSuspeitosTabela = document.querySelector(".obitosuspeito-js")
    atualizaObitosSuspeitosTabela.innerHTML = atualizaTotalObitosSuspeitosTabela;
    //atualiza obitos suspeitos do ultimo file de files na tabela

    const atualizaRecuperadosConfirmadosTabela = files[files.length-1].confirmados.recuperados;
    const atualizaRecuperadosTabela = document.querySelector(".recuperados-js")
    atualizaRecuperadosTabela.innerHTML = atualizaRecuperadosConfirmadosTabela;

    const atualizaInternadosConfirmadosTabela = files[files.length-1].confirmados.internados.total;
    const atualizaInternadosTabela = document.querySelector(".internados-js")
    atualizaInternadosTabela.innerHTML = atualizaInternadosConfirmadosTabela;

    const atualizaInternadosSuspeitosTabela = files[files.length-1].suspeitos.internados.total;
    const atualizaSuspeitosInternadosTabela = document.querySelector(".internadosuspeitos-js")
    atualizaSuspeitosInternadosTabela.innerHTML = atualizaInternadosSuspeitosTabela;

    const atualizaUTIConfirmadosTabela = files[files.length-1].confirmados.internados.uti;
    const atualizaUTITabela = document.querySelector(".confirmadosuti-js")
    atualizaUTITabela.innerHTML = atualizaUTIConfirmadosTabela;

    const atualizaUTISuspeitosTabela = files[files.length-1].suspeitos.internados.uti;
    const atualizaSuspeitosUTITabela = document.querySelector(".suspeitosuti-js")
    atualizaSuspeitosUTITabela.innerHTML = atualizaUTISuspeitosTabela;

    const atualizaTotalDescartadosTabela = files[files.length-1].suspeitos.descartados;
    const atualizaDescartadosTabela = document.querySelector(".descartados-js")
    atualizaDescartadosTabela.innerHTML = atualizaTotalDescartadosTabela;
    //mesma lógica em que é pego os descartados de suspeitos do ultimo file de files

    const atualizaTotalAguardamResultadosTabela = files[files.length-1].suspeitos.aguardamResultado;
    const atualizaAguardamResultadosTabela = document.querySelector(".aguardamresultados-js")
    atualizaAguardamResultadosTabela.innerHTML = atualizaTotalAguardamResultadosTabela;

    //dados utilizados no ultimo gráfico de barras
    const ultimoNumeroConfirmados = files[files.length-1].confirmados.total;
      //length fala o comprimento do array.
      //Como regra o primeiro elemento de um array é 0, portanto precisamos fazer -1 p/ pegar o ultimo elemento real

    const somaObitosConfirmados = files[files.length-1].confirmados.obitos;

    const somaObitosSuspeitos = files[files.length-1].suspeitos.obitos;

const graficoCasosConfirmados = document.querySelector('#total-de-casos-confirmados').getContext('2d');
const graficoObitos = document.querySelector('#total-de-obitos').getContext('2d');
const graficoRecuperados = document.querySelector('#total-de-casos-recuperados').getContext('2d');
const graficoCasosInternados = document.querySelector('#total-de-casos-internados').getContext('2d');
const graficoDadosCombinadosDeÓbitos = document.querySelector('#combinacao-obitos-suspeitos-confirmados-e-totais').getContext('2d');

new Chart(graficoCasosConfirmados, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: labels,

        datasets: [
        {
            label: 'Número total de casos (Confirmados)',
            borderColor: '#ff6600',
            data: totalConfirmados,
            //Aqui vai os valores que eu quero que apareçam no gráfico.
        }
      ]
    },

    // Configuration options go here
    options: {}
});

new Chart(graficoObitos, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
      labels: labels,
      datasets: [
      {
          label: 'Número total de óbitos (Confirmados)',
          borderColor: '#d61313',
          data: obitosConfirmados,
      }
    ]
  },

  // Configuration options go here
  options: {}
});

new Chart(graficoRecuperados, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: labels,

        datasets: [
        {
            label: 'Recuperados (Confirmados)',
            borderColor: '#063302',
            data: recuperadosConfirmados,
        },
        {
            label: 'Casos Confirmados',
            borderColor: '#ff6600',
            data: totalConfirmados,
        }
      ]
    },

    // Configuration options go here
    options: {}
  });

new Chart(graficoCasosInternados, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: labels,

          datasets: [
          {
              label: 'Internados (Confirmados)',
              borderColor: '#030a5c',
              data: internadosTotal,
          },
          {
              label: 'Internados em UTI (Confirmados)',
              borderColor: '#2f8763',
              data: internadosUti,
          },
          {
              label: 'Obitos (Confirmados)',
              borderColor: '#d61313',
              data: obitosConfirmados,
          }
        ]
    },

    // Configuration options go here
    options: {}
  });

new Chart(graficoDadosCombinadosDeÓbitos, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        datasets: [
          {
            label: 'Óbitos (Confirmados)',
            backgroundColor: '#d61313',
            data: [somaObitosConfirmados],
          },
          {
            label: 'Óbitos (Suspeitos)',
            backgroundColor: '#058ba6',
            data: [somaObitosSuspeitos],
          }
        ]
    },

    // Configuration options go here
    options: {}
  });
