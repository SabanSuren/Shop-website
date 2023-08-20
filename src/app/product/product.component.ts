import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute,Params } from '@angular/router';



//declare let alertify:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  activatedRoute: any;

  constructor(private alertifyService: AlertifyService,private productService:ProductService,activatedRoute:ActivatedRoute) { }
  title = "Ürün Listesi"
  filterText: string = "";

  products: Product[] = [];




  ngOnInit() {
    
    this.activatedRoute.params.subscribe((params: Params) => {
        this.productService.getProducts(params["cadegoryId"]).subscribe(data => {
            this.products = data;
        });
    });
    

    

  
   

  }

  addToCart(product: Product) {
    this.alertifyService.success(product.name + " addet ")

  }



}
