import { Component, OnInit } from '@angular/core';
import {Cadegory} from "./cadegory";
import { CategoryService } from '../services/category.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit{

  constructor( private categoryService :CategoryService,alertifyService:AlertifyService){}
  title="Kategori Listesi"
  categories:Cadegory[]=[];

  ngOnInit(){
    this.categoryService.getCategories().subscribe(data=>{this.categories=data});

  }

}
