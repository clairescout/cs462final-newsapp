import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';
import { AcceptReferralComponent } from './accept-referral/accept-referral.component';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'subscribe',
    component: SubscribeComponent
  },
  {
    path: 'refer',
    component: ReferFriendComponent
  },
  {
    path: 'accept/:userId',
    component: AcceptReferralComponent
  },
  {
    path: 'cancel',
    component: CancelSubscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
