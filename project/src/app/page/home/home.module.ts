import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import { HttpClientModule, HttpHandler, ɵHttpInterceptingHandler } from '@angular/common/http';
import {ItemsModule} from '../../components/items/items.module'

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    ItemsModule,
    ],
    providers: [
        HttpClientModule,
    ],
})
export class HomeModule { }
