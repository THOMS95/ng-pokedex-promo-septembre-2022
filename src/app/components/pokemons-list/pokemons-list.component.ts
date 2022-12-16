import { Component, ViewEncapsulation } from '@angular/core';
import { Pokemon, PokemonSex } from 'src/app/typings/pokemon';



@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent {
  isButtonDisabled = true;
  currentPokemonName = 'bulbizarre';
  currentPokemonPicture?: string;
  currentPokemonSex: PokemonSex = 'male';
  hasAddedAPokemon = false;

  pokemons: Pokemon[] = [
    {
      name: 'bulbizarre',
      picture: 'https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/764px-Dracaufeu-RFVF.png?20141019190201',
      sex: 'male',
      level: 3,
      picture: "https://www.waouo.com/wp-content/uploads/2015/10/bulbizarre.png"
    },
    {
      name: 'carapuce',
      sex: 'female',
      picture: 'https://www.pokepedia.fr/images/thumb/1/1f/Galeking-RS.png/596px-Galeking-RS.png?20161226235218',
      level: 2,
      picture: "https://www.pngplay.com/wp-content/uploads/12/Squirtle-Pokemon-Clip-Art-Transparent-File.png"
    },
  ];

  constructor() {
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 2000);
  }

  onAddPokemonBtnClick() {
    this.hasAddedAPokemon = true;
    console.log(this.currentPokemonSex);
    this.pokemons.push({
      name: this.currentPokemonName,
      level: 1
    });
  }

  onDeletePokemon(name: string, index: number) {
    console.log(`deleting pokemon ${name}`);
    this.pokemons.splice(index, 1);
  }
}

