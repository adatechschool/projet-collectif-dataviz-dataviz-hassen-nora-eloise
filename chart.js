 

  function DoughnutChart(){
  let  ctx = document.getElementById('myDoughnutChart').getContext('2d')
  let  myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Festival de Culture', 'Festival de Music', 'Festival d\'Art', 'Autre Festival', 'Festival de Cinéma'],
          datasets: [{
              label: 'Les Festivals Pays de Loire',
              data: [31,25,25,12,6],
              backgroundColor: [
                 '#3C99DC',
                 '#FF69B4',
                 '#FFF44F',
                 '#39FF14',
                 '#CC00FF'
              ],
              borderColor: [
                 '#3C99DC',        
                 '#FF69B4',
                 '#FFF44F',
                 '#39FF14',
                 '#CC00FF',
              ],
              borderWidth: 1
          }]
      }
  })}