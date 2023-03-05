//esto es la carpeta de trabajo de la P4.
//author: Nerio Messino




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
};

exports.min_temp = (cities) =>{
  let temp_min =cities[0].main.temp;
   cities.forEach((city) => {
    let temp_aux=city.main.temp;
    if(temp_aux < temp_min){
      temp_min=temp_aux;
    }
   });
    return temp_min;
};

exports.max_temp_min = (cities) =>{
  let max_temp_min=cities[0].main.temp_min;
   cities.forEach((city) => {
    let temp_aux=city.main.temp_min;
    if(temp_aux > max_temp_min){
      max_temp_min=temp_aux;
    }
   });
   return max_temp_min;
};

exports.min_temp_max = (cities) =>{
  let min_temp_max =cities[0].main.temp_max;
   cities.forEach((city) => {
    let temp_aux=city.main.temp_max;
    if(temp_aux < min_temp_max){
      min_temp_max=temp_aux;
    }
   });
    return min_temp_max;
};

exports.average_temp = (cities) =>{
  let TotalCiudades = cities.length;
  let InicialAcumulador=0;
  let SumaTemperaturas =cities.reduce((SumaAcumulada, city) =>{
    return SumaAcumulada =+ cities.main.temp;
  }, InicialAcumulador);
  return SumaTemperaturas/TotalCiudades;
};

exports.warmer_average_temp =(cities) =>{
  let TemperaturaMedia = average_temp(cities);

  let TempMasCalientes = cities.filter((city)=>{
    let temp_aux=city.main.temp;
    return temp_aux > TemperaturaMedia;
  });
   return TempMasCalientes;
};