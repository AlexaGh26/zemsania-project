import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { pipe, Subscription } from 'rxjs';
import { items } from '../../models/items';
import { ItemsService } from '../../services/items.service'
import { map } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';
import {MenuItem} from 'primeng/api';
import { NumberValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, OnDestroy {

  items: items[] =[];
  suscribeGetAll: Subscription;
  cols : any[];
  itemsMenu: MenuItem[];
  displaySaveDialog: boolean = false;
  itemModel : items = { 
    _about: null,
    accessURL: null,
    title: null,
  }

  showSaveDialog() {
    this.displaySaveDialog = true;
  }

  save(){
    console.log('llamado button');
  }

  constructor(private itemsServices: ItemsService) { }

  ngOnInit(): void {
    this.getAll();
    console.log(this.items);
    this.cols = [
      {field: "_about", header: "_about"},
      {field: "accessURL", header: "accessURL"},
      {field: "title", header: "title"},
    ]
    this.itemsMenu = [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        command: () => this.showSaveDialog(),
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-times',
      }
    ]
  }
  getAll() {
    this.suscribeGetAll = this.itemsServices.getAll()
    .pipe(
      map( async ({result}) => {
        let items: items[] = []
        await result.items.map( (item)=> {
          let bodyItem: items = {
            _about:  item._about,
            accessURL: item.accessURL,
            title: item.title,
          }
          items.push(bodyItem);
        })  
        this.items = items;   
      })
    ).subscribe()
  }
  ngOnDestroy(){
    this.suscribeGetAll.unsubscribe()
  }
}
