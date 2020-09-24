import { NgModule } from '@angular/core';
import {ItemsComponent} from './items.component';
import {TableModule} from 'primeng/table';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';


@NgModule({
  declarations: [ItemsComponent],
  exports: [ItemsComponent],
  imports: [
    TableModule,
    BrowserModule,
    CommonModule,
    MenubarModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    
    ],
    providers: [
      MessageService,
    ],
})
export class ItemsModule { }
