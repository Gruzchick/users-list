import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { SessionsController } from './sessions/sessions.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://admin:admin@template_mongo:27017/templatedb?authSource=admin',
    ),
  ],
  controllers: [UsersController, SessionsController],
  providers: [],
})
export class AppModule {}
