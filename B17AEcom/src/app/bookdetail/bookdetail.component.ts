import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.bookId = this.activatedRoute.snapshot.params['id']
    this.data.getAllBooks(this.bookId).subscribe((res:any) =>{
      this.bookDetail=res
    })
     
    this.data.getSimilarBooks(this.bookId).subscribe((response:any) => {
       this.similarId = response
     })

     this.data.getBooksFromWishlist().subscribe((response:any) => {
      let books : any = response
      console.log(books)
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
}


