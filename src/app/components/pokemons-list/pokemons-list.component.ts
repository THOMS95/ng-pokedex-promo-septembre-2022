import { Component } from '@angular/core';
import { Pokemon } from 'src/app/typings/pokemon';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent {
  isButtonDisabled = true;
  currentPokemonName = 'bulbizarre';
  hasAddedAPokemon = false;

  pokemons: Pokemon[] = [
    {
      name: 'bulbizarre',
      level: 3,
      picture: "https://www.waouo.com/wp-content/uploads/2015/10/bulbizarre.png"
    },
    {
      name: 'carapuce',
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
    this.pokemons.push({
      name: this.currentPokemonName,
      level: 1,
      picture: "",
    });
  }

  onDeletePokemon(name: string, index: number) {
    console.log(`deleting pokemon ${name}`);
    this.pokemons.splice(index, 1);
  }
}

