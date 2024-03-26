 

  function DoughnutChart(list){
    //console.log(list)
    let listkey=[]
    let listvalue=[]
    
    for(element of list){
       //console.log(Object.keys(element))
        listkey.push(Object.keys(element).join())
        listvalue.push(Object.values(element).join())
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
                 '#CC00FF'
              ],
              borderColor: [
                 '#3C99DC',        
                 '#FF69B4',
                 '#FFF44F',
                 '#39FF14',
                 '#CC00FF',
              ],
              borderWidth: 1,
            
             
          }]
      }
  })}