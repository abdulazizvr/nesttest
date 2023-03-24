import { Injectable } from "@nestjs/common";
import { InjectModel} from 'nestjs-typegoose';
import { Model } from "mongoose";
import { AuthDto } from "./dto/auth.dto";
import { UserModel } from "./user.model";
import {genSaltSync,hashSync} from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(UserModel) private readonly userModel: Model<UserModel>
    ) { }
    async createUser(dto:AuthDto){
        const salt = genSaltSync(10)
        const newUser = new this.userModel({
            username:dto.username,
            passwordHash:hashSync(dto.password,salt),
            email:dto.login
        })
        return newUser.save()
    }

    async findUser(email:string){
        return this.userModel.findOne({email})
    }
}