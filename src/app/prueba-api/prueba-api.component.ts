import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-api',
  templateUrl: './prueba-api.component.html',
  styleUrls: ['./prueba-api.component.css']
})
export class PruebaApiComponent implements OnInit {

  constructor() {}


  ngOnInit(): void {
      let inputVal = 'Madrid' ;
    const apiWeatherKey = '4d8fb5b93d4af21d66a2948710284366';
    const apiTicketKey = '0F9NRxxNHHARWvlAgkokiKrKFYVqEqM8';
    let contador = 0;
    let urlTicket = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiTicketKey}&locale=*&size=6&page=${contador}&sort=relevance,desc&city=${inputVal}`;
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiWeatherKey}&units=metric`;
    const apiKeyNews = 'xeaMVB4JfFWsDkVF1vOJ6fufgxX-6iU0QTX9sgDGx4WZLme3';
    const urlCurrents = 'https://api.currentsapi.services/v1/search?'+'keywords=Castellon&language=es&'+'apiKey='+apiKeyNews;
    const reqCurrents = new Request(urlCurrents);


    const apiKeyTicket = '0F9NRxxNHHARWvlAgkokiKrKFYVqEqM8';



    fetch(urlTicket)
        .then(response => response.json())
        .then(data=> {
            const{_embedded} = data;
            console.log("Funciona TicketMaster");
            console.log(_embedded.events[0].name);
        });

    fetch(urlWeather)
        .then(response => response.json())
        .then(data => {
          const {main, coord, name} = data;
          console.log("Funciona OpenWeather: ");

          console.log("En "+name+" ( "+ coord.lon+", "+ coord.lat+" ) hacen "+main.temp+"ºC");
        });

    fetch(reqCurrents)
        .then(response => response.json())
        .then(data => {
            const{news,status} = data;
          console.log("Funciona Currents: "+status);

          for (let i = 0; i < 10; i++) {
            console.log(news[i].title);
          }

        });

    fetch(urlTicket)
        .then(response => response.json())
        .then(data => {
            const {_embedded}=data;
            console.log(_embedded.events[0].name);
        })
      contador++;
      urlTicket=`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiTicketKey}&locale=*&size=6&page=${contador}&sort=relevance,desc&city=${inputVal}`;
      fetch(urlTicket)
          .then(response => response.json())
          .then(data => {
              const {_embedded}=data;
              console.log(_embedded.events[0].name);
          })
  }

}
