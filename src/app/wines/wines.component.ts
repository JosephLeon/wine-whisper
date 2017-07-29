import { Component, OnInit } from '@angular/core';

export class Wine {
  id: number;
  name: string;
  price: number;
  year: number;
  rating: number;
  company: string;
  recommended: boolean;
}

const WINES: Wine[] = [
  { id: 11, name: 'Mr. Nice', price: 10.00, year: 2016, rating: 3, company: 'Filler', recommended: false},
  { id: 12, name: 'Narco', price: 10.00, year: 2016, rating: 3, company: 'Filler', recommended: false },
  { id: 13, name: 'Bombasto', price: 10.00, year: 2016, rating: 3, company: 'Filler', recommended: false },
  { id: 14, name: 'Celeritas', price: 10.00, year: 2016, rating: 3, company: 'Filler', recommended: false },
  { id: 15, name: 'Magneta', price: 10.00, year: 2016, rating: 3, company: 'Filler', recommended: false },
  { id: 16, name: 'RubberMan', price: 10.00, year: 2016, rating: 3, company: 'Filler', recommended: false },
  { id: 17, name: 'Dynama', price: 10.00, year: 2016, rating: 3, company: 'Filler', recommended: false },
  { id: 18, name: 'Dr IQ', price: 10.00, year: 2016, rating: 3, company: 'Filler', recommended: false },
  { id: 19, name: 'Magma', price: 10.00, year: 2016, rating: 3, company: 'Filler', recommended: false },
  { id: 20, name: 'Tornado', price: 10.00, year: 2016, rating: 3, company: 'Filler', recommended: false }
];

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {

  wines = WINES
  wineCount = this.wines.length
  title = 'Wines'

  constructor() { }

  ngOnInit() {
  }

}
