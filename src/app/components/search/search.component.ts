import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor() {}
  enteredSearchValue: string = '';

  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange() {
    this.searchTextChange.emit(this.enteredSearchValue);
  }

  ngOnInit(): void {}
}
