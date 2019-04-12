import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';  
import  {ProdectsService} from '../services/prodects.service';
import { Prodects } from 'src/app/models/Prodects';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser'
@Component({
  selector: 'app-single-prodect',
  templateUrl: './single-prodect.component.html',
  styleUrls: ['./single-prodect.component.scss']
})
export class SingleProdectComponent implements OnInit {
  prodects:Prodects[]
  id: number;
  constructor( private route: ActivatedRoute,
    private prodectsService: ProdectsService,
    private location: Location) { }
   
  ngOnInit() {
    this.prodects=this.prodectsService.getProdects();
    this.id = +this.route.snapshot.paramMap.get('id');
    
  }
  onClick(id){
   
    if(localStorage.getItem("Card")){
    
      var retriveData = localStorage.getItem("Card");
      var cardItem = JSON.parse(retriveData);
     
      cardItem[id]=cardItem[id]+1;
      
      localStorage.setItem('Card', JSON.stringify(cardItem));
    }
    else{
      var cart = [];
      cart[0] = 0
      cart[1] = 0
      cart[2] = 0
      cart[3] = 0
      cart[4] = 0
      cart[5] = 0
      cart[6] = 0
      cart[7] = 0
      cart[8] = 0
      cart[id]=1;
      localStorage.setItem('Card', JSON.stringify(cart));
    }
  }

}
