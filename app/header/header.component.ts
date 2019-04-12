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
  constructor(private prodectsService:ProdectsService) { }

  ngOnInit() {
    this.prodects=this.prodectsService.getProdects();
  }

}
