import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarifierung',
  templateUrl: './tarifierung.component.html',
  styles: []
})
export class TarifierungComponent implements OnInit {
   onClickBerechnung() {
    console.log('Klick!')
  }

  constructor() { }

  ngOnInit() {
  }
}
