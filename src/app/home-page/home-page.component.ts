import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  menuID:any
  constructor(private events:Events) { 

    this.events.subscribe('menuID',menuId =>{
      this.menuID = menuId;
    })
  }

  ngOnInit() {}

  menuOne(){
      this.events.publish('menuID',1)
  }
  menuTwo(){
    this.events.publish('menuID',2)
  }
  menuThree(){
    this.events.publish('menuID',3)
  }
  menuFour(){
    this.events.publish('menuID',4)
  }

}
