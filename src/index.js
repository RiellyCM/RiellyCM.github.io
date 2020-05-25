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

    //aqui começa a parte do codigo que soma os internados durantes os 3 meses e realiza verificação

    //internados confirmados
      const internadosTotal = files.reduce((acc, file, index) => {
      const internadoAtual = file.confirmados.internados.total || 0;
      let internadoAnterior = 0;

      if (index > 0) {
        internadoAnterior = files[index-1].confirmados.internados.total || 0;
      }
      let diferencaConfirmados = internadoAtual - internadoAnterior;

      if (diferencaConfirmados < 0) {
        diferencaConfirmados = 0;
      }

      return diferencaConfirmados + acc;
    }, 0);
    //reduce recebe dois parametros o callback e o valor inicial
    //acc é o acumulador (retorno da soma do callback anterior)
    //Essa adaptação foi necessária para que os números não fossem somados duas vezes, mas sim a diferença de um dia para o outro
    const internadosTabela = document.querySelector(".internados-js")
    internadosTabela.innerHTML = internadosTotal;

      //internados suspeitos
      const internadosuspeitosTotal = files.reduce((acc, file, index) => {
      const internadoSuspeitoAtual = file.suspeitos.internados.total || 0;
      let internadoSuspeitoAnterior = 0;
      //recebe o index que é o numero "da vez"
      // declarar a variavel let fora do for, por isso igualar igual a 0, para o caso de não estar usando

      if (index > 0) {
         internadoSuspeitoAnterior = files[index-1].suspeitos.internados.total || 0;
      }
      //acessa a posição anterior
      let diferenca = internadoSuspeitoAtual - internadoSuspeitoAnterior;

      if (diferenca < 0) {
        diferenca = 0;
      }
      //se a diferença for menor que 0 então a diferença é igual a 0 porque dessa forma diferenças negativas (quando pacientes saem) são iguais a 0
      return diferenca + acc;
    }, 0);

    const internadosuspeitoTabela = document.querySelector(".internadosuspeitos-js")
    internadosuspeitoTabela.innerHTML = internadosuspeitosTotal;

    //aqui acaba a lógica para internados e começa a de UTI

    const internadoUtiTotal = files.reduce((acc, file, index) => {
    const utiAtual = file.confirmados.internados.uti || 0;
    let utiAnterior = 0;

    if (index > 0) {
      utiAnterior = files[index-1].confirmados.internados.uti || 0;
    }

    let diferencautiConfirmados = utiAtual - utiAnterior;

    if (diferencautiConfirmados < 0) {
      diferencautiConfirmados = 0;
    }

    return diferencautiConfirmados + acc;
    }, 0);

    const utiTabela = document.querySelector(".confirmadosuti-js")
    utiTabela.innerHTML = internadoUtiTotal;

    //UTI para suspeitos

    const suspeitosUtiTotal = files.reduce((acc, file, index) => {
    const utisuspeitosAtual = file.suspeitos.internados.uti || 0;
    let utisuspeitosAnterior = 0;

    if (index > 0) {
      utisuspeitosAnterior = files[index-1].suspeitos.internados.uti || 0;
    }

    let diferencautiSuspeitos = utisuspeitosAtual - utisuspeitosAnterior;

    if (diferencautiSuspeitos < 0) {
      diferencautiSuspeitos = 0;
    }

    return diferencautiSuspeitos + acc;
    }, 0);

    const utisuspeitosTabela = document.querySelector(".suspeitosuti-js")
    utisuspeitosTabela.innerHTML = suspeitosUtiTotal;

    //começa o código para casos que aguardam resultado
    const aguardamResultado = files.reduce((acc, file, index) => {
    const aguardamresultadoAtual = file.suspeitos.aguardamResultado || 0;
    let aguardamresultadoAnterior = 0;

    if (index > 0) {
      aguardamresultadoAnterior = files[index-1].suspeitos.aguardamResultado || 0;
    }

    let diferencaAguardamResultados = aguardamresultadoAtual - aguardamresultadoAnterior;

    if (diferencaAguardamResultados < 0) {
      diferencaAguardamResultados = 0;
    }

    return diferencaAguardamResultados + acc;
    }, 0);

    const aguardamresultadosTabela = document.querySelector(".aguardamresultados-js")
    aguardamresultadosTabela.innerHTML = aguardamResultado;

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
