import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  //template:`<h1></h1>`
})
export class AppComponent implements OnInit{
 
  title = 'TILpokemonApp';
  pokemons=POKEMONS;
  ngOnInit(): void {
   console.table(this.pokemons);
  }

  selectPokemon(event:MouseEvent){
    const index:number=+(event.target as HTMLInputElement).value;
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemons[index].name}`);
  }
}
 