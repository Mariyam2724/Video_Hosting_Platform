import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { app_config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  url= app_config.api_url;

  constructor(private http: HttpClient) { }

  addVideo(data : any) : Observable<any>{
    return this.http.post( this.url+'/video/add',data);
  }
}
