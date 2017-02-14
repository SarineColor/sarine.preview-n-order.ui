import {Component, OnInit} from "@angular/core";
import {ProgramService} from "../services/ProgramService";
@Component({
  selector: 'validate-view',
  template: `
<div class="container">
  <div class="form-group">
    <label>Program</label>
    <select class="form-control">
        <option *ngFor="let program of programs">{{program.name}}</option>
    </select>
  </div>
  
  <div class="form-group">
    <label>Bundle</label>
    <select class="form-control">
        <option *ngFor="let bundle of bundles"></option>
    </select>
  </div>
  
  <div class="form-group">
    <label>Shipping Address</label>
    <select class="form-control">
        <option *ngFor="let address of addresses"></option>
    </select>
  </div>

  <div class="form-group">
    <label>Print Shop</label>
    <select class="form-control">
        <option *ngFor="let printShop of printShops"></option>
    </select>
  </div>
  
  <div class="form-group">
    <label>Priority</label>
    <select class="form-control">
        <option *ngFor="let priority of priorities"></option>
    </select>
  </div>
  
  <div class="form-group">
    <label>Batch ID</label>
    <input type="text" class="form-control" [(ngModel)]="batchId" />
  </div>
  
  <div class="form-group">
    <label>Comments</label>
    <textarea class="form-control" [(ngModel)]="comments"></textarea>
  </div>
</div>`
})
export class ValidateView implements OnInit {

  programs: any;

  constructor(
    private service: ProgramService
  ) {}

  ngOnInit(): void {
    this.service.getPrograms().then( (programs) => {
      this.programs = programs;
    });
  }

}
