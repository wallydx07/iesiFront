import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {User} from "../../models/user";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  standalone: true,
  styleUrl: './auth.component.css'
})
export class AuthComponent {
user: User;
constructor() {
  this.user=new User
}
onSubmit(){
  if (!this.user.dni || !this.user.password) {
    Swal.fire({
      icon: 'warning',
      title: 'Faltan datos',
      text: 'Por favor, complete todos los campos.',
    });
  }else{
    console.log(this.user)
  }


}

}
