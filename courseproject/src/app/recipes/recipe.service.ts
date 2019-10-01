import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
  private  recipes: Recipe[]=[
        new Recipe('Testy Scnitzel',
        'A super-testy Schnitzel - just awesome!',
        'https://cdn-image.realsimple.com/sites/default/files/styles/rs_medium_image/public/1554827484/neapolitan-pizza-0519foo.jpg?itok=0nsG01If&1554827902',
        [
            new Ingredient('Meat',1),
            new Ingredient('French fries',20)
        ]),
        new Recipe('Big Fat Burger',
        'What else you need to say?',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSio-Ns9_Z84qgeRPH8nds5_jgjsltxASQbSXfBCc4MELtSlxsi',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ])
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }
getRecipe(index: number){
    return this.recipes[index];
}

      addIngredientsToShoppingList(ingredients: Ingredient[]){
this.slService.addIngredients(ingredients)
      }
} 