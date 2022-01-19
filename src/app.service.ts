import { Injectable } from '@nestjs/common';
import { OrderEvent } from './app.events';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async handleOrderPlaced(order: OrderEvent) {
    if ('branch' in order.order) {
      console.log(`New Order: ${order.order.items}, ${order.order.branch}`);
    } else if ('customerAddress' in order.order) {
      console.log(
        `New Order: ${order.order.items}, ${order.order.customerAddress}, ${order.order.deliverNow}`,
      );
    } else {
      // TODO: throw error
      console.log('throw err');
    }
  }
}
