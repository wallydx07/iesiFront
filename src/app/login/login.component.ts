import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DesplazableheaderComponent} from "../desplazableheader/desplazableheader.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, DesplazableheaderComponent,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userLoginOn:boolean=false;
  ngOnInit(): void {
  }

}
