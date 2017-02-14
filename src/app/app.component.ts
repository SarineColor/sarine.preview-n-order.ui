import { Component, OnInit } from '@angular/core';
import {PNOProcessService} from "./pnoprocess.service";

@Component({
  selector: 'app-root',
  template: `
<div>
  <h1>Preview & Order</h1>
  <div>
    <authorization-view *ngIf="processService.getState() === 'auth'"
                        (onSuccess)="handleAuthorizationSuccessful($event)"
                        (onFail)="handleAuthorizationFailed($event)"></authorization-view>
                        
    <manual-stones-input *ngIf="processService.getState() === 'create'"
                        (onResult)="handleStonesLoaded()"></manual-stones-input>
                        
    <stones-view *ngIf="processService.getState() === 'list'"
                  (onCancel)="handleStonesCleared()"
                  (onConfirm)="handleStonesConfirmed()"></stones-view>
                  
    <validate-view *ngIf="processService.getState() === 'validate'"></validate-view>
  </div>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  processService: PNOProcessService;

  constructor( processService:PNOProcessService ) {
    this.processService = processService;
  }

  handleAuthorizationSuccessful(details:Object) {
    this.processService.setState( this.processService.CREATE );
  }

  handleAuthorizationFailed(error:Object) {

  }

  handleStonesLoaded() {
    this.processService.setState( this.processService.LIST );
  }

  handleStonesCleared() {
    this.processService.setState( this.processService.CREATE );
  }

  handleStonesConfirmed() {
    this.processService.setState( this.processService.VALIDATE );
  }

  ngOnInit() {
    if (typeof window['initialize'] === 'function')
      setTimeout( () => {
        window['initialize']();
      }, 0)
  }

}
