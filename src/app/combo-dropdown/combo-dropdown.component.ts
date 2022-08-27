import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {ComboDirective} from "../combo.directive";

@Component({
  selector: 'app-combo-dropdown',
  templateUrl: './combo-dropdown.component.html',
  styleUrls: ['./combo-dropdown.component.css']
})
export class ComboDropdownComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
  @ContentChildren(ComboDirective) combos!: QueryList<ComboDirective>;

  ngOnInit() {
    console.log('combos : ', this.combos);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
