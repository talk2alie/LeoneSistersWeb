import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lsu-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    currentYear: number;


  constructor() { }

  ngOnInit() {
      const todaysDate = new Date();
      this.currentYear = todaysDate.getFullYear();
  }

}
