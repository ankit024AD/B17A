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
    "Authorization","Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhamF5ZCIsInVzZXJpZCI6IjQ0NSIsInVzZXJUeXBlSWQiOiIyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiMiIsImp0aSI6Ijg1YjMyYTM3LWFmMGUtNGU3NS04NjgxLTg4NDA3MTQyMjQ2MSIsImV4cCI6MTY0MjI1Mzc2NywiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjQvIn0.9BZIxfkdnEBaMC5lBMgl8z-xWQMiba5zj9C06qQCRcI"
    
  ))})
}
}
