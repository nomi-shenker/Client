import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { UserComponent } from './components/user/user.component';
import { InstructionsComponent } from './components/instructions/instructions.component';

const routes: Routes = [
  {path:"user",component:UserComponent},
  {path:"child",component:ChildComponent},
  {path:"instructions",component:InstructionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
