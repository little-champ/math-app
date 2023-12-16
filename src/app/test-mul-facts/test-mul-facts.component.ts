import { Component, ElementRef, Inject, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

const SLIDER_LABEL_OFF = 'Off';

@Component({
  selector: 'lcma-test-mul-facts',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule,
    MatSliderModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  templateUrl: './test-mul-facts.component.html',
  styleUrl: './test-mul-facts.component.scss'
})
export class TestMulFactsComponent {
  indexValue = 1;
  answer?: number = undefined;
  answerLabel = '';
  showCheckAnserButton = true;
  showNextTestButton = false;
  isAnswerCorrect?: boolean;
  @ViewChild('answerBox') answerBox!: ElementRef<HTMLInputElement>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.nextTest()
  }
  checkAnswer() {
    if (this.data.selectedNumber * this.indexValue == this.answer) {
      this.answerLabel = 'Yippee, that is correct answer';
      this.isAnswerCorrect = true;
    } else {
      this.answerLabel = `Oops!! Correct answer is ${this.data.selectedNumber * this.indexValue}`;
      this.isAnswerCorrect = false;
    }
    this.showCheckAnserButton = false;
    this.showNextTestButton = true;
  }
  nextTest() {
    this.indexValue = Math.ceil(Math.random() * 10);
    this.answer = undefined;
    this.answerLabel = '';
    this.showCheckAnserButton = true;
    this.showNextTestButton = false;
    this.answerBox?.nativeElement.focus();
    this.isAnswerCorrect = undefined;
  }

}
