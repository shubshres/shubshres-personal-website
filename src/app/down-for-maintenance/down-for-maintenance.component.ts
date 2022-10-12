import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-down-for-maintenance',
  templateUrl: './down-for-maintenance.component.html',
  styleUrls: ['./down-for-maintenance.component.scss']
})
export class DownForMaintenanceComponent implements OnInit {



  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  checkRoute(route: string): boolean{
    return this.router.url.includes(route)
  }

}
