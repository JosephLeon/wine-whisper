import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {

  public wine_data;
  public title;
  // public wines_data;
  // // wines = WINES
  // // wineCount = this.wines.length
  // title = 'Wines'
 
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}
 
  ngOnInit(): void {
    // const id = this.http.wine_id;
    // Make the HTTP request:
    // HttpClient get request with url value angular
    // console.log(window.location.pathname);

    // Get the wine_id from the URL
    var wine_id = window.location.pathname.match(/\d+/);

    this.http.get('http://localhost:3000/api/v1/wines/' + wine_id).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      // title = wine_data.name;
      this.wine_data = data;
    });
  }

}
