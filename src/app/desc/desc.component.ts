import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../Services/properties.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { WordBankService } from '../Services/word-bank.service';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent implements OnInit {

  prop: any;
  private routeSub: Subscription;
  images : any;

  collapsDesc : boolean = false;
  collapsDim : boolean = false;
  collapsCarac : boolean = false;
  
  sale : boolean = false;


  constructor(public proper: PropertiesService, private route: ActivatedRoute, public router: Router,
    public wordBank : WordBankService) {
      if(this.proper.vendre.length == 0){
        console.log("LOOOLL")
        this.proper.updateVendre().then((temp) => {
          this.proper.updateLouer().then((temp) => {
            this.restOnInit()
          })
        })
      }else{
        this.restOnInit()
      }
    }

  ngOnInit() {
    
  }

  restOnInit(){
    console.log("Rest on init : ", JSON.parse(JSON.stringify(this.proper.vendre)))
    let found = undefined
    this.routeSub = this.route.params.subscribe(params => {
      found = this.proper.louer.find(function (element) {
        return element.id === params['id'];
      });
      if (found === undefined) {
        this.sale = true
        found = this.proper.vendre.find(function (element) {
          return element.id === params['id'];
        });
      }
    });
    if (found == undefined) {
      this.router.navigate([''])
    } else {
      this.prop = found
    }
    
    this.images = []
    for(let i = 0; i<this.prop.size; i++){
      this.images.push(this.prop.url + (i+1).toString() + '.jpg')
    }
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
