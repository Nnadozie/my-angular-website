import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrls: ['./view-pdf.component.css']
})
export class ViewPdfComponent implements OnInit {
  pdfSrc: string;
  
  constructor() {
      this.pdfSrc = './assets/files/collection.pdf';
  }

  ngOnInit() {
  }

}
