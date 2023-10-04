import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }
  getUserData(){
    var url= "https://jsonplaceholder.typicode.com/users";
    return this.http.get(url)
  }

}
