import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Input() placeholder: string = '';

  @Output() onValueChange = new EventEmitter<string>();

  onEnter(value: string) {
    value = value.trim();
    if (value.length === 0) return;
    this.onValueChange.emit(value);
  }
}
