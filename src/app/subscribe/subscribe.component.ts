import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  subscriberInfo = {
    name: '',
    email: '',
    phone: ''
  };
  subscribed = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  subscribe() {
    const url = 'user/subscribed';
    this.apiService.post(url, this.subscriberInfo).subscribe(data => {
      this.subscribed = true;
    });
  }

}
