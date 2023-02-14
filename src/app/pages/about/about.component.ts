import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public isNeeded = false;
  public hotels: any[]=[{
    "name":"Hotel Paris",
    "place":"London",
    "price":12000
  },
{
    "name":"Lavender",
    "place":"Australia",
    "price":25000 
},
{
  "name":"Hotel Rhythm",
    "place":"Italy",
    "price":18000
}]

  constructor(){

  }

  tableview(){
    this.isNeeded = true;
  }
}