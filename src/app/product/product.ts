import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { AlertifyService } from "../services/alertify.service";
import { ProductService } from "../services/product.service";


export class Product{
    id:number;
    name:string;
    price:number;
    cadegoryId:number;
    description:string;
    imageUrl:string;

    constructor(id:number, name:string, price:number, cadegoryId:number, description:string, imageUrl:string) {
      // ...
    
    
        this.id = id;
        this.name = name;
        this.price=price;
        this.cadegoryId=cadegoryId;
        this.description=description;
        this.imageUrl=imageUrl;
        

    }
}

//declare let alertify:any;



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  activatedRoute: any;

  constructor(private alertifyService: AlertifyService, private productService: ProductService, activatedRoute: ActivatedRoute) { }
  title = "Ürün Listesi";
  filterText: string = "";

  products: Product[]=[]




  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.productService.getProducts(params["cadegoryId"]).subscribe(data => {
          this.products = data;
      });
  });
  

    




  }

  addToCart(product: Product) {
    this.alertifyService.success(product.name + " addet ");

  }



}
