import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users:any;
  email:any;

  constructor(private service: UserRegistrationService) { }

  ngOnInit(): void {
    let response = this.service.getAllUsers();
    response.subscribe((data:any)=>this.users=data);
  }

  public deleteUser(user:number) {
      let response = this.service.deleteUser(user);
      response.subscribe((data:any) => this.users=data);
  }

  public findUserByEmailId() {
        let response = this.service.getUserByEmail(this.email);
        response.subscribe((data:any) => this.users=data);
    }

}
