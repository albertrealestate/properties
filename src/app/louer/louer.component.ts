import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../Services/properties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-louer',
  templateUrl: './louer.component.html',
  styleUrls: ['./louer.component.css']
})
export class LouerComponent implements OnInit {

  louer: any;

  constructor(public propService: PropertiesService, private router : Router) {
    this.louer = propService.louer
  }

  ngOnInit() {
  }

  click(id) {
    this.router.navigate(['desc/'+id]);
  }

}
