import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-form',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  providers: [UserServiceService],
  standalone: true
})
export class UserFormComponent {
  formBuilder = inject(FormBuilder);
  fieldBackground: string = '';
  fieldValue = new FormControl('',Validators.required );
  users: any = [];
  router = inject(ActivatedRoute);
  // userForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl(''),
  // }); 
  userForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['']
  })

  constructor(private userService: UserServiceService) { 

  }

  ngOnInit() {
    console.log("router",this.router);
    const id = this.router.snapshot.paramMap.get('id');
    console.log("id",id);
    
    // this.users = this.userService.getUserInfo();
  }
  

  onSubmit() {
    console.log("form valus", this.userForm.value);
    
    // this.users.push(this.fieldValue);
    // this.fieldValue = '';
  }
}
