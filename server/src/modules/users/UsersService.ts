import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from './User';
import { ReturnModelType, isDocument } from '@typegoose/typegoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async create(user): Promise<User> {
    return await this.userModel.create(user);
  }

  unsetPassword(user: User) {
    let plainUser = user;

    if (isDocument(user)) {
      plainUser = user.toJSON();
    }

    delete plainUser.password;

    return plainUser;
  }
}
