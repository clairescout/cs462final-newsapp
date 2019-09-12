import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatProgressBarModule, MatDialogModule, MatButtonModule, MatProgressSpinnerModule,
  MatExpansionModule } from '@angular/material';
import { NewsComponent } from './news.component';
@NgModule({
  declarations: [NewsComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  providers: [],
  entryComponents: []
})
export class NewsModule { }
