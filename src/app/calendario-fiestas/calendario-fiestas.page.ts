import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario-fiestas',
  templateUrl: './calendario-fiestas.page.html',
  styleUrls: ['./calendario-fiestas.page.scss'],
})
export class CalendarioFiestasPage implements OnInit {

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  constructor() { }

  ngOnInit() {
  }
  
  highlightedDates = [
    {
      date: '2023-01-05',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
      borderRadius: '3px',
    },
    {
      date: '2023-01-10',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
      borderRadius: '3px',
    },
    {
      date: '2023-01-20',
      textColor: 'var(--ion-color-secondary-contrast)',
      backgroundColor: 'var(--ion-color-secondary)',
      borderRadius: '3px',
    },
    {
      date: '2023-01-23',
      textColor: 'rgb(68, 10, 184)',
      backgroundColor: 'rgb(211, 200, 229)',
      borderRadius: '3px',
    },
  ];
 

}
