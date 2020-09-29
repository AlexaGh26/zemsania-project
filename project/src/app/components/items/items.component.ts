import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { pipe, Subscription } from 'rxjs';
import { items } from '../../models/items';
import { ItemsService } from '../../services/items.service'
import { map } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';
import { MenuItem } from 'primeng/api';
import { FormBuilder, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, OnDestroy {


  items: items[] = [];
  suscribeGetAll: Subscription;
  cols: any[];
  itemsMenu: MenuItem[];
  displaySaveDialog: boolean = false;
  displayEditDialog: boolean = false;
  displayDeleteDialog: boolean = false;
  editSelectd: boolean;
  textDialog = '';
  selectedItems: items = {
    _about: null,
    accessURL: null,
    title: null,
    id: null,
  }
  itemModel: items = {
    _about: null,
    accessURL: null,
    title: null,
    id: null,
  }
  varForm: FormGroup
  MessageEditOk: Message[];


  constructor(private itemsServices: ItemsService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAll();
    this.cols = [
      { field: "_about", header: "_about" },
      { field: "accessURL", header: "accessURL" },
      { field: "title", header: "title" },
    ]

    this.itemsMenu = [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        command: () => this.showDialog(false)
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        command: () => this.showDialog(true),
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-times',
        command: () => this.displayDeleteDialog = true,
      }
    ]

    this.varForm = this.formBuilder.group({
      _about: ['', Validators.required],
      accessURL: ['', Validators.required],
      title: ['', Validators.required],
    })

    this.MessageEditOk = [
      { severity: 'success', summary: 'Success', detail: 'has been successfully modified' },
      { severity: 'info', summary: 'Info', detail: 'Message Content' },
    ];
  }
  getAll() {
    this.suscribeGetAll = this.itemsServices.getAll()
      .pipe(
        map(({ result }) => {
          let items: items[] = []
           result.items.map((item, index) => {
            let bodyItem: items = {
              _about: item._about,
              accessURL: item.accessURL,
              title: item.title,
              id: index,
            }
            items.push(bodyItem);
          })
          this.items = items;
        })
      ).subscribe()
  }

  ngOnDestroy() {
    this.suscribeGetAll.unsubscribe()
  }

  showDialog(edit: boolean) {
    if (edit) {
      this.itemModel = {
        _about: this.selectedItems._about,
        accessURL: this.selectedItems.accessURL,
        title: this.selectedItems.title,
        id: this.selectedItems.id,
      };
      this.textDialog = 'Edit Item';
      this.editSelectd = true;
    } else {
      this.textDialog = 'New Item';
      this.itemModel = {
        _about: null,
        accessURL: null,
        title: null,
        id: null,
      }
      this.editSelectd = false;

    }
    this.displaySaveDialog = true;
  }

  saveItem(item: items) {
    console.log('se ha modificado');
  }

  saveInfo(infoForm: items) {
    const infoFormId = {
      _about: infoForm._about,
      accessURL: infoForm.accessURL,
      title: infoForm.title,
      id: this.items.length + 1,
    }
    if (!this.editSelectd) {
      this.items = [...this.items, infoFormId]
    }
    this.displaySaveDialog = false;
  }

  saveEditInfo(infoForm: items) {
    const infoFormId = {
      _about: infoForm._about,
      accessURL: infoForm.accessURL,
      title: infoForm.title,
      id: this.selectedItems.id,
    }
    if (this.editSelectd) {
      this.items.filter((item, index) => {
        if (item.id === this.selectedItems.id) {
          this.items.splice(index , 1, infoFormId)
        }
      })
      this.saveItem(this.itemModel)
    }
    this.displayEditDialog = false;
  }

  deleteItem() {
    this.items.filter((item, index) =>{
      if (item.id === this.selectedItems.id ) {
        this.items.splice(index , 1)
      }
    })
    this.displayDeleteDialog = false;
  }

}
