import { Component, OnInit } from '@angular/core';
import  {ProdectsService} from '../services/prodects.service';
import { Prodects } from 'src/app/models/Prodects';
@Component({
  selector: 'app-ccard',
  templateUrl: './ccard.component.html',
  styleUrls: ['./ccard.component.scss']
})
export class CcardComponent implements OnInit {
  prodects:Prodects[]
   arrData=[];
   id=0;

  constructor(private prodectsService:ProdectsService) { }

  ngOnInit() {
    this.prodects=this.prodectsService.getProdects();
    var retriveData = localStorage.getItem("Card");
    var myData = JSON.parse(retriveData);
    
    this.arrData[0]=myData[0];
    this.arrData[1]=myData[1];
   this.arrData[2]=myData[2];
   this. arrData[3]=myData[3];
   this. arrData[4]=myData[4];
   this. arrData[5]=myData[5];
   this. arrData[6]=myData[6];
   this. arrData[7]=myData[7];
   this. arrData[8]=myData[8];
  //console.log( typeof this.arrData[0]);
   
 
  }

}
