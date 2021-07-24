import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  searchInput = ""
  sideNav = false;
  searchBox = false;
  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    this.sideNav = !this.sideNav
  }
  openSearch(){
    this.searchBox = !this.searchBox
  }

}
