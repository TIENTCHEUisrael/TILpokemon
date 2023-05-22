import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  @Input()pokemon:Pokemon;
  types:string[];

  constructor(
    private pokemonService:PokemonService,
    private router:Router
    ){}
  ngOnInit(): void {
    this.types=this.pokemonService.getPokemonTypeList();
  }

  hasType(type:string):boolean{//Va servir a savoir quelles est le type que le pokemon utilise.
    return this.pokemon.types.includes(type);//Esce que dans ses types il a le type passé en parametre.
  }

  selectType($event:Event,type:string){//Qu'esce qui a eté cocher et esce que c'est coché ou pas
    const isChecked:boolean=($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.pokemon.types.push(type);//Ajoute le type dans le tableau de type du pokemon
    }else{
      const index=this.pokemon.types.indexOf(type); //Trouvé l'index du type
      this.pokemon.types.splice(index,1);//On retire le type a l'index selectionné
    }
  }
  onSubmit(){
    this.pokemonService.updatePokemon(this.pokemon).subscribe(
      ()=>this.router.navigate(['/pokemon',this.pokemon.id])
    );
  }

  isTypesValid(type:string):boolean{
    if(this.pokemon.types.length==1 && this.hasType(type)){ //Si l'utilisateur a cocher une seule page on l'empeche de decocher cette page
      return false;
    }

    if(this.pokemon.types.length>2 && !this.hasType(type)){//Si l'utilisateur a deja selectionné trois cages on l'empeche d'en selectionné une autre et de deselectionné plus d'un
      return false;
    }
    return true;
  }
}
