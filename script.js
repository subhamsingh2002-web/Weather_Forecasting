let result=document.getElementById("result");
let searchBtn=document.getElementById("search-btn");
let cityref=document.getElementById("city");


function getWeather () {
    let cityVal=cityref.value;
    if(cityVal.length==0)
    {
        result.innerHTML=`<h3>Please Enter the city name</h3>`;
    }
    else
    {
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=35d0804cf62410bcdc03c7daa5fba51b&units=metric`;
     fetch(url)
     .then((resp)=>resp.json())
     .then((data)=>{
        console.log(data);
       // console.log(data.weather[0].icon);
       // console.log(data.coord.lat);
      //  console.log(data.coord.lon);
       // console.log(data.main.temp);
        result.innerHTML=`<h2>${data.name}</h2>
        <h4 class="weather"> ${data.weather[0].main} </h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176C</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}&#176C</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}&#176C</h4>
            </div>
        </div>  
        `;
        searchBtn.innerHTML="Clear";
        searchBtn.addEventListener("click",()=>{
            clearResult();
        })
     })

     .catch(()=>{
        result.innerHTML=`<h3>Oops city not found!!</h3>`
     })
}
}
searchBtn.addEventListener("click",()=>{
          getWeather(
            
          );
});

window.addEventListener("load", ()=>{
    getWeather();
});
function clearResult(){
    location.reload();
}