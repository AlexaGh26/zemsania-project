import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {TableComponent} from './table.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    ],
    providers: [
        HttpClientModule,
    ],
})
export class TableModule { }