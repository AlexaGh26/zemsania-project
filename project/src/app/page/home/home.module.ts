import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {TableComponentModule} from '../../components/table/table.module';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule, HttpHandler, ɵHttpInterceptingHandler } from '@angular/common/http';


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    ButtonModule,
    TableComponentModule,
    ],
    providers: [
        HttpClientModule,
    ],
})
export class HomeModule { }
