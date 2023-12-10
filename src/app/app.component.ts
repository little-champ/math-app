import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { LearnMulFactsComponent } from '../app/learn-mul-facts/learn-mul-facts.component'

import {MatButtonModule} from '@angular/material/button';

import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'lcma-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'math-app';
  selectedNumber: number = 1;
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(LearnMulFactsComponent, {data: {selectedNumber: this.selectedNumber}});
  }
}
