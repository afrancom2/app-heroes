import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params["termino"];
      this.heroes = this.heroesService.buscarHeroes(params["termino"]);
      console.log(this.heroes);
    });
  }
}
