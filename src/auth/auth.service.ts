import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }
    async register(userDto: CreateUserDto) {
        const existing = await this.usersService.findByEmail(userDto.email);
        if (existing) {
            throw new BadRequestException('User already exists');
        }

        const hashedPassword = await bcrypt.hash(userDto.password, 10);
        const user = await this.usersService.create({ ...userDto, password: hashedPassword });
        return this.createToken(user._id.toString(), user.email);
    }

    async validateUser(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException('Credenciales invalidas');
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw new UnauthorizedException('Credenciales invalidas');
        }

        return user;
    }

    async login(email: string, password: string) {
        const user = await this.validateUser(email, password);
        return this.createToken(user._id.toString(), user.email);
    }

    private createToken(userId: string, email: string) {
        const payload = { sub: userId, email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}

