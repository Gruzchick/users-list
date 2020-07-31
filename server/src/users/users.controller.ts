import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUserDto';
import * as bcrypt from 'bcryptjs-then';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    // try {
    //   const { email, password } = createUserDto;
    //
    //   const hashedPassword = await bcrypt.hash(password);
    //   const user = { email, password: hashedPassword };
    //
    //   const newUser = await UserModel.create(user);
    //
    //   const userWithoutPassword = UserService.unsetPassword(newUser);
    //
    //   return res.responses.json(userWithoutPassword);
    // } catch (err) {
    //   return next(err instanceof Error ? err : new VError(err));
    // }
  }

  @Get(':userId')
  getUser() {}
}
