//esto es la carpeta de trabajo de la P4.
//author: Nerio Messino

function load(citiesFilename){
  JSON.parse(citiesFilename);
}


exports.max_temp = (cities) =>{
 let temp1 =cities.temp;
 let temp_max;
 let tamaño_cities=cities.length;
 for (let i=0;i<tamaño_cities;i++){
   if(cities.temp[i]>temp1){
    cities.temp[i]=temp1;
    temp_max=temp1;
    console.log(temp_max);
   }
   return temp_max;
 }
 return;
}

exports.min_temp = (cities) =>{
  let temp_aux =cities.temp;
 let temp_min;
 let tamaño_cities=cities.length;
 for (let i=0;i<tamaño_cities;i++){
   if(cities.temp[i]<temp_aux){
    cities.temp[i]=temp_aux;
    temp_min=temp_aux;
    console.log(temp_min);
   }
   return temp_min;
 }
 return;

}