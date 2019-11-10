import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  data = 'HomePage';

  constructor() { }

  ngOnInit() {}

  menuOne(){
    // this.router.navigateByUrl('/menu-one')
    if(this.data=='menuOne'){
        console.log("sdf");
        
    }
  }
  menuTwo(){

  }
  menuThree(){

  }
  menuFour(){

  }

}
