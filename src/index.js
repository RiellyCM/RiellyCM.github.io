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
    ];

    const labels = files.map((file) => {
      return file.data;
    });

    const RecuperadosConfirmados = files.map((file) => {
      return file.confirmados.recuperados || "0";
    });

    const TotalConfirmados = files.map((file) => {
      return file.confirmados.total || "0";
    });

    const ObitosConfirmados = files.map((file) => {
      return file.confirmados.obitos || "0";
    });

    const InternadosTotal = files.map((file) => {
      return file.confirmados.internados.total || "0";
    });

    const InternadosUti = files.map((file) => {
      return file.confirmados.internados.uti || "0";
    });

    const ObitoSuspeitos = files.map((file) => {
      return file.suspeitos.obitos || "0";
    });




var graficoCasosConfirmados = document.querySelector('#total-de-casos-confirmados').getContext('2d');
var graficoMortes = document.querySelector('#total-de-mortes').getContext('2d');
var graficoDadosCombinados = document.querySelector('#combinacao-obitos-suspeitos-confirmados-e-totais').getContext('2d');
var graficoRecuperados = document.querySelector('#total-de-casos-recuperados').getContext('2d');
var graficoCasosInternados = document.querySelector('#total-de-casos-internados').getContext('2d');

new Chart(graficoCasosConfirmados, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: labels,

        datasets: [
        {
            label: 'Número total de casos confirmados',
            backgroundColor: '#fff',
            borderColor: 'rgb(255, 99, 132)',
            data: TotalConfirmados,
            //Aqui vai os valores que eu quero que apareçam no gráfico.
        }
      ]
    },

    // Configuration options go here
    options: {}
});

new Chart(graficoMortes, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
      labels: labels,
      datasets: [
      {
          label: 'Número total de óbitos confirmados',
          backgroundColor: '#fff',
          borderColor: 'rgb(255, 99, 132)',
          data: ObitosConfirmados,
      }
    ]
  },

  // Configuration options go here
  options: {}
});

new Chart(graficoDadosCombinados, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
      labels: labels,
      datasets: [
        {
          label: 'óbitos confirmados',
          borderColor: '#ff6384',
          data: ObitosConfirmados,
        },
        {
          label: 'óbitos suspeitos',
          borderColor: '#10107d',
          data: ObitoSuspeitos,
        },
        {
          label: 'Total de Casos confirmados',
          borderColor: '#89389c',
          data: TotalConfirmados,
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
            label: 'casos recuperados confirmados',
            borderColor: '#052b52',
            data: RecuperadosConfirmados,
        },
        {
            label: 'casos confirmados',
            borderColor: '#1d7a06',
            data: TotalConfirmados,
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
              label: 'Casos confirmados internados',
              borderColor: '#030a5c',
              data: InternadosTotal,
          },
          {
              label: 'Casos confirmados internados em UTI',
              borderColor: '#035c1c',
              data: InternadosUti,
          },
          {
              label: 'Obitos confirmados',
              borderColor: '#800903',
              data: ObitosConfirmados,
          },
          {
              label: 'Confirmados recuperados',
              borderColor: '#e3be29',
              data: RecuperadosConfirmados,
          }
        ]
    },

    // Configuration options go here
    options: {}
  });
