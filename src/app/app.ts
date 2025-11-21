import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [FormsModule, MatFormFieldModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatProgressSpinnerModule, MatButtonToggleModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-material-buttons');
  isDisabled = true;
  loading = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'save-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/save.svg')
    );
  }

  save() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  submitForm() {
    alert('Form submitted!');
  }

  // openDeleteDialog() {
  //   this.dialog.open(DeleteDialogComponent);
  // }
}
