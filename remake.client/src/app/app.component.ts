import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
    this.http.get('https://localhost:7089/api/users').subscribe({
      next: (response) => {
        this.users = response;
          console.log('Users:', response)
        },
      error: (error) => console.log('Error fetching users', error),
      complete: () => console.log('Request completed'),
      
    });
  }


  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'webshop';
}
