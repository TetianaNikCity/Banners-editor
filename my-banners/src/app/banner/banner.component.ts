import { Component, OnInit } from '@angular/core';
import { Baner } from '../shared/baner.model'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  colors =  ['yellow', 'green', 'blue',  'orange', 'gray', 'purple', 'red', 'pink', 'teal', 'yellowgreen'];
  edit = false;
  baners: Baner[] = [
    new Baner(250, 175, 300, 150, 'yellow'),
  ]
  colorB: string;
  sizeH: number;
  sizeW: number;
  banerNumber: number;
  screenHeight: number = 500;
  screenWidth: number = 800;
  x: number;
  y: number;
  posX: number;
  posY: number;

  constructor() { }

  ngOnInit() {
  }
  
  editBaner(id: number){
    this.edit = true;
    this.banerNumber = id;
  }
  
  addBaner(){
    this.x = (this.screenWidth-300)/2;
    this.y = (this.screenHeight-150)/2;
    this.baners.push(new  Baner(this.x, this.y, 300, 150, 'yellow'));
    this.edit = false;    
  }

  deleteBaner(id: number){
    this.edit = !this.edit;
    this.baners.splice(id,1);
  }
  
}
