const mainElement = document.querySelector("main");
const searchLocationElement = document.querySelector(".search-location");
const searchBtn = document.querySelector(".search-btn");


async function obtainGeolocation(string){

  let apiUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${string}`

  try{
    const response = await fetch(apiUrl);
    const location = await response.json();    
    const longitude = location.results[0]['longitude'];
    
    const latitude = location.results[0]['latitude'];
    const coordinates = [latitude, longitude]
    
    return coordinates
  }catch(error){
    console.log("logging", error)
  }
};

async function fetchWeatherData(coordinates){
  let latitude = coordinates[0];
  let longitude = coordinates[1];

  let apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`

  const response = await fetch(apiUrl);
  const weatherData = await response.json();

  return weatherData
}

searchBtn.addEventListener("click", async() =>{
  let searchLocation = searchLocationElement.value;
  const coordinates = await  obtainGeolocation(searchLocation)
  const weatherData = await fetchWeatherData(coordinates)
  console.log("weatherData", weatherData)
});


//make cards for five days
for(let i = 0; i < 5; i++){
  let newDiv = document.createElement("div")
  newDiv.setAttribute("class", `day${i}`)
  newDiv.textContent = `test${i}`;
  mainElement.appendChild(newDiv)
}

//async await voorbeeld
/*
function makeRequest(location){
  return new Promise((resolve, reject) =>{
    console.log(`making request to ${location}`);
    if(location == "Google"){
      resolve("Google says hi")
    }else{
      reject("We can only talk to google")
    } 
  })
};

function processRequest(response){
  return new Promise((resolve,reject) =>{
    console.log("processing request");
    resolve(`Extra information + ${response}`)
  })
};







//This is the same as below

// makeRequest("Facebook").then(response =>{
//   console.log("response has been received")
//   return processRequest(response)
// }).then(processedResponse =>{
//   console.log(processedResponse)
// }).catch(err => {
//    console.log(err)
//  });


//This is the same as above

//  async function doWork(){
//   try{
//     const response = await makeRequest("facebook") // wait until finished and then continue
//     console.log("response received");
//     const processedResponse = await processRequest(response)
//     console.log(processedResponse)
//   }catch(error){
//     console.log(error)
//   }
//  }

//  doWork()

*/