import { Controller, Delete, Post, Put } from '@nestjs/common';

@Controller('sessions')
export class SessionsController {
  @Post()
  createSession() {}

  @Put()
  updateSession() {}

  @Delete()
  deleteSession() {}

  @Delete()
  deleteOtherSessions() {}
}
