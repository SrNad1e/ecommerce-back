import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './schema/review.schema';
import { createReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
    constructor(@InjectModel(Review.name) private reviewModel: Model<Review>) { }

    async create(reviewData: createReviewDto): Promise<Review> {
        const createdReview = new this.reviewModel(reviewData);
        return createdReview.save();
    }


    async findByProductId(productId: string): Promise<Review[]> {
        return this.reviewModel.find({ productId }).exec();
    }


}
