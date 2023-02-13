import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  @Input()
  pageDescription!: string;
}
