const months = {
  3: {
    name: 'marco',
    firstDay: 18,
    lastDay: 31,
  },
  4: {
    name: 'abril',
    firstDay: 1,
    lastDay: 30,
  },
  5: {
    name: 'maio',
    firstDay: 1,
    lastDay: 10,
  },
};

let files = [];

for (let currentMonth = 3; currentMonth <= 5; currentMonth++) {
  const monthName = months[currentMonth].name;
  const firstDay = months[currentMonth].firstDay;
  const lastDay = months[currentMonth].lastDay;

  let month = currentMonth;

  if (month < 10) {
    month = "0" + month
    //O que acontece aqui é a concatenação de uma string e um numero (month) que resulta em uma string//
  }

  for (let currentDay = firstDay; currentDay <= lastDay; currentDay++) {
    let day = currentDay;

    if (day < 10) {
      day = "0" + day
      //O que acontece aqui é a concatenação de uma string e um numero (day) que resulta em uma string//
    }
    const file = require("../dados/" + monthName + "/" + day + "-" + month + "-2020.json")
    files.push(file)

    // console.log("../dados/" + monthName + "/" + day + "-" + month + "-2020.json")
  }
}

console.log(files)

let labels = [];

for (let currentMonth = 3; currentMonth <= 5; currentMonth++) {
  const firstDay = months[currentMonth].firstDay;
  const lastDay = months[currentMonth].lastDay;

  for (let currentDay = firstDay; currentDay <= lastDay; currentDay++) {
    labels.push(currentDay + '/' + currentMonth);
  }
}

 const data = files.map((file) => {
   return file.confirmados.total || "0";
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
            label: 'Número total de casos confirmados',
            backgroundColor: '#fff',
            borderColor: 'rgb(255, 99, 132)',
            data,
        }
      ]
    },

    // Configuration options go here
    options: {}
});
