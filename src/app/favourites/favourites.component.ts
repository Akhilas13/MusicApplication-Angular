import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

arrayOfMusic=[];
  constructor(private musicService:MusicService ,private route :Router) { }

  ngOnInit() 
{
  this.viewFavourites();
    
  }
    
  viewFavourites() {
  // const search = this.route.snapshot.paramMap.get('id');
   this.musicService.viewFavourites().subscribe(data => {
    this.arrayOfMusic=data
   
});
  }

  remove(id){
    this.musicService.removeMusic(id).subscribe();
   }
 



}