import { Body, Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { createReviewDto } from './dto/create-review.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() reviewData: createReviewDto) {
        return this.reviewsService.create(reviewData);
    }

    @Get('product/:id')
    async findByProductId(@Param('id') productId: string) {
        return this.reviewsService.findByProductId(productId);
    }

}
