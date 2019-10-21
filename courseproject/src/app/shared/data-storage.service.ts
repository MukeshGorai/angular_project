import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService{
    constructor(private http: HttpClient,
        private recipesSercice: RecipeService,
        private authService: AuthService){}
        recipes: Recipe[];  

    storeRecipes(){
      const token=  this.authService.getToken();
      return  this.http.put('https://udemy-ng-http-eff04.firebaseio.com/recipes.json?auth=' +token,this.recipesSercice.getRecipes());
    }
    getRecipe(){

    const token=  this.authService.getToken();
      
     this.http.get('https://udemy-ng-http-eff04.firebaseio.com/recipes.json?auth=' +token)
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