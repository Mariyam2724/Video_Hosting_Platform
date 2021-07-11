import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
videoForm: any;
  constructor(private fb:FormBuilder,private videoservice:VideoService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.videoForm=this.fb.group({
     user : '',
      file: '',
     thumbnail: '',
     shared: '',
    });
   }
    videoSubmit(){
     console.log(this.videoForm.value);
    // this.videoservice.addUser( this.videoForm.value).subscribe((res) => { console.log(res) });
  
 }
}
