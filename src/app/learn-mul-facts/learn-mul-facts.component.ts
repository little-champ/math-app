import { Subscription, interval } from 'rxjs';
import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';

const INDEXES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SLIDER_LABEL_OFF = 'Off';

@Component({
  selector: 'lcma-learn-mul-facts',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule,
    MatSliderModule,
    FormsModule],
  templateUrl: './learn-mul-facts.component.html',
  styleUrl: './learn-mul-facts.component.scss'
})
export class LearnMulFactsComponent implements OnDestroy{
  indexes = INDEXES;
  indexTimerSubscription?: Subscription;
  scrollSpeed = 0;
  scrollSpeedLabel = SLIDER_LABEL_OFF;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  onScrollChange() {
    if (this.scrollSpeed > 0) {
      this.disposeTimerSubscription();
      this.indexTimerSubscription = interval(this.scrollSpeed * 1000).subscribe(val => {
        if(this.indexes.length >= 10) {
          this.indexes = [1];
        }
        else {
          this.indexes.push(this.indexes.length + 1);
        }
      });
      this.scrollSpeedLabel = `${this.scrollSpeed} sec`;
    }
    else {
      this.disposeTimerSubscription();
      this.indexes = INDEXES;
      this.scrollSpeedLabel = SLIDER_LABEL_OFF;
    }
  }
  disposeTimerSubscription() {
    if (this.indexTimerSubscription != null && !this.indexTimerSubscription.closed) {
      this.indexTimerSubscription.unsubscribe();
    }
  }
  ngOnDestroy(): void {
    this.disposeTimerSubscription();
  }
}
