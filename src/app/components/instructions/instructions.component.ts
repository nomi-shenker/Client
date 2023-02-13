import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
nameUser:string;
  constructor(public router:Router ) { }

  ngOnInit(): void {
    
  }
  openForm(){
   this.router.navigateByUrl('/user');
  }


}
