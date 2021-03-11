import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from '@angular/router';
import { LayoutModule } from "@angular/cdk/layout";
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ShellComponent } from './shell/shell.component';

const components=[ShellComponent]

const modules =[
  MatButtonModule, 
  MatToolbarModule, 
  MatIconModule, 
  LayoutModule, 
  MatSidenavModule, 
  MatListModule, 
  MatMenuModule, 
  RouterModule,
  MatCardModule,
  MatFormFieldModule, 
  MatInputModule, 
  MatSnackBarModule, 
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule, 
    ...modules
  ], 
  exports:[...components, ...modules]
})
export class SharedModule { }
