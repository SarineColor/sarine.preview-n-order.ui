import {Injectable} from "@angular/core";
import {API} from "../API/API";
@Injectable()
export class StonesService {

  stones: Object[];

  constructor(private api:API) {}

  getStones(ids:string[]) {
    return this.api.searchStones(ids)
      .then(data => {
        this.stones = data['results'];
        return data;
      })
  }

  clear() {
    this.stones = null;
  }
}
