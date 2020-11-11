import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() public label: string;
  @Input() public placeholder?: string;
  @Input() public options: string[];
  @Input() public disabled?: boolean;
  @Input() public selected?: string[];
  @Output() public onSelect = new EventEmitter();

  @ViewChild('allSelected') private allSelected: MatOption;
  @ViewChild('select') private select: MatSelect;

  constructor() { }

  public toggleAllSelection(): void {
    this.onSelect.emit(['all']);
    this.select.close();
  }

  public togglePerOne(selectedAll: string): void {
    this.onSelect.emit(this.selected.filter(option => option !== selectedAll));
  }
}
