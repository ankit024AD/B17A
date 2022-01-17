import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookdetailComponent implements OnInit {
public bookId: number = {} as number
public isPresentInWishlist : boolean = false
public bookDetail: any = {}
public similarId: any = []
public addCartIcon:object = {}
public addWhisLisIcon:object ={}

  subscription1: Subscription = new Subscription; 
  subscription2: Subscription = new Subscription; 

  subscription3: Subscription = new Subscription; 

  

  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.bookId = this.activatedRoute.snapshot.params['id']
    this.subscription1 = this.data.getAllBooks(this.bookId).subscribe((res:any) =>{
      this.bookDetail=res
    })
     
    this.subscription2 = this.data.getSimilarBooks(this.bookId).subscribe((response:any) => {
       this.similarId = response
     })

     this.subscription3 =  this.data.getBooksFromWishlist().subscribe((response:any) => {
      let books : any = response
      
      books.map((book:any)=>{
        if(book.bookId === this.bookId)

        {this.isPresentInWishlist=true
           }
      })
    })
    
 }
 
 addToCart(){
   
  this.data.addToCart(this.bookId).subscribe((response:any) => {
    this.addCartIcon = response
  
  })
}
addToWhisList(){
this.data.addToWhisList(this.bookId).subscribe((response:any) => {
  if(response.length>=0){
    this.isPresentInWishlist=!this.isPresentInWishlist
  }

})
}
ngOnDestroy(){
this.subscription1.unsubscribe()
this.subscription2.unsubscribe()
this.subscription3.unsubscribe()

}
}


