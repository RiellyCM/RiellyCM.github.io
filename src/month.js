let files = [];

for (let index = 1; index <= 30; index++) {
  let day = index;

  if (day < 10) {
    day = "0" + day
    //O que acontece aqui é a concatenação de uma string e um numero (day) que resulta em uma string//
  }

  const file = require("../dados/abril/" + day + "-04-2020.json")
  files.push(file)
}

const labels = files[].map((_, index) => {
  return index + 1;
});

 const data = files.map((file) => {
   return file.confirmados.total;
});


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels,

        datasets: [
        {
            label: 'Casos confirmados - Dia 04/05',
            backgroundColor: '#fff',
            borderColor: 'rgb(255, 99, 132)',
            data,
        }
      ]
    },

    // Configuration options go here
    options: {}
});
