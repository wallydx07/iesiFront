import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/page/header/header.component";
import {FooterComponent} from "./components/page/footer/footer.component";
import {AuthComponent} from "./components/auth/auth.component";
import {CentroComponent} from "./components/page/centro/centro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, AuthComponent, CentroComponent, RouterOutlet],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'I';
}
