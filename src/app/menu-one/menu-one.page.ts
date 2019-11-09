import { Component, OnInit, Output,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-menu-one',
  templateUrl: './menu-one.page.html',
  styleUrls: ['./menu-one.page.scss'],
})
export class MenuOnePage implements OnInit {

  @Output() SendMessage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  menuOne(){
    // this.SendMessage.emit;
    alert("vndfj")
  }

}
