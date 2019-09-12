import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cancel-subscription',
  templateUrl: './cancel-subscription.component.html',
  styleUrls: ['./cancel-subscription.component.scss']
})
export class CancelSubscriptionComponent implements OnInit {

  unsubscriber = {
    email : ''
  };
  unsubscribed = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  unsubscribe() {
    const url = 'user/unsubscribed';
    this.apiService.post(url, this.unsubscriber).subscribe(data => {
      this.unsubscribed = true;
    });
  }

}
