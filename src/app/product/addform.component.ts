import { Component , Input, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({//decorator
    selector: 'add-product',//selector
    templateUrl: './addform.component.html',
    styleUrls: ['./addform.component.css']

})
export class AddFormComponent{
    @Output() onAddNewProduct : EventEmitter<any> = new EventEmitter();
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;

    constructor(){}

    addNewProduct(){
        this.onAddNewProduct.emit({
            productName: this.productName,
            productCode: this.productCode,
            releaseDate: this.releaseDate,
            description: this.description,
            price: this.price,
            starRating: this.starRating,
            imageUrl: this.imageUrl
        })
        this.productName="";
        this.productCode="";
        this.releaseDate="";
        this.description="",
        this.imageUrl="",
        this.price=0,
        this.starRating=0



        
    }
}