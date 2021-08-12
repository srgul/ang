import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/alertify.service';
import { CategoryService } from '../service/category.service';
import { Category } from './category';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService:CategoryService) {}
  title = 'Kategori Listesi';
  categories: Category[];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    })
  }
  
}
