$(function () {

  /*===================================================================*/
  /* Plugin - Datepicker - 取得id觸發函式
  /*===================================================================*/

  $('input.input-datepicker').each(function () {
    var thisId = this.id;
    var inputId = '#' + thisId;
    $(inputId).datepicker();
  })

  /*===================================================================*/
  /* Plugin - DataTable - 取得id觸發函式
  /*===================================================================*/
  $('table').each(function () {
    var thisId = this.id;
    var tableId = '#' + thisId;
    $(tableId).DataTable();
  })

});


var ctx = document.getElementById("myChart").getContext('2d');
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["9 Jun", "10 Jun", "11 Jun", "12 Jun", "13 Jun", "14 Jun", "15 Jun"], // x軸
    datasets: [
      { 
        label: '# of Total Revenue',
        data: [12, 19, 3, 5, 2, 3, 2, 13],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1 
      }, 
      {
        label: '# of Total Cost',
        data: [1, 1, 13, 15, 12, 13, 12, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
      {
        label: '# of Total Income',
        data: [21, 12, 1, 4, 15, 3, 11, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  }, // data結束
  options: {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Money'
        }
      }]
    }
  }
});


