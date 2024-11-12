var ctx = document.getElementById("countChart");
if (ctx) {
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["1991", "1994", "1997", "2000", "2003", "2006", "2009", "2012", "2015", "2018", "2021", "2024"],
      datasets: [
        {
          data: [100, 150, 180, 230, 200, 250, 270, 230, 300, 340, 330, 500, 550],
          borderColor: "rgb(15, 45, 255)",
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      elements: {
        point: {
          radius: 0
        }
      },
      scales: {
        y: {
          type: 'linear',
          ticks: {
            beginAtZero: false,
            stepSize: 50, // Customize the step size if needed
            min: 50,
            max: 550,
            suggestedMax: Math.max(550), // Set the maximum value of the y-axis to 100
          },
        }
      }
    }
  });
}

//chart two multiple line

var ctxtwo = document.getElementById("sexeChart");
if (ctxtwo) {
  var myChart = new Chart(ctxtwo, {
    type: 'line',
    backgroundColor: 'rgb(15, 45, 255)',
    data: {
      labels: ["1991", "1994", "1997", "2000", "2003", "2006", "2009", "2012", "2015", "2018", "2021", "2024"],
      datasets: [{
        label: 'Homme', // Name the series
        data: [100, 150, 180, 230, 200, 150, 280, 230, 300, 340, 130, 300, 450], // Specify the data values array
        fill: true,
        borderColor: "rgb(15, 45, 255)",
        backgroundColor: 'rgb(15, 45, 255,0.26)', // Add custom color background (Points and Fill)
        borderWidth: 1// Specify bar border width
      },
      {
        label: 'Femme', // Name the series
        data: [100, 50, 180, 130, 100, 250, 170, 130, 100, 140, 130, 100, 150], // Specify the data values array
        fill: true,
        borderColor: 'rgb(168, 37, 255)', // Add custom color border (Line)
        backgroundColor: 'rgb(168, 37, 255,0.26)', // Add custom color background (Points and Fill)
        borderWidth: 1 // Specify bar border width
      }]
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
      elements: {
        point: {
          radius: 0
        }
      }
    }
  });
}

//chart division
if ($(".slider-chart")) {
  var $show = $(".slider-chart").data('show');
  $(".slider-chart").slick({
    focusOnSelect: true,
    dots: false,
    infinite: true,
    autoSlidesToShow: true,
    variableWidth: true,
  });
}

function Chart_doughnut(item, colors, label, values, labels) {
  var Chartdoughnut = new Chart(item, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: values,
        borderWidth: "1",
        backgroundColor: colors,
        hoverOffset: 3
      }]
    },
    options: {
      cutout: '60%',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      }
    }
  })
}

$(document).ready(function ($) {
  $(".Chart-doughnut").each(function () {
    var colors = $(this).data('colors');
    var label = $(this).data('label');
    var values = $(this).data('values');
    var labels = $(this).data('labels');
    Chart_doughnut($(this), colors, label, values, labels);
  });
});




if ($(".barChart")) {
  function Chart_bar(item, colors, values, labels) {
    var barChart = new Chart(item, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          barPercentage: 30,
          barThickness: 30,
          backgroundColor: colors,
          data: values,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
      }
    });
  }
  $(document).ready(function ($) {
    $(".barChart").each(function () {
      var colors = $(this).data('colors');
      var values = $(this).data('values');
      var labels = $(this).data('labels');
      Chart_bar($(this), colors, values, labels);
    });
  });
}

