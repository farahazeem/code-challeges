import { Component, Input } from '@angular/core';
import { User } from '../../../shared/interfaces/User';
import { Product } from '../../../shared/interfaces/Product';

@Component({
  selector: 'list-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() headers: any = {};
  @Input() items: any[] = [];
  @Input() typeOfItems: string = '';

  isObject(val: any): boolean {
    return typeof val !== 'object';
  }
  objectToString(object: any): string {
    return JSON.stringify(object);
  }
}
