import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import Child from 'app/models/Child';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input()
emptyChild:Child;
@Output() 
updateChild = new EventEmitter();

  constructor(public router:Router, public userService:UserService) { }

  ngOnInit(): void {
    if(this.userService.emptyChildService)
     this.emptyChild=this.userService.emptyChildService;
  }
  
  saveDetails(){
    this.updateChild.emit(this.emptyChild);
    this.userService.emptyChildService=this.emptyChild;
    this.emptyChild=new Child();
  }
  
  BackToTheInstructions(){
    this.userService.emptyUserService.childrenUser.push(this.emptyChild);
    this.router.navigate(['/instructions']);
  }
}
