import { Component, OnInit } from '@angular/core';
import  {ProdectsService} from '../services/prodects.service';
import { Prodects } from 'src/app/models/Prodects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  prodects:Prodects[]
  myCard = "000000000";
  count:number;
  constructor(private prodectsService:ProdectsService) {

   }

  ngOnInit() {
    this.count=0;

    this.prodects=this.prodectsService.getProdects();
    // console.table(this.prodects[0].ProductPicUrl);
  }

  onClick(id){
    this.count=this.count+1;
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
  wish(id){
    this.count=this.count+1;
    if(localStorage.getItem("wish")){
    
      var retriveData = localStorage.getItem("wish");
      var wishItem = JSON.parse(retriveData);
     
      wishItem[id]=wishItem[id]+1;
      
      localStorage.setItem('wish', JSON.stringify(wishItem));
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
      localStorage.setItem('wish', JSON.stringify(cart));
    }
  }

}
