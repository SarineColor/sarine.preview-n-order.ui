import {Component, Output, EventEmitter} from '@angular/core';
import {StonesService} from "../services/StonesService";

@Component({
    selector: 'manual-stones-input',
    template: `<h2>Manual Input</h2>
        <div>
            <textarea [(ngModel)]="ids"></textarea>
            <button [disabled]="!ids" (click)="handleSubmitClick()">Search...</button>
        </div>`
})
export class ManualInputView {

  ids: string;

  @Output()
  onResult = new EventEmitter();

  constructor(
      private service:StonesService
  ) {}

  handleSubmitClick() {
      this.service.getStones( this.ids.split('\n') )
        .then( () => {
          this.onResult.emit(this.service.stones);
        })
        .catch( err => {
          console.log(err);
        });
  }
}
