import { Controller, Param, Get, Post, Delete, Body, Put } from "@nestjs/common";
import { ProductsService } from "./products.service";
import {Product} from './Interfaces/product';
import { CreateProductDto } from './dto/create-product';
import { UpdateProductDto } from './dto/update-product';


@Controller('products')
export class ProductsController{

        constructor(private productsService:ProductsService){}

        @Get()
        findAll(): Promise<Product[]>{
            return this.productsService.findAll();
        }

        @Get(':id')
        findOne(@Param('id') id:string): Promise<Product>{
            return this.productsService.findOne(id);
        }

        @Post()
        Create(@Body() CreateProductDto: CreateProductDto): Promise<Product>{
            return this.productsService.create(CreateProductDto)
        }

        @Put()
        Update(  @Param('id') id:string,
                 @Body() UpdateProductDto: UpdateProductDto): Promise<Product>{
            return this.productsService.update(id, UpdateProductDto)
        }

}
