import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/CreateUserDTO';
import * as bcrypt from 'bcryptjs-then';
import { UsersService } from './UsersService';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDTO) {
    const { email, password } = createUserDto;

    const hashedPassword = await bcrypt.hash(password);

    const user = { email, password: hashedPassword };

    const newUser = await this.usersService.create(user);

    return this.usersService.unsetPassword(newUser);
  }

  @Get(':userId')
  getUser() {
    // const { user } = req;
    //
    // if (String(user._id) === req.params.userId) {
    //   const userWithoutPassword = usersService.unsetPassword(user);
    //
    //   return res.responses.json(userWithoutPassword);
    // }
    // return res.responses.accessDenied('');
  }
}
