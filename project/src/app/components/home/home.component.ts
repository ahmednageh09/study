import { Component } from '@angular/core';
import { StoreData } from 'src/app/viewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  storeInfo:StoreData;
  isImgShown:boolean=true;
  constructor(){
    this.storeInfo= new StoreData("The Store","https://fakeimg.pl/400x200/",["Cairo","Alex","Mansoura"]);
  }
  toggleImage(){
    this.isImgShown=!this.isImgShown;
  }

}
