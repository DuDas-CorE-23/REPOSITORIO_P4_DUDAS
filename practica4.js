//esto es la carpeta de trabajo de la P4.
//author: Nerio Messino
const {readFile} = require('fs/promises');

exports.load = async filename => {
  const buf = await readFile(filename);
  return JSON.parse(buf);
}

exports.max_temp = (cities) =>{
  let temp_max =cities[0].main.temp;
  cities.forEach((city) => {
   let temp_aux=city.main.temp;
   if(temp_aux > temp_max){
     temp_max=temp_aux;
   }
  });
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
    let temp_aux=city.main.temp;
    return SumaAcumulada + temp_aux;
  }, InicialAcumulador);
  return SumaTemperaturas/TotalCiudades;
};

exports.warmer_average_temp =(cities) =>{
  let TemperaturaMedia = average_temp(cities);

  let TempMasCalientes = cities.filter((city)=>{
    let temp_aux=city.main.temp;
    return temp_aux > TemperaturaMedia;
  });
  let nombresCiudades = TempMasCalientes.map((city) => city.name);
  return nombresCiudades.join(", ");
};

exports.max_latitud =(cities)=>{
  let Latitud_max=cities[0].coord.lat;
  cities.forEach((city)=>{
    let LatitudAuxiliar=cities.coord.lat
    if(LatitudAuxiliar>Latitud_max){
    Latitud_max=LatitudAuxiliar;
    }
  });
  return Latitud_max;
}

exports.min_latitud =(cities)=>{
  let Latitud_min=cities[0].coord.lat;
  cities.forEach((city)=>{
    let LatitudAuxiliar=cities.coord.lat
    if(LatitudAuxiliar<Latitud_min){
    Latitud_min=LatitudAuxiliar;
    }
  });
  return Latitud_min;
}

exports.max_north = (cities) =>{
 let CiudadMasNorte =cities[0];
 cities.forEach((cities)=>{
  let LatAux = cities.coord.lat;
  if ( LatAux > CiudadMasNorte.coord.lat)
  CiudadMasNorte= city;
 });
 return CiudadMasNorte.name;
}

exports.max_south = (cities) =>{
  let CiudadMasSur =cities[0];
  cities.forEach((cities)=>{
   let LatAux = cities.coord.lat;
   if ( LatAux < CiudadMasSur.coord.lat)
   CiudadMasSur= city;
  });
  return CiudadMasSur.name;
 }

exports.gravity_center = (cities) =>{
  let TotalCiudades = cities.length;
  let InicialAcumulador=0;
  let SumaLongitud =cities.reduce((SumaAcumuladaLong, city) =>{
    let longitud =cities.coord.lon;
    return SumaAcumuladaLong =+ longitud ;
  }, InicialAcumulador);
  let SumaLatitud =cities.reduce((SumaAcumuladaLat, city) =>{
    let latitud =cities.coord.lat;
    return SumaAcumuladaLat =+ latitud ;
  }, InicialAcumulador);
  
  let MediaLong = SumaAcumuladaLong/TotalCiudades;
  let MediaLat= SumaAcumuladaLat/TotalCiudades;

  return {
  lat : MediaLat,
  lon : MediaLong
  };

};

exports.closets_GC=(cities)=>{


}