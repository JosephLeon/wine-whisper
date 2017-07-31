import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-wine',
  templateUrl: './add-wine.component.html',
  styleUrls: ['./add-wine.component.css']
})
export class AddWineComponent implements OnInit {

  constructor() { }

  clickMessage = '';
  onClickMe() {
    this.clickMessage = 'You are my hero!';
    console.log(this.clickMessage);
  }

  values = '';
  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }

  ngOnInit() {
  }

}
