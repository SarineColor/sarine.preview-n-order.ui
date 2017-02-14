import {Injectable} from "@angular/core";
import {environment} from '../../environments/environment';
import {Http, RequestOptionsArgs, Headers, RequestOptions, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {CookieManager} from "../services/CookieManager";

@Injectable()
export class API {

  private ENDPOINT: string;
  private AUTH_ENDPOINT: string;
  private STONES_ENDPOINT: string;

  constructor(private http: Http, private cookieManagaer: CookieManager) {
    this.ENDPOINT = environment.serverEndpoint;
    this.AUTH_ENDPOINT = environment.authEndpoint;
    this.STONES_ENDPOINT = environment.stonesEndpoint;
  }

  authorize():Promise<Response> {
    return this.http.get(this.AUTH_ENDPOINT + 'account/userData', { withCredentials: true }).toPromise();
  }

  get(url: string, options?: RequestOptionsArgs):Promise<Response> {
    return this.http.get(this.ENDPOINT + url, options || { withCredentials: true }).toPromise();
  }

  searchPrograms() {
    return new Promise( (resolve, reject) => {
      this.http.post(this.ENDPOINT, {
        Paging: { Size: 500, From: 0 },
        Sorting: null
      }, {
        withCredentials: true,
        headers: this.generateHeaders()
      }).toPromise()
        .then( response => {
          resolve(response.json());
        }, reject);
    })
  }

  searchStones(ids:string[]) {
    return new Promise( (resolve, reject) => {
      this.http.post(this.STONES_ENDPOINT + '/simple/', {
        Request: ids.join(' '),
        DateRange: null,
        Paging: {
          Size: 500,
          From: 0
        },
        Sorting: null
      }, {
        withCredentials: true,
        headers: this.generateHeaders()
      })
        .toPromise()
        .then( (response) => {
          resolve(response.json());
        }, reject);
    });
  }

  private generateHeaders() {
    let headers = new Headers();
    headers.append('ACCESS_TOKEN', this.getToken());
    return headers;
  }

  private getToken() {
    return this.cookieManagaer.getCookie('ACCESS_TOKEN');
  }

}
