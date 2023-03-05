//esto es la carpeta de trabajo de la P4.
//author: Nerio Messino

function load(citiesFilename){
  JSON.parse(citiesFilename);
}


exports.max_temp = (cities) =>{
 let temp_max=cities[0].main.temp;
 let tamaño_cities=cities.length;
 for (let i=1;i<tamaño_cities;i++){
  let temp_aux=city.main.temp; 
  if(temp_aux>temp_max){
     temp_max=temp_aux;
     console.log(temp_max);
   }
  
 }
 return temp_max;
}

exports.min_temp = (cities) =>{
  let temp_min =cities[0].main.temp;
 
   cities.forEach((city) => {
    let temp_aux=city.main.temp;
    if(temp_aux < temp_min){
      temp_min=temp_aux;
    }
   });
   
   return temp_min;

}