import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
userId =445

  constructor(public http: HttpClient) { }

  url = ""
  getAllBooks(bookId :number){
    this.url = "https://bookcart.azurewebsites.net/api/Book/" + bookId
    return this.http.get<any>(this.url)
  }
  getSimilarBooks(bookId :number){
this.url=  "https://bookcart.azurewebsites.net/api/Book/GetSimilarBooks/" + bookId
return this.http.get<any>(this.url)
  }
addToCart(bookId :number){
this.url ="https://bookcart.azurewebsites.net/api/ShoppingCart/AddToCart/" + this.userId +"/"+ bookId
return this.http.post<any>(this.url, {})

}
getBooksFromWishlist(){
  this.url = "https://bookcart.azurewebsites.net/api/Wishlist/" + this.userId
  return this.http.get<any>(this.url)
}
addToWhisList(bookId :any){
  this.url = "https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/" + this.userId + "/" + bookId
  return this.http.post<any>(this.url,{},{headers:(new HttpHeaders().set(
    "Authorization","Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhamF5ZCIsInVzZXJpZCI6IjQ0NSIsInVzZXJUeXBlSWQiOiIyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiMiIsImp0aSI6IjExYTJmZjY5LWFjZTYtNGJlNi1iODdlLTdkNDYwNWVkOWMyMCIsImV4cCI6MTY0MjA4Njk1MSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjQvIn0.uWDi2PO8jIS2-_ro38dukDPS3y1PlEeabzkbKvB-7A8"
    
  ))})
}
}
