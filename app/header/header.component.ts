import { Component, OnInit } from '@angular/core';
import  {ProdectsService} from '../services/prodects.service';
import { Prodects } from 'src/app/models/Prodects';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  prodects:Prodects[]
  arrData=[];
  wishData=[];
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
    
    var retriveData1 = localStorage.getItem("wish");
    var mywish = JSON.parse(retriveData1);
    console.log(mywish);
    
   this.wishData[0]=mywish[0];
   this.wishData[1]=mywish[1];
   this.wishData[2]=mywish[2];
   this. wishData[3]=mywish[3];
   this. wishData[4]=mywish[4];
   this. wishData[5]=mywish[5];
   this. wishData[6]=mywish[6];
   this. wishData[7]=mywish[7];
   this. wishData[8]=mywish[8];

    


  }

}
