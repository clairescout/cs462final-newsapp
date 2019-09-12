import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, 
  MatFormFieldControl } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReferFriendModule} from './refer-friend/refer-friend.module';
import { NewsModule } from './news/news.module';
import {SubscribeModule} from './subscribe/subscribe.module';
import { AcceptReferralModule} from './accept-referral/accept-referral.module';
import { ApiService } from './services/api.service';
import { CancelSubscriptionComponent } from './cancel-subscription/cancel-subscription.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CancelSubscriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    NewsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    SubscribeModule,
    BrowserAnimationsModule,
    ReferFriendModule,
    AcceptReferralModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
