import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent {
  active = 1;

  constructor(route: ActivatedRoute){
    console.log(route);
    //@todo: FIX active settings at startup
  }
}
