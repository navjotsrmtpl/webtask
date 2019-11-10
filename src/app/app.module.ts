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
import { HomePageComponent } from './home-page/home-page.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';


@NgModule({
  declarations: [AppComponent,
    HomePageComponent,PageOneComponent,PageTwoComponent,PageThreeComponent,PageFourComponent
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
  bootstrap: [AppComponent,HomePageComponent,PageOneComponent,PageTwoComponent,PageThreeComponent,PageFourComponent
],
schemas: [
  CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule {}
