const weatherCodes = {
	"0":{
		"day":{
			"description":"Sunny",
			"image":"http://openweathermap.org/img/wn/01d@2x.png"
		},
		"night":{
			"description":"Clear",
			"image":"http://openweathermap.org/img/wn/01n@2x.png"
		}
	},
	"1":{
		"day":{
			"description":"Mainly Sunny",
			"image":"http://openweathermap.org/img/wn/01d@2x.png"
		},
		"night":{
			"description":"Mainly Clear",
			"image":"http://openweathermap.org/img/wn/01n@2x.png"
		}
	},
	"2":{
		"day":{
			"description":"Partly Cloudy",
			"image":"http://openweathermap.org/img/wn/02d@2x.png"
		},
		"night":{
			"description":"Partly Cloudy",
			"image":"http://openweathermap.org/img/wn/02n@2x.png"
		}
	},
	"3":{
		"day":{
			"description":"Cloudy",
			"image":"http://openweathermap.org/img/wn/03d@2x.png"
		},
		"night":{
			"description":"Cloudy",
			"image":"http://openweathermap.org/img/wn/03n@2x.png"
		}
	},
	"45":{
		"day":{
			"description":"Foggy",
			"image":"http://openweathermap.org/img/wn/50d@2x.png"
		},
		"night":{
			"description":"Foggy",
			"image":"http://openweathermap.org/img/wn/50n@2x.png"
		}
	},
	"48":{
		"day":{
			"description":"Rime Fog",
			"image":"http://openweathermap.org/img/wn/50d@2x.png"
		},
		"night":{
			"description":"Rime Fog",
			"image":"http://openweathermap.org/img/wn/50n@2x.png"
		}
	},
	"51":{
		"day":{
			"description":"Light Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Light Drizzle",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"53":{
		"day":{
			"description":"Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Drizzle",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"55":{
		"day":{
			"description":"Heavy Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Heavy Drizzle",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"56":{
		"day":{
			"description":"Light Freezing Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Light Freezing Drizzle",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"57":{
		"day":{
			"description":"Freezing Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Freezing Drizzle",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"61":{
		"day":{
			"description":"Light Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Light Rain",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"63":{
		"day":{
			"description":"Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Rain",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"65":{
		"day":{
			"description":"Heavy Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Heavy Rain",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"66":{
		"day":{
			"description":"Light Freezing Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Light Freezing Rain",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"67":{
		"day":{
			"description":"Freezing Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Freezing Rain",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"71":{
		"day":{
			"description":"Light Snow",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Light Snow",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"73":{
		"day":{
			"description":"Snow",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Snow",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"75":{
		"day":{
			"description":"Heavy Snow",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Heavy Snow",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"77":{
		"day":{
			"description":"Snow Grains",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Snow Grains",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"80":{
		"day":{
			"description":"Light Showers",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Light Showers",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"81":{
		"day":{
			"description":"Showers",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Showers",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"82":{
		"day":{
			"description":"Heavy Showers",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Heavy Showers",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"85":{
		"day":{
			"description":"Light Snow Showers",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Light Snow Showers",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"86":{
		"day":{
			"description":"Snow Showers",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Snow Showers",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"95":{
		"day":{
			"description":"Thunderstorm",
			"image":"http://openweathermap.org/img/wn/11d@2x.png"
		},
		"night":{
			"description":"Thunderstorm",
			"image":"http://openweathermap.org/img/wn/11n@2x.png"
		}
	},
	"96":{
		"day":{
			"description":"Light Thunderstorms With Hail",
			"image":"http://openweathermap.org/img/wn/11d@2x.png"
		},
		"night":{
			"description":"Light Thunderstorms With Hail",
			"image":"http://openweathermap.org/img/wn/11n@2x.png"
		}
	},
	"99":{
		"day":{
			"description":"Thunderstorm With Hail",
			"image":"http://openweathermap.org/img/wn/11d@2x.png"
		},
		"night":{
			"description":"Thunderstorm With Hail",
			"image":"http://openweathermap.org/img/wn/11n@2x.png"
		}
	}
}

const daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

const today = new Date()
const todayInt = today.getDay()
const hours = today.getHours();
const bodyElement = document.querySelector("body");
const mainElement = document.querySelector("main");
const searchLocationElement = document.querySelector(".search-location");
const searchBtn = document.querySelector(".search-btn");
const weatherContainerElement = document.querySelector(".weather-container")




//obtain IP location from user and show weather for this location
async function ipLocation(){
	let apiUrl = "https://api.geoapify.com/v1/ipinfo?&apiKey=d82573c1dc7b462eabac5ac9bce19a09"

	try{
		const response = await fetch(apiUrl);
		const result = await response.json()
		let location = searchLocationElement.value = result["city"]["name"];
		return location
	}catch(error){
		console.error(error)
	};
};

async function initialise(){
	const userLocation = await ipLocation();
	const geoLocation = await obtainGeolocation(userLocation);
	const dailyData = await fetchDailyWeatherData(geoLocation)
	const initHourlyData = await hourlyData();
	const initDrawCards= await drawCards(dailyData);
};

initialise()

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
    console.error("logging", error)
  };
};

async function fetchDailyWeatherData(coordinates){
  let latitude = coordinates[0];
  let longitude = coordinates[1];

  let apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`

  const response = await fetch(apiUrl);
  const weatherData = await response.json();
 
  return weatherData
};

async function fetchHourlyWeatherData(coordinates){
	let latitude = coordinates[0];
  let longitude = coordinates[1];
	let apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,precipitation,weather_code`
	
	const response = await fetch(apiUrl);
  const hourlyData = await response.json();
	console.log(hourlyData)
	return hourlyData
}

async function hourlyData(){
	let searchLocation = searchLocationElement.value;
  const coordinates = await obtainGeolocation(searchLocation);
	const hourlyData = await fetchHourlyWeatherData(coordinates);
	drawHourlyCards(hourlyData)
}

function setBackground(weathercode){
	if(weathercode <= 1){
		bodyElement.setAttribute("style", "background-image: url('./img/sunny.webp')")
	}else if(weathercode <=3){
		bodyElement.setAttribute("style", "background-image: url('./img/cloudy.webp')")
	}else if(weathercode <70){
		bodyElement.setAttribute("style", "background-image: url('./img/rain.jpeg')")
	}else if(weathercode <80){
		bodyElement.setAttribute("style", "background-image: url('./img/snow.jpeg')")
	}else{
		bodyElement.setAttribute("style", "background-image: url('./img/storm.jpeg')")
	};
};

function drawHourlyCards(hourlyData){

	let weathercodeArray = hourlyData["hourly"]["weather_code"];
  let tempArray = hourlyData["hourly"]["temperature_2m"];
  let precipitationArray = hourlyData["hourly"]["precipitation"];
	let precipitationProbabilityArray = hourlyData["hourly"]["precipitation_probability"];

	setBackground(weathercodeArray[0]);

	let todayContainer = document.createElement("div");
	todayContainer.setAttribute("class", "today-container")

	for(let i = 0; i <= 9; i+=3){
		let hourlyDiv = document.createElement("div")
		hourlyDiv.setAttribute("class", `hourly hourly${i}`);

		let hourlyWeathercodeDiv = document.createElement("div");
		hourlyWeathercodeDiv.setAttribute("class", `hourly-weathercode`);
		let imageURL = weatherCodes[weathercodeArray[i]]["day"]["image"];
    hourlyWeathercodeDiv.setAttribute("style", `background-image: url("${imageURL}")`);

		let hourlyTempDiv = document.createElement("div");
		hourlyTempDiv.setAttribute("class", "hourly-temp");
		hourlyTempDiv.textContent = `${Math.round(Number(tempArray[i]))}°`;

		let hourlyPrecipitation = document.createElement("div");
		hourlyPrecipitation.setAttribute("class", "hourly-precipitation")
		hourlyPrecipitation.textContent = `${precipitationArray[i]} mm`;

		let hourlyProbability = document.createElement("div");
		hourlyProbability.setAttribute("class", "hourly-probability")
		hourlyProbability.textContent = `${precipitationProbabilityArray[i]}%`

		let dayTimeDiv = document.createElement("div")
		dayTimeDiv.setAttribute("class", "day-time")

		let time = hours;
	
		if (i != 0){
			time + i < 24 ? time : time += i - 24
		};
		dayTimeDiv.textContent = `${time}:00`;

		hourlyDiv.appendChild(hourlyWeathercodeDiv)
		hourlyDiv.appendChild(hourlyTempDiv)
		hourlyDiv.appendChild(hourlyPrecipitation)
		hourlyDiv.appendChild(hourlyProbability)
		hourlyDiv.appendChild(dayTimeDiv)

		todayContainer.appendChild(hourlyDiv)
	};
	weatherContainerElement.appendChild(todayContainer);
};

searchBtn.addEventListener("click", async() =>{

	weatherContainerElement.replaceChildren()

  let searchLocation = searchLocationElement.value;
  const coordinates = await  obtainGeolocation(searchLocation);
  const weatherData = await fetchDailyWeatherData(coordinates); 
  const generateHourly = await hourlyData();
	const generateCards = drawCards(weatherData);
});

function drawCards(weatherData){
  
  let weathercodeArray = weatherData["daily"]["weather_code"];
  let maxTempArray = weatherData["daily"]["temperature_2m_max"];
  let minTempArray = weatherData["daily"]["temperature_2m_min"];
  //let dateArray = weatherData["daily"]["time"];
	
	//rest of the week container
	let weeklyDiv = document.createElement("div");
	weeklyDiv.setAttribute("class", "rest-of-week");
	
  //make cards for five days
  for(let i = 0; i < 5; i++){
    let dayDiv = document.createElement("div")
    dayDiv.setAttribute("class", `day day${i}`)
    weeklyDiv.appendChild(dayDiv);

    let weathercodeDiv = document.createElement("div");
    weathercodeDiv.setAttribute("class", "weathercode");
    let imageURL = weatherCodes[weathercodeArray[i]]["day"]["image"];
    weathercodeDiv.setAttribute("style", `background-image: url("${imageURL}")`);

		let tempDiv = document.createElement("div")
		tempDiv.setAttribute("class", "temp");

    let maxTempDiv = document.createElement("div");
    maxTempDiv.setAttribute("class","max-temp");
    maxTempDiv.textContent = `${Math.round(Number(maxTempArray[i]))}°`;

    let minTempDiv = document.createElement("div");
    minTempDiv.setAttribute("class","min-temp");
    minTempDiv.textContent = `${Math.round(Number(minTempArray[i]))}°`;

		tempDiv.appendChild(minTempDiv);
		tempDiv.appendChild(maxTempDiv);
		

    let dateDiv = document.createElement("div");
    dateDiv.setAttribute("class","date");

		todayInt + i > 6  ? dateDiv.textContent = daysOfTheWeek[todayInt+i-7] : dateDiv.textContent = daysOfTheWeek[todayInt+i];

    dayDiv.appendChild(weathercodeDiv);
    dayDiv.appendChild(tempDiv);
    dayDiv.appendChild(dateDiv);
  };
	weatherContainerElement.appendChild(weeklyDiv)
};


bodyElement.addEventListener("keyup", async(event) =>{

	if(event.code === "Enter"){
		weatherContainerElement.replaceChildren()

		let searchLocation = searchLocationElement.value;
		const coordinates = await  obtainGeolocation(searchLocation);
		const weatherData = await fetchDailyWeatherData(coordinates); 
		const generateHourly = await hourlyData();
		const generateCards = drawCards(weatherData);
	}
});

searchLocationElement.addEventListener("click", () =>{
		searchLocationElement.focus();
		searchLocationElement.select();
});