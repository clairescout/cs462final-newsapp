import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatProgressBarModule, MatDialogModule, MatButtonModule, MatProgressSpinnerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule} from '@angular/material';
import { AcceptReferralComponent } from './accept-referral.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AcceptReferralComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  entryComponents: []
})
export class AcceptReferralModule { }
