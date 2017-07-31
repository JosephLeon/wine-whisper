import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// export class Wine {
//   id: number;
//   name: string;
//   price: number;
//   year: number;
//   rating: number;
//   company: string;
//   recommended: boolean;
// }

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {

  public wines_data;
  // wines = WINES
  // wineCount = this.wines.length
  title = 'Wines'
 
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}
 
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://localhost:3000/api/v1/wines').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.wines_data = data;
    });
  }

}
