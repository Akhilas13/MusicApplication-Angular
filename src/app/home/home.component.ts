import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrayOfMusic=[];

  constructor(private musicService:MusicService ,private route :Router) { }

  ngOnInit() {
    this.musicService.getTopTracks().subscribe(data=>
      {
          console.log(data.tracks.track);
          this.arrayOfMusic=data.tracks.track;
      });
  }
  click(value){
   
    this.route.navigateByUrl("/result/"+value);
    
  }

  clickToAdd(music){
   this.musicService.addFavourites(music).subscribe();
  }

  details(music){
    console.log(music);
    this.route.navigateByUrl("/details/"+music.name+"/"+music.artist.name);
  }


}
