import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Child from 'app/models/Child';
import { environment } from 'environments/environment';
import { BehaviorSubject } from 'rxjs';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  routeUrl=`${environment.baseUrl+"User/"}`;
  constructor(public http:HttpClient) { }
  nameUser="";
  private userNameSubject$:BehaviorSubject<string>= new BehaviorSubject("");
  public userName$= this.userNameSubject$.asObservable();
  emptyUserService:User;
  emptyChildService:Child;
  
setUserName(userName:string)
{
  this.userNameSubject$.next(userName);
}

getAllUsers(){
  return this.http.get<User>(`${this.routeUrl}`);
}
getUserById(id:number){
  return this.http.get<User>(`${this.routeUrl}/${id}`);
}
addUser(user:User){
  return this.http.post<User>(`${this.routeUrl}`,user).subscribe();
}
deleteUser(id:number){
  return this.http.delete<User>(`${this.routeUrl}/${id}`);
}
updateUser(id:number,user:User){
  return this.http.put<User>(`${this.getUserById(id)}`,user);
}




}
