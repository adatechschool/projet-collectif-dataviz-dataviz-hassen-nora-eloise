 

  function DoughnutChart(list){
    //console.log(list)
    let listkey=[]
    let listvalue=[]
    for(element of list){
       //console.log(Object.keys(element))
        listkey.push(Object.keys(element).join()) //liste des disciplines
        listvalue.push(Object.values(element).join()) // liste des valeurs correspondantes
      }
      /* console.log(listkey)
      console.log(listvalue) */
  let  ctx = document.getElementById('myDoughnutChart').getContext('2d')
  let  myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: listkey,
          datasets: [{
              label: 'Les Festivals Pays de Loire',
              data: listvalue,
              backgroundColor: [
                 '#3C99DC',
                 '#FF69B4',
                 '#FFF44F',
                 '#39FF14',
                 '#CC00FF',
                 "#F39C12"
              ],
              borderColor: [
                 '#3C99DC',        
                 '#FF69B4',
                 '#FFF44F',
                 '#39FF14',
                 '#CC00FF',
                 "#F39C12"
              ],
              borderWidth: 1,
          }]
      }
  })}