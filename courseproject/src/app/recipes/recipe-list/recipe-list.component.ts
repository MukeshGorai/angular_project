import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe('A Test Recipe','This is simly a test','https://cdn-image.realsimple.com/sites/default/files/styles/rs_medium_image/public/1554827484/neapolitan-pizza-0519foo.jpg?itok=0nsG01If&1554827902'),
    new Recipe('Another Test Recipe','This is simly a test','https://cdn-image.realsimple.com/sites/default/files/styles/rs_medium_image/public/1554827484/neapolitan-pizza-0519foo.jpg?itok=0nsG01If&1554827902')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  } 
}
