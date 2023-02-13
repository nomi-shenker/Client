import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';
import User from 'app/models/User';
import { UserService } from 'app/services/user.service';
import { Gender } from 'app/Enum/gender';
import Child from 'app/models/Child';

@Component({
  selector: 'app-user',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
data:any[]=[];
emptyUser:User=new User();
gender:string;
nameUser:string;
isRegistered:boolean=false;

  constructor(public router:Router,public userService:UserService,public activatedRoute:ActivatedRoute,private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
   if(this.userService.emptyUserService)
     this.emptyUser=this.userService.emptyUserService;

  }
  
  saveDetails(){
    if(this.gender==Gender.Male.toString())
      this.emptyUser.egender=Gender.Male;
    else
      this.emptyUser.egender=Gender.Female;
    this.isRegistered=true;
    this.userService.addUser(this.emptyUser);
    this.userService.emptyUserService=new User();
  }

  addChild(){
    if(this.emptyUser.childrenUser)
      this.emptyUser.childrenUser.push(new Child());
  }

  saveChild(event)
  {
    this.emptyUser.childrenUser.push(event);
  }

  end(){
    alert("התהליך הסתיים בהצלחה!!");
  }
  
  setPersonalMessage(){
    if(this.emptyUser.FirstName&&this.emptyUser.LastName)
    this.userService.setUserName(`${this.emptyUser.FirstName}  ${this.emptyUser.LastName}`);
  }
  
  openInstructions(){
    this.userService.emptyUserService=this.emptyUser;
    this.router.navigate(['/instructions']);
  }
  
  generateExcel(){
    // this.data.push(this.emptyUser);
    // this.data.push(this.emptyUser.childrenUser);
    // const worksheet=XLSX.utils.json_to_sheet(this.data);
    // const workbook:any ={sheets:{data:worksheet},sheetNames:['data']};
    // XLSX.writeFile(workbook ,'data.xlsx');
  }
}
