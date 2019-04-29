import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.css']
})
export class MyCvComponent implements OnInit {

  pdfSrc: string;

  constructor() {
    this.pdfSrc = './assets/files/sa-cv.pdf';
  }

  ngOnInit() {
  }

}

