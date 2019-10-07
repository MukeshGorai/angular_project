import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService{
    constructor(private http: HttpClient,
        private recipesSercice: RecipeService){}
        recipes: Recipe[];  

    storeRecipes(){
      return  this.http.put('https://udemy-ng-http-eff04.firebaseio.com/recipes.json',this.recipesSercice.getRecipes());
    }
    getRecipe(){
     this.http.get('https://udemy-ng-http-eff04.firebaseio.com/recipes.json')
        // .subscribe(
        //   (response:Response)=>{
        //     const recipes: Recipe= response.json(); 
        //     this.recipesSercice.setRecipes(recipes);
        //  }
         .subscribe(
          (recipes: Recipe[])=>{
            this.recipes=recipes;
            this.recipesSercice.setRecipes(recipes);
          }
        );
       
    }
} 