import { Component, OnInit } from '@angular/core';
import{HeroesService} from '../../services/heroes.service'
// import{PaisesService} from '../../services/Paises.service'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes : any []=[];


  constructor(private _heroesService:HeroesService) {

   
     console.log("constructor")
   }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes)
    // this.paises=this._paisesService.getPaises();
    // console.log(this.paises)



  }

}
