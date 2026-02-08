import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
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
    stock: number;

    @IsOptional()
    @IsString()
    imageUrl?: string;
}