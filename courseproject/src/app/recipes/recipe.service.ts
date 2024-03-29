import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
 recipesChanged=new Subject<Recipe[]>();

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

setRecipes(recipes: Recipe[]){
  this.recipes=recipes;
  this.recipesChanged.next(this.recipes.slice());
}


      getRecipes(){
          return this.recipes.slice();
      }
getRecipe(index: number){
    return this.recipes[index];
}

      addIngredientsToShoppingList(ingredients: Ingredient[]){
this.slService.addIngredients(ingredients)
      }
      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index]= newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index:number){
          this.recipes.splice(index,1);
          this.recipesChanged.next(this.recipes.slice());
      }
} 