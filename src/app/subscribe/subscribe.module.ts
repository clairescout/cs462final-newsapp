import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatProgressBarModule, MatDialogModule, MatButtonModule, MatProgressSpinnerModule,
  MatExpansionModule, 
  MatFormFieldModule,
  MatInputModule,
  MatIconModule} from '@angular/material';
import { SubscribeComponent } from './subscribe.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [SubscribeComponent ],
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
export class SubscribeModule { }
