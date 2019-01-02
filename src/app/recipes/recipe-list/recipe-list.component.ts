import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../model/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("test 1", "This is the first test recipe", "https://www.maxpixel.net/static/photo/640/Burger-Cheeseburger-Hamburger-Dinner-Lunch-576419.jpg"),
    new Recipe("Pounder", "The ultimate burger!", "https://www.maxpixel.net/static/photo/640/Burger-Cheeseburger-Hamburger-Dinner-Lunch-576419.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
