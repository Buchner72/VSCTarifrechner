import { Component } from '@angular/core';
import { VN } from './vnData';

@Component({
  selector: 'app-vn',
  templateUrl: './vn.component.html',
  styles: []
})
export class VnComponent  {
  ListVN: Array<VN> = [];
  createVNList() {
    let VN1 = new VN(); 
    VN1.Vorname = "Franz";
    VN1.Nachname = "Buchner";
    this.ListVN.push(VN1);
    console.log(this.ListVN);
  }
}
