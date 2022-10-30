import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from '../Services/properties.service';
import { WordBankService } from '../Services/word-bank.service';

@Component({
  selector: 'app-post-md',
  templateUrl: './post-md.component.html',
  styleUrls: ['./post-md.component.css']
})
export class PostMdComponent {
  @Input() id: number = undefined;
  @Input() urlImg: String = undefined;
  @Input() adress: String = undefined;
  @Input() city: String = undefined;
  @Input() urlMap: String = undefined;
  @Input() type: String = undefined;

  @Input() prix: String = undefined;
  @Input() nbChambre: number = undefined;
  @Input() nbSalleBain: number = undefined;
  @Input() nbPiedsCarre: number = undefined;

  constructor(public router : Router, public propService : PropertiesService, public wordBank : WordBankService) { }

  clicked() {
    this.router.navigate(['/desc/' + this.id]);
  }
  

}
