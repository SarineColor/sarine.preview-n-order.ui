import {Injectable} from "@angular/core";
import {API} from "../API/API";
@Injectable()
export class ProgramService {

  programs: Object[];

  constructor(
    private api: API
  ) {}

  getPrograms():Promise<Object[]> {
    if (this.programs) {
      return Promise.resolve(this.programs);
    }
    return new Promise( (resolve, reject) => {
      this.api.searchPrograms().then( raw => {
        this.programs = raw['results'];
        resolve(this.programs);
      }, reject );
    });
  }
}
