import {Model} from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Product} from './schemas/product.schema';
import {CreateProductDto} from './dto/create-product';
import {UpdateProductDto} from './dto/Update-Product';

@Injectable()
export class ProductsService{
    constructor(
        @InjectModel(Product.name) private productModel:Model<Product>
    ){}

    async findAll():Promise<Product[]>{
        return this.productModel.find().lean()
    }

    
    async findOne(id: string): Promise<Product>{
        return this.productModel.findOne({_id:id}).lean()
    }

    async create(CreateProductDto: CreateProductDto):Promise<Product>{
        const createProduct=new this.productModel(CreateProductDto);
        return createProduct.save();
    }

    async update(id:string, UpdateProductDto:UpdateProductDto):Promise<Product>{
        return this.productModel.updateOne({_id:id},UpdateProductDto).lean()
    }

    async remove(id:string):Promise<Product>{
        return this.productModel.deleteOne({_id:id}).lean()
    }

}