import { BaseContent } from "src/public/models/basecontent.model";

export interface Article extends BaseContent {
    title: string;
    body: string;
    author: string;
}

export interface Product extends BaseContent {
    name: string;
    description: string;
    price: number;
    stock: number;
}