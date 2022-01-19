import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { OrderEvent } from './app.events';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('order_placed')
  async handleOrderPlaced(order: OrderEvent) {
    await this.appService.handleOrderPlaced(order);
  }
}
