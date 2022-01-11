import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookdetailComponent implements OnInit {
public detailId: any
public similarId: any
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getAllBooks().subscribe((res:any) =>{
      this.detailId =res
    })
     
    this.data.getSimilarBooks().subscribe((response:any) => {
       this.similarId = response
       console.log(response);
       

     })
 }
}


