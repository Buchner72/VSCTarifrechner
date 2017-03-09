import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarifierung',
  templateUrl: './tarifierung.component.html',
  styles: []
})
export class TarifierungComponent implements OnInit {
  tarif: string ='Angebot';
  aString: string = 'Ich bin ein string';

  onClickBerechnung() { 
   this.tarif='Berechnung';  
  } 

  onClickAngebot() {
   this.tarif='Angebot';
  }

  onClickAntrag() {
     this.tarif='Antrag';
  }
  constructor() { 
      this.tarif='Bitte wählen!!';
  }

  ngOnInit() {
  }
}
