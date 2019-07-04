import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
@Input() person: { name: string, lastname : string, city: string, imagePath: string};

  constructor() { }

  ngOnInit() {
  }

}
