import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  id = 21
  constructor(public http: HttpClient) { }

  url = ""
  getAllBooks(){
    this.url = "https://bookcart.azurewebsites.net/api/Book/" + this.id
    return this.http.get<any>(this.url)
  }
  getSimilarBooks(){
this.url=  "https://bookcart.azurewebsites.net/api/Book/GetSimilarBooks/" + this.id
return this.http.get<any>(this.url)
  }
}
