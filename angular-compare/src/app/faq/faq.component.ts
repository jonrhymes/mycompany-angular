import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqs: Array<any>;
  errorMessage: String;

  constructor(private JSONPlaceholder: JSONPlaceholderService) { 
    this.faqs = new Array<any>()
  }
  ngOnInit() {
    this.JSONPlaceholder.getData().subscribe((faqs) => {
      this.faqs = faqs.slice(0, 10);
      })
  }
}