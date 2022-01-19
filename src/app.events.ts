class Order {
  readonly items: string[];
}

class DeliverOrderDto extends Order {
  readonly customerAddress: string;
  readonly deliverNow: boolean;
}

class PickupOrderDto extends Order {
  readonly branch: string;
}

export class OrderEvent {
  constructor(public readonly order: DeliverOrderDto | PickupOrderDto) {}
}
