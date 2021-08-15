import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-form2',
  templateUrl: './product-add-form2.component.html',
  styleUrls: ['./product-add-form2.component.css']
})
export class ProductAddForm2Component implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  productAddForm:FormGroup;
  product: Product = new Product;

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name : ["", Validators.required],
      desc : ["", Validators.required],
      imageUrl : ["", Validators.required],
      price : ["", Validators.required],
      categoryId : ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.createProductAddForm();
    console.log(this.productAddForm)


  }

  add() {
    if(this.productAddForm.valid) {
      this.product = Object.assign({},this.productAddForm.value)
    }
  }

}
