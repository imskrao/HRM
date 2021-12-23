import { Component, Input, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

interface NavItem {
  id: number;
  name: string;
  url: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isPublic: boolean = true;
  publicNavItems: NavItem[] = [
    {
      id: 1,
      name: 'Home',
      url: '/'
    },
    {
      id: 2,
      name: 'About',
      url: '/about'
    }
  ]
  constructor(
    // private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirectTo(url: string): void {
    // this.router.navigate([url]);
  }

  trackById(index: number, item: NavItem): number {
    return item.id;
  }

}
