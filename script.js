const inputBox= document.getElementById("inputBox");
const countryName= document.getElementById("countryName");
const stateName= document.getElementById("stateName");
const cityName= document.getElementById("cityName");
const humidity= document.getElementById("humidity");
const windSpeed=document.getElementById("windSpeed");
const temprature=document.getElementById("temprature");
const weatherStatus=document.getElementById("weatherStatus");
const logoImage=document.getElementById("logoImage");

const getData =  async (event) =>{
  event.preventDefault();
  if(!inputBox.value) {
    alert("Please Enter The City : ");
    return;
  }

  const city = inputBox.value;

  //fetch details
  const fetchData= await fetch(
    `api.weatherapi.com/v1/current.json?key=ee7d242ea1324c029ec115525232302&q=${city}`
  );

  const orgData = await fetchData.json();
  data=orgData;
  console.log(data);

  countryName.innerHTML=data.location.country;
  stateName.innerHTML=data.location.region;
  cityName.innerHTML=data.location.name;
  humidity.innerHTML=data.current.humidity;
  windSpeed.innerHTML=data.current.wind_kph;
  temprature.innerHTML=data.current.temp_c;
  weatherStatus.innerHTML=data.current.condition.text;
  logoImage.src=data.current.condition.icon;




}


  
