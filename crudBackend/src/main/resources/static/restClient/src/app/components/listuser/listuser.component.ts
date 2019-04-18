import { Component, OnInit } from '@angular/core';
import { UserService} from '../../shared_service/user.service';
import { User} from '../../user';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
private users:User[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users)=>{
      console.log(users);
      
      this.users=<any>users;
    },(error)=>{
      console.log(error);
    })
  }

  deleteUser(user){
      this.userService.deleteUser(user.id).subscribe((users)=>{
        this.users.splice(this.users.indexOf(user),1);
      },(error)=>{
         console.log(error); 
      })
  }

}
