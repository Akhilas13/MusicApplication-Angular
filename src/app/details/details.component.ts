import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service'
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  arrayOfMusic:any=[];

  constructor(private musicService:MusicService, private router:Router,private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    const details1= this.route.snapshot.paramMap.get('name');
    const details2= this.route.snapshot.paramMap.get('artistname');
    console.log(details1);
    console.log(details2);
    this.musicService.getDetails(details1,details2).subscribe(data => {
      this.arrayOfMusic=data
      console.log(this.arrayOfMusic);
      
     
  });

  

}
}
