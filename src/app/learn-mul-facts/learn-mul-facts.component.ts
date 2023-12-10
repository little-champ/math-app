import { Component, Inject } from '@angular/core';

import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';

import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'lcma-learn-mul-facts',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatListModule],
  templateUrl: './learn-mul-facts.component.html',
  styleUrl: './learn-mul-facts.component.scss'
})
export class LearnMulFactsComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

}
