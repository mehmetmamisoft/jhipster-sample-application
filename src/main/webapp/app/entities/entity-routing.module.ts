import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        data: { pageTitle: 'shoppingApp.product.home.title' },
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
      },
      {
        path: 'customer',
        data: { pageTitle: 'shoppingApp.customer.home.title' },
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
      },
      {
        path: 'order',
        data: { pageTitle: 'shoppingApp.order.home.title' },
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
