import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../app/domain/customers';
import { CustomerService } from '../../services/customerservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    customers: Customer[];

    first = 0;

    rows = 10;

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.getCustomersLarge().then(customers => this.customers = customers);
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    isLastPage(): boolean {
        return this.customers ? this.first === (this.customers.length - this.rows): true;
    }

    isFirstPage(): boolean {
        return this.customers ? this.first === 0 : true;
    }

}
