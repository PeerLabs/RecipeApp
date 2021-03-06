import { Recipe } from './model/recipe.model'
import { Injectable } from '@angular/core';
import { Ingredient } from '../common/model/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe("Classic", "The Classic Burger", 
        "https://www.maxpixel.net/static/photo/640/Burger-Cheeseburger-Hamburger-Dinner-Lunch-576419.jpg",
        [
            new Ingredient("Beef patty", 1), 
            new Ingredient('Lettuce', 1),
            new Ingredient('Tomato', 1),
            new Ingredient('Brioche Buns', 1)
        ]),
        new Recipe("Pounder", 
        "The Ultimate Burger!", 
        "https://scontent.cdninstagram.com/vp/10a13bf5ff042533cb34b921e5f5d8ef/5CCDEFFD/t51.2885-15/e15/s640x640/47175484_2237639783179658_6280093565424735403_n.jpg?_nc_ht=scontent.cdninstagram.com",
        [
            new Ingredient("Beef patty", 2), 
            new Ingredient('Lettuce', 1),
            new Ingredient('Tomato', 1),
            new Ingredient('Brioche Buns', 1),
            new Ingredient('Cheese', 1),
            new Ingredient('Pickle', 1),
            new Ingredient('Onion', 1)
        ])
      ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}