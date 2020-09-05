import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  //region class-validator
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  //endregion
  email: string;

  // region class-validator
  @IsNotEmpty()
  @IsString()
  //endregion
  password: string;
}
