import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-refer-friend',
  templateUrl: './refer-friend.component.html',
  styleUrls: ['./refer-friend.component.scss']
})
export class ReferFriendComponent implements OnInit {

  friendInfo = {
    name: '',
    email: '',
    phone: ''
  };

  referred = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  referFriend() {
    const url = 'user/friend_referred';
    this.apiService.post(url, this.friendInfo).subscribe(data => {
      this.referred = true;
    });
  }
}
