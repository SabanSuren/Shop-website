import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[],filterText?:string): Product[]  {
      //@ts-ignore
    filterText = filterText?filterText.toLocaleLowerCase():null 
       //@ts-ignore
    return filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf( filterText)!==-1):value;
  }

}
  
  





  

