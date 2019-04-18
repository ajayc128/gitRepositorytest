import { Injectable, Optional } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import {User} from '../user'




@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string='http://localhost:8080/api';
  //<--private headers = new HttpHeaders({'Content-Type':'application/json'});-->
  
  
  constructor(private serveHttpClientReq:HttpClient) { }

  getUsers(){
  return  this.serveHttpClientReq.request('GET', this.baseUrl+"/users", {responseType:'json'});
    
  }

  getUser(id:Number){
    return  this.serveHttpClientReq.request('GET', this.baseUrl+"/user", {responseType:'json'});
      
    }

    deleteUser(id:Number){
      return  this.serveHttpClientReq.request('DELETE', this.baseUrl+"/deleteUser", {responseType:'json'});
        
      }

   createUser(user:User){
    return  this.serveHttpClientReq.request('POST', this.baseUrl+"/createUser");
   }
   
   updateUser(user:User){
    return  this.serveHttpClientReq.request('PUT', this.baseUrl+"/updateUser");
   }




  

}
