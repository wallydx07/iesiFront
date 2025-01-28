import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-desplazableheader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desplazableheader.component.html',
  styleUrl: './desplazableheader.component.css'
})
export class DesplazableheaderComponent {

}
