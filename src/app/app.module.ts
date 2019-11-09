import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuOnePageModule } from './menu-one/menu-one.module';
import { MenuTwoPageModule } from './menu-two/menu-two.module';
import { MenuThreePageModule } from './menu-three/menu-three.module';
import { MenuFourPageModule } from './menu-four/menu-four.module';

@NgModule({
  declarations: [AppComponent,

  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    MenuOnePageModule,
    MenuTwoPageModule,
    MenuThreePageModule,
    MenuFourPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent,    
],
schemas: [
  CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule {}
