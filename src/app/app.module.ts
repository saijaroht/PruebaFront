import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

///rutas
import{app_routing} from './app.routes'

///Servicios
import{HeroesService} from './services/heroes.service'
import{HttpClientModule} from '@angular/common/http'
//Componentes

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    app_routing

  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
