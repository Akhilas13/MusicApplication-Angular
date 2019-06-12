import { Component, OnInit } from '@angular/core';
import {MusicService} from '../music.service'
import {Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  arrayOfMusic:any=[];

  constructor(private musicService:MusicService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTrackSearch();
  }
  
getTrackSearch(): void {
  const search = this.route.snapshot.paramMap.get('id');
   this.musicService.getTrackSearch(search).subscribe(data => {
    this.arrayOfMusic=data.results.trackmatches.track;
   
});
}


}
