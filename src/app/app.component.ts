import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { BorderCardDirective } from './border-card.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //template:`<h1></h1>`
})
export class AppComponent implements OnInit{
 
  title = 'TILpokemonApp';
  pokemons=POKEMONS;
  pokemonSelected:Pokemon|undefined;

  ngOnInit(): void {
   console.table(this.pokemons);
  }

  selectedPokemon(event:MouseEvent){
    const index:number=+(event.target as HTMLInputElement).value;
    console.log(`Vous avez cliqué sur le pokemon ${this.pokemons[index].name}`);
  }
  selectPokemon(mypokemon:Pokemon){
    //const id=+pokemonId;
  //Pour regler l'erreur survenant lors de la mauvaise entré des informations sur le input 
    const pokemon:Pokemon|undefined=this.pokemons.find(pokemon=>pokemon.id==+mypokemon.id);
    //console.log(`Vous avez cliqué sur le pokemon ${th is.pokemons[id].name}`);
    if(pokemon){
      console.log(`Vous avez demandez le pokemon ${pokemon.name}`);
      this.pokemonSelected=pokemon;
    }else{
      console.log(`Vous avez demandé un pokemon qui n'existe pas.`);
      this.pokemonSelected=pokemon;
    }
  }
}
 