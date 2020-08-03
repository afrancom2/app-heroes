import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};
  logoCasa: string;

  constructor( private activatedRoute: ActivatedRoute,
               private heroeService: HeroesService) {
    this.activatedRoute.params.subscribe(
      params => {
        this.heroe = this.heroeService.getHeroe(params['id']);
        if (this.heroe.casa === 'Marvel'){
          this.logoCasa = 'assets/img/marvel-logo.png';
        } else {
            this.logoCasa = 'assets/img/dc-logo.jpg';
        }
      }
    );
  }

  mostrarImg( casa: string ) {
    if (casa === 'Marvel'){
      this.logoCasa = 'assets/img/marvel-logo.png';
    } else {
        this.logoCasa = 'assets/img/dc-logo.jpg';
      }
  };
}