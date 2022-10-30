import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../Services/properties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendre',
  templateUrl: './vendre.component.html',
  styleUrls: ['./vendre.component.css']
})
export class VendreComponent implements OnInit {

  vendre: any;

  constructor(public propService: PropertiesService, private router: Router) {
    this.vendre = propService.vendre
  }

  ngOnInit() {
  }

  click(id) {
    this.router.navigate(['desc/' + id]);
  }

}
