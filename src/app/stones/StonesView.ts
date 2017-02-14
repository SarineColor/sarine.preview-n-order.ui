import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {StonesService} from "../services/StonesService";
@Component({
  selector: 'stones-view',
  template: `<div class="container">
<div class="row">
  <div class="btn btn-default" (click)="handleCancelClick()">Cancel</div>
  <div class="btn btn-primary pull-right" (click)="handleConfirmClick()">Continue</div>
</div>
<div class="row">
  <table class="table table-striped" [mfData]="service.stones" #mf="mfDataTable">
  <thead>
    <th>ID</th>
    <th>Stock ID</th>
    <th>Shape</th>
    <th>Carat</th>
  </thead>
  <tbody>
    <tr *ngFor="let item of mf.data">
      <td>{{item.friendlyName}}</td>
      <td>{{item.userInput.stockId}}</td>
      <td>{{item.userInput.shape}}</td>
      <td>{{item.userInput.carat}}</td>
    </tr>
  </tbody>
  </table>
</div>
<div class="row">
  <div class="btn btn-default" (click)="handleCancelClick()">Cancel</div>
  <div class="btn btn-primary pull-right" (click)="handleConfirmClick()">Continue</div>
</div>
</div>`
  }
)
export class StonesView implements OnInit {

  @Output()
  onCancel = new EventEmitter();

  @Output()
  onConfirm = new EventEmitter();

  constructor(
    private service: StonesService
  ) {}

  handleConfirmClick() {
    this.onConfirm.emit();
  }

  handleCancelClick() {
    this.service.clear();
    this.onCancel.emit();
  }

  ngOnInit() {

  }
}
