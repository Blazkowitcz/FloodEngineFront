import { Category } from "../category/category.model";
export class Subcategory {
    _id?: String;
    name?: String;
    slug?: String;
    icon?: String;
    category!: Category
}