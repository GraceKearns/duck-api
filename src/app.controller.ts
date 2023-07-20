import { Controller, Get, Header, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Duck')
@Controller('ducks')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('duck')
  async getHello(@Res() res: Response) {
    let data = await this.appService.getDuck() 
    res.set('Content-Type', 'image/jpeg');
    res.send(data);
  }
}
