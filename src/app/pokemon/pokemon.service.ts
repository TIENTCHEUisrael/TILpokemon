import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError,of,tap } from 'rxjs';

@Injectable(
)
export class PokemonService {

  constructor(private http:HttpClient){}

    getPokemonList():Observable<Pokemon[]>{//Observable pour retourner une donnée qui arrivera dans le temps
      //return POKEMONS;
      return this.http.get<Pokemon[]>('api/pokemons').pipe(
        tap((pokemonList)=>this.log(pokemonList)),
        catchError((error)=>{ 
         return this.handleError(error,[]);
        })
      );
    }

    getPokemonById(pokemonId:number):Observable<Pokemon|undefined>{
     // return POKEMONS.find(pokemon => pokemon.id==pokemonId);
      return this.http.get<Pokemon>(`api/pokemon/${pokemonId}`).pipe(
        tap((pokemon)=>this.log(pokemon)),
        catchError((error)=>{
          return this.handleError(error,undefined);
        })
      );
    }

    private log(response:Pokemon|undefined|Pokemon[]){
      console.table(response);
    }

    private handleError(error:Error, errorValue:any){
      console.error(error);
      return of(errorValue);//Transforme une donnée simple en un flux de donnée (observable) qui emet la donnée en parametre
    }

    getPokemonTypeList():string[]{
      return [
        'Plante',
        'Feu',
        'Eau',
        'Insecte',
        'Normal',
        'Electrik',
        'Poison',
        'Fée',
        'Vol',
        'Combat',
        'Psy'
      ];
    }
}

