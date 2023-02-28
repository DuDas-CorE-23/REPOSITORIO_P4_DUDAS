//esto es la carpeta de trabajo de la P4.
//author: Nerio Messino

function load(citiesFilename){
  JSON.parse(citiesFilename);
}


function max_temp(cities){
 let temp1;
 let temp_max;
 let tamaño_cities=cities.length;
 for (let i=0;i<tamaño_cities;i++){
   if(cities[i]>temp1){
    cities[i]=temp1;
    temp_max=temp1;
    console.log(temp_max);
   }
   return temp_max;
 }
 return;
}