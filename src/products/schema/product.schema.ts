import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, min: 0 })
  price: number;

  @Prop({ required: true, min: 0 })
  oldPrice: number;

  @Prop({ required: true, min: 0, max: 100 })
  discount: number;

  @Prop({ required: true, min: 0 })
  stock: number;

  @Prop()
  imageUrl?: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);