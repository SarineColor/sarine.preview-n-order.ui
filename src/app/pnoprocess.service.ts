import {Injectable, ApplicationRef} from '@angular/core';

@Injectable()
export class PNOProcessService {

  AUTH = 'auth';
  CREATE = 'create';
  LIST = 'list';
  VALIDATE = 'validate';
  ORDER = 'order';

  currentState: string = '';
  requestedStonesIds: string[];

  constructor(private appRef:ApplicationRef) {
    window['initialize'] = (ids) => {
      this.requestedStonesIds = ids;
      this.setState(this.AUTH);
      delete window['initialize'];
    }
  }

  getState():string {
    return this.currentState;
  }

  setState(value:string):void {
    this.currentState = value;
    this.afterStateChange();
  }

  afterStateChange() {
    this.appRef.tick();
  }



}
