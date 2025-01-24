import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  providers: [UserServiceService ]
})
export class UserListComponent {
    userService = inject(UserServiceService);
    users: any = [];


    async ngOnInit() {
      await this.userService.getUser().subscribe({ next: (response) => {
        console.log("response",response);
        this.users = response;
      }, error: (error) => {
        console.log("Error in API", error);
      } });
      // console.log("response a",this.response);
      
    }

    createUser() {
      console.log("createUser trigger");
      
      this.userService.createUser({
        "name":"Test",
        "id":"12"
      }).subscribe(({ error: (error) => { console.log("error", error); } }));
    }
}
