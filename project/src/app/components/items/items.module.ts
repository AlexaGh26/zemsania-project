import { NgModule } from '@angular/core';
import {ItemsComponent} from './items.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [ItemsComponent],
  exports: [ItemsComponent],
  imports: [
    TableModule,
    ],
    providers: [
    ],
})
export class ItemsModule { }
