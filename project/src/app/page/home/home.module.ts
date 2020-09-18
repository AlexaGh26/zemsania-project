import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    TableModule,
    ]
})
export class HomeModule { }
