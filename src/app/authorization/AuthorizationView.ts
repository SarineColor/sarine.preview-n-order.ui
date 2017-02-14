import {Component, Output, EventEmitter, OnInit} from "@angular/core";
import {UserService} from "../services/UserService";
@Component({
  selector: 'authorization-view',
  template: '<div>{{message}}</div>'
})
export class AuthorizationView implements OnInit {

  message = 'Please wait...';

  constructor(private userService:UserService) {}

  @Output()
  onSuccess = new EventEmitter();

  @Output()
  onFail = new EventEmitter();

  ngOnInit() {
    this.userService.getUser()
      .then( user => {
        this.message = 'Authorization Successful';
        this.onSuccess.emit(user);
      }, error => {
        this.message = 'Authorization Failed ';
        this.onFail.emit(error);
      })
  }
}
