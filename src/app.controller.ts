// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }


import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()  // Now, this controller will respond to /api/user
export class AppController {
  constructor(readonly appService: AppService) {}

  @Get()  // This defines the /data route under /user
  getHello(): string {
    return this.appService.getHello();
  }
}
