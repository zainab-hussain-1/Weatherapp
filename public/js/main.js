const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitButton');
const city_name= document.getElementById('city_name');
const temp_status= document.getElementById('temp_status');

const temp_real_val= document.getElementById('temp_real_val');
const datahide= document.querySelector('.middle_layer');
const getInfo= async(event)=>{
    event.preventDefault();
let cityVal = cityName.value;
 if(cityVal==""){
city_name.innerText=`Please write name before search`;
datahide.classList.add('data_hide');
 } else{
    try{
        let url =  `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appId=e9ec62313b07f80e3f56dc98a77c012f`
        const response = await fetch(url);
        const data =  await response.json();
        const arrData=[data];

        city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
        temp_real_val.innerText=arrData[0].main.temp;
        // temp_status.innerText=arrData[0].weather[0].main;
         const tempMood = arrData[0].weather[0].main;
 

        // conditions
        if(tempMood == "Clear"){
            temp_status.innerHTML = 
            "<i class = 'fas fa-sun' style='color:#eccc68;'></i>";
        }
        else if(tempMood == "Clouds"){
            "<i class = 'fas fa-cloud' style='color:#f1f2f6;'></i>";
        }else if(tempMood == "Rain"){
             "<i class = 'fas fa-rain' style='color:#a4b0be;'></i>";
        } else{
            temp_status.innerHTML=
            "<i class = 'fas fa-cloud' style='color:#eccc68;'></i>";
        }
        datahide.classList.remove('data_hide');
    }catch{
        city_name.innerText=`Please write city name properly`;
        datahide.classList.add('data_hide');
    }
   
}
}
submitButton.addEventListener('click',getInfo);
// api.openweathermap.org/data/2.5/weather?q=Lahore&appid=
// e9ec62313b07f80e3f56dc98a77c012f