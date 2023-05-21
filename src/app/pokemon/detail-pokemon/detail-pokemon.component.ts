import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit{
  pokemonList:Pokemon[];
  pokemon:Pokemon|undefined;

  constructor(private route:ActivatedRoute,private router:Router){}//Acceder a la route courante et router pour acceder aux router d'angular

  ngOnInit(): void {
    this.pokemonList=POKEMONS;// On attribut la liste predefini a pokemonList
    const pokemonId:number=+this.route.snapshot.paramMap.get('id')!; //On recupere le parametre id de la barre de nav de la route courante
    if(pokemonId){
      //Si il y a une valeur trouvé
      this.pokemon=this.pokemonList.find(pokemon=> pokemon.id==pokemonId);//On attribut a pokemon le pokemon a l'Id trouvé
    }
  }
  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }
}
