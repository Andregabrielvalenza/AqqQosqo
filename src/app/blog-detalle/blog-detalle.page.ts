import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detalle',
  templateUrl: './blog-detalle.page.html',
  styleUrls: ['./blog-detalle.page.scss'],
})
export class BlogDetallePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public actionSheetButtons = [
    {
      text: 'Facebook',
      data: {
        action: 'facebook',
      },
    },
    {
      text: 'Instagram',
      data: {
        action: 'instagram',
      },
    },
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
  ];

}
