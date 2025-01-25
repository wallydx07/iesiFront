import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {LoginComponent} from "./login/login.component";
import {CentroComponent} from "./centro/centro.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, HeaderComponent,FooterComponent,LoginComponent, CentroComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'I';
}
