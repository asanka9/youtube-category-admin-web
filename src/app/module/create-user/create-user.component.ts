import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  validity = false;

  constructor(private authentication:AuthenticationService) { }

  ngOnInit(): void {
  }

  async createUser(email:string,password:string){
    await this.authentication.signup(email,password);
  }

  async createAdmin(){

  }

}
