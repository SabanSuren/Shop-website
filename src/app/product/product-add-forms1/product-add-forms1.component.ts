import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CategoryService } from 'src/app/services/category.service';
import { Cadegory } from 'src/app/category/cadegory';
import { NgForOfContext } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers:[CategoryService]
})
export class ProductAddForms1Component implements OnInit{

  constructor(private categoryService:CategoryService){}
  model : Product= new Product();

  categories:Cadegory[]=[];

  ngOnInit(){
    this.categoryService.getCategories().subscribe(data=>{this.categories=data});

  }
  add(form:NgForm){

  }

}
