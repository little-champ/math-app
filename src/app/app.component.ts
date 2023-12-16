import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LearnMulFactsComponent } from '../app/learn-mul-facts/learn-mul-facts.component'
import {TestMulFactsComponent } from '../app/test-mul-facts/test-mul-facts.component'


@Component({
  selector: 'lcma-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Little Champ';
  selectedNumber: number = 1;
  constructor(public dialog: MatDialog) {}
  openLearnDialog() {
    this.dialog.open(LearnMulFactsComponent, {data: {selectedNumber: this.selectedNumber}});
  }
  openTestDialog() {
    this.dialog.open(TestMulFactsComponent, {data: {selectedNumber: this.selectedNumber}});
  }
}
