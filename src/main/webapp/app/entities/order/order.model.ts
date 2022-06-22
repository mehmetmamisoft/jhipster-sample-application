import { ICustomer } from 'app/entities/customer/customer.model';

export interface IOrder {
  id?: number;
  code?: string;
  customer?: ICustomer | null;
}

export class Order implements IOrder {
  constructor(public id?: number, public code?: string, public customer?: ICustomer | null) {}
}

export function getOrderIdentifier(order: IOrder): number | undefined {
  return order.id;
}
