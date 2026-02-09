import { IsNumber, IsOptional, IsString, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @Type(() => Number)
    @IsNumber()
    @Min(0)
    price: number;

    @Type(() => Number)
    @IsNumber()
    @Min(0)
    oldPrice: number;

    @Type(() => Number)
    @IsNumber()
    @Min(0)
    @Max(100)
    discount: number;

    @Type(() => Number)
    @IsNumber()
    @Min(0)
    stock: number;

    @IsOptional()
    @IsString()
    imageUrl?: string;
}