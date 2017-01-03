import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <ActionBar [title]="home"></ActionBar>
    <Label text="Star Wars" class="h1 text-center"></Label>
  `
})
export class HomeComponent implements OnInit {

  home: string = 'Home';

  ngOnInit() {
  }
  
};
