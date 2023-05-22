import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
        tap((pokemon)=>this.log(pokemon)),
        catchError((error)=>{
          return this.handleError(error,undefined);
        })
      );
    }

    searchPokemonList(term:string):Observable<Pokemon[]>{

      if(term.length<=1){
        return of([]);
      }
      return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
        tap((response)=>this.log(response)),
        catchError((error)=>{
          return this.handleError(error,[]);
        })
      );
    }

    updatePokemon(pokemon:Pokemon):Observable<Pokemon|undefined>{
      const httpOption={
        headers:new HttpHeaders(
          {
            'Content-Types':'application/json'
          }
        )
      };
      return this.http.put('api/pokemons',pokemon,httpOption).pipe(
        tap((response)=>this.log(response)),
        catchError((error)=>{
          return this.handleError(error,undefined);
        })
      );
    }
    
    deletePokemonById(pokemonId:number):Observable<any>{
      return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
        tap((response)=>this.log(response)),
        catchError((error)=>this.handleError(error,null))
      );
    }

    addPokemon(pokemon:Pokemon):Observable<Pokemon>{
      const httpOption={
        headers:new HttpHeaders(
          {
            'Content-Types':'application/json'
          }
        )
      };
      return this.http.post<Pokemon>('api/pokemons',pokemon,httpOption).pipe(
        tap((response)=>this.log(response)),
        catchError((error)=>this.handleError(error,null))
      );
    }

    private log(response:any){
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

