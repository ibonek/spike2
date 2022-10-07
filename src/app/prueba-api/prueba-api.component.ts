import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-api',
  templateUrl: './prueba-api.component.html',
  styleUrls: ['./prueba-api.component.css']
})
export class PruebaApiComponent implements OnInit {

  constructor() {}


  ngOnInit(): void {
    let inputVal = 'London';
    const apiKey = '4d8fb5b93d4af21d66a2948710284366';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
          const {main, name, sys, weather} = data;
          const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
              weather[0]["icon"]
          }.svg`;
          console.log(weather[0].description+" "+main.temp);
        });

  }

}
