import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-accept-referral',
  templateUrl: './accept-referral.component.html',
  styleUrls: ['./accept-referral.component.scss']
})
export class AcceptReferralComponent implements OnInit {
  private userId: any;
  userIdKey = 'userId';
  subscribed = false;
  rejected = false;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params[this.userIdKey];
  }

  acceptReferral() {
    const url = 'user/referral_accepted';
    const payload = {
      id: this.userId
    };
    this.apiService.post(url, payload).subscribe(data => {
      this.subscribed = true;
    });
  }

  rejectReferral() {
    const url = 'user/referral_rejected';
    const payload = {
      id: this.userId
    };
    this.apiService.post(url, payload).subscribe(data => {
      this.rejected = true;
    });
  }

}
