import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss']
})

export class HomePageComponent {
  products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 19.99 },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: 29.99 },
    { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', price: 39.99 },
  ];

  cartItems = [
    { id: 1, name: 'Producto 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Producto 2', price: 29.99, quantity: 1 },
  ];

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }
}