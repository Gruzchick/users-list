import { Module } from '@nestjs/common';
import { getDBConnectionURI } from './utils/getDBConnectionURI';
import { config } from './config';
import { TypegooseModule } from 'nestjs-typegoose';
import { UsersModule } from './modules/users/UsersModule';

@Module({
  imports: [
    TypegooseModule.forRoot(getDBConnectionURI(config), {
      useNewUrlParser: true,
    }),
    UsersModule,
  ],
  providers: [],
})
export class AppModule {}
