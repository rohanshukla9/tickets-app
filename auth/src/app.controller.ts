import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/me')
  getUsers(): string {
    return this.appService.getUsers();
  }
}
