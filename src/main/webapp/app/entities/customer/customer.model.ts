import { IOrder } from 'app/entities/order/order.model';

export interface ICustomer {
  id?: number;
  code?: string;
  firstName?: string;
  lastName?: string;
  orders?: IOrder[] | null;
}

export class Customer implements ICustomer {
  constructor(
    public id?: number,
    public code?: string,
    public firstName?: string,
    public lastName?: string,
    public orders?: IOrder[] | null
  ) {}
}

export function getCustomerIdentifier(customer: ICustomer): number | undefined {
  return customer.id;
}
