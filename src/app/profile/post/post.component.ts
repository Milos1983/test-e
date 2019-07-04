import { Component, OnInit, Input } from '@angular/core';
import { StringifyOptions } from 'querystring';

export class Poust {
  id: number;
  name: string;
  lastname : string;
  text : string;
  image: string;
  coment: string;
  timeofpoust : string;
  fname: string;
  flastname : string;
  ctime: string;
  fimage: string;
  shared: string;
  sharedphoto: string;
}

const POUST: Poust[] = [
  { id: 1, name: 'Milos', lastname: 'Sremacki', text: 'Duis aute irire dolor in repehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariature. Exceptur sint occaecat cupidata non proident, sun in culpa qui offcia deserunt molit anim id est laborum. Sed ut prespiciatis unde omnis iste natures erroe sit voluptatem accusantium doloremque.', 
  image: '', coment: '', timeofpoust : '19 hours ago', fname: '', flastname : '', ctime: '', fimage: '', shared: '', sharedphoto: ''},
  { id: 2, name: 'Milos', lastname: 'Sremacki', text: 'Hi! Everyone should check out these amazing photographs that my friend shot the past week. Here s on of the....lesave a kind comment!',
   image: 'assets/street.png', coment: 'Here the first photo of our incredible photoshoot from testerday. If you like it please say so and tel me what you wanna see next!', timeofpoust : '16 hours ago',
   fname: 'Diana', flastname : 'Jameson', ctime: '8 hours ago', fimage: 'assets/woman.jpg', shared: 'shared', sharedphoto: ' photo' }
];

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() person: { name: string, lastname : string, city: string, imagePath: string};

  pousts: Poust[] = POUST;

  poust: Poust = {
    
    id: 1,
    name: 'Admin',
    lastname : 'Admin',
    text : 'Lorem ipsum',
    image: '',
    coment: 'lorem ipsum',
    timeofpoust : '16',
    fname: 'Admin', 
    flastname : 'Admin', 
    ctime: '22',
    fimage: 'pg',
    shared: 'shared', 
    sharedphoto: 'photo'
  }

  constructor() { }

  ngOnInit() {
  }

}
