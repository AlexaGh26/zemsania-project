import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { CustomerService } from 'src/app/services/customerservice';
import { HttpClientModule, HttpHandler, ɵHttpInterceptingHandler } from '@angular/common/http';


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    TableModule,
    ButtonModule,
    ],
    providers: [
        CustomerService,
        HttpClientModule,
    ],
})
export class HomeModule { }
