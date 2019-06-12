import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Track} from './track';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  public track;
  public count=1000;

  constructor(private http:HttpClient) { }
  getTopTracks():any{
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=54f043419bebb8c4166360d7121b8d8f&format=json");
  }

  getTrackSearch(value): any{
    var url=`http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=54f043419bebb8c4166360d7121b8d8f&track=${value}&format=json`;
    return this.http.get(url);
  }

  addFavourites(music):Observable<any>{
    this.count++;
    this.track= new Track(this.count,music.name,music.url); 
    console.log(music, this.track);
    return this.http.post<any>('http://localhost:8080/track-service/api/v1/track',this.track);
  }

  viewFavourites(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/track-service/api/v1/track');

  }

  removeMusic(id){
    console.log(id)
    return this.http.delete(`http://localhost:8080/track-service/api/v1/deletee/${id}`, id);
}

getDetails(details1,details2):any{
console.log("working");
 return this.http.get<any>(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=54f043419bebb8c4166360d7121b8d8f&artist=${details1}&album=${details2}&format=json`);
  }
}