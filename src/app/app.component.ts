import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from './Services/properties.service';
import { WordBankService } from './Services/word-bank.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router : Router, public propService: PropertiesService,
    public wordBank : WordBankService, public proper : PropertiesService){}

  language = ["Anglais", "French"]

  home(){
    this.router.navigate([''])
  }
  
  vendre(){
    this.router.navigate(['vendre'])
  }
  louer(){
    this.router.navigate(['louer'])
  }
  changeLanguage(){
    this.propService.isFrench = 1-this.propService.isFrench;
  }

}
