import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { items } from '../../models/items';
import { ItemsService } from '../../services/items.service'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: items[] =[];

  constructor(private itemsServices: ItemsService) { }

  ngOnInit(): void {
    this.getAll();
    console.log(this.items);
  }
  getAll() {
    this.itemsServices.getAll()
    .pipe(
      map( ({result}) => {
        result.items.map( (item)=> {
          let itemInfo: items = {
            _about:  item._about,
            accessURL: item.accessURL,
            title: item.title,
          }
          this.items.push(itemInfo);
        })       
      })
    ).subscribe()
  }
}
