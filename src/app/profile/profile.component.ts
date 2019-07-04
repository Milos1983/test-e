import { Component, OnInit } from '@angular/core';
import { Person } from './profile.module';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profilPerson: Person[] = [
    new Person( 'Milos', 'Sremacki', 'Novi Sad, CA', 'assets/profilepicture.jpg' )
  ];

  constructor(
    private user: UserService
    ) { }

  ngOnInit() {
  }

}
