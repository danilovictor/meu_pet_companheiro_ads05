var options = {
     chart: {
       type: 'bar'
     },
     series: [{
       name: 'Animais adotados',
       data: [ 30.925 ,20.102 ,78.092, 30.863 ,12.626 ,60 ,70 ,91 ,125 ]
     }],
     xaxis: {
       categories: ['Nordeste','Norte','Sudeste','Sul','Centro-Oeste',1996,1997, 1998,1999]
     }
   }
   
   var chart = new ApexCharts(document.querySelector("#chart"), options);
   
   chart.render();