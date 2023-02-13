import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userService:UserService, public router:Router) { }
  nameUser:string;
  ngOnInit(): void {
    this.userService.userName$.subscribe((succ)=>{
      this.nameUser=succ;
    })
  }
  openForm(){
    this.router.navigate(['/user']);
  }
}
