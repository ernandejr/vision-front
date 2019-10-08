import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  erro: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.profileService.listar().subscribe((data: Profile) => {
      this.profile = data;
    }, (error: any) => {
      this.erro = error;
    });
  }

}
