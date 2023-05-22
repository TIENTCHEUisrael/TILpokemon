import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
//Stimulation d'une Api fictive avec pour base de donnée POKEMONS
 createDb(){
  const pokemons=POKEMONS;
  return {pokemons};
 }
}
