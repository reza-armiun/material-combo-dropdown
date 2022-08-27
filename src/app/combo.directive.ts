import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appCombo]'
})
export class ComboDirective {

  constructor(public template: TemplateRef<any>) { }

}
