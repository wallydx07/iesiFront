import{Component} from "@angular/core";
@Component({
  selector:'app-footer',
    templateUrl:'./footer.component.html',
  standalone:true
  }

)
export class FooterComponent{
  autor: any = { nombre:'Walter', apellido:'Geronimo'}
}
