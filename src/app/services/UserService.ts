import {Injectable} from "@angular/core";
import {API} from "../API/API";
@Injectable()
export class UserService {

  private _user: Object;

  constructor(
    private api:API
  ) {}

  getUser() {
    if (this._user) {
      return Promise.resolve(this._user);
    } else {
      return new Promise( (resolve, reject) => {
        this.api.authorize().then( response => {
          this._user = response.json();
          resolve(this._user);
        })
        .catch( error => {
          this._user = null;
          reject(error);
        });
      });
    }
  }




}
