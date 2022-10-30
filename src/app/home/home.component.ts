import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../Services/properties.service';
import { Router } from '@angular/router';
import { PostComponent } from '../post/post.component'
import { WordBankService } from '../Services/word-bank.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public proper : PropertiesService, public router : Router,
    public wordBank : WordBankService) {  }

  ngOnInit() {
  }

  click(val) {
    this.router.navigate(['desc/'+val.id]);
  }
  vendre(){
    this.router.navigate(['vendre'])
  }
  louer(){
    this.router.navigate(['louer'])
  }

}
