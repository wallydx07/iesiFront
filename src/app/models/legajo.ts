import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

interface Alumno {
  orden: number
  libreta: string
  dni: string
  apellido: string
  nombre: string
  carrera: string
  copiaDni: boolean
  copiaNacimiento: boolean
  copiaTitulo: boolean
  planillaProntuarial: boolean
  carnetSanitario: boolean
  foto: boolean
  aval: boolean
  sede: string
  usuario: string
}

interface Carrera {
  id: string
  nombre: string
}

@Component({
  selector: "app-alumno",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "../components/alumno/legajo/legajo.component.html",
  styleUrls: ["../components/alumno/legajo/legajo.component.css"],
})
export class AlumnoComponent implements OnInit {
  alumnos: Alumno[] = [];
  carreras: Carrera[] = [];
  alumnosFiltrados: Alumno[] = [];
  terminoBusqueda = "";
  carreraSeleccionada = "";
  estadoSeleccionado: string = "activo"; // Preseleccionar "Activo"
  paginaActual = 1;
  elementosPorPagina = 10;
  ngOnInit() {
    // Aquí normalmente cargarías los datos de un servicio
    // Por ahora, usaremos datos de ejemplo
    this.alumnos = [
      {
        orden: 1,
        libreta: "A001",
        dni: "12345678",
        apellido: "García",
        nombre: "Juan",
        carrera: "Ingeniería",
        copiaDni: true,
        copiaNacimiento: true,
        copiaTitulo: false,
        planillaProntuarial: true,
        carnetSanitario: true,
        foto: true,
        aval: false,
        sede: "Central",
        usuario: "jgarcia",
      },


      // Agrega más alumnos aquí...
    ]

    this.carreras = [
      {
        id: "GDTC-2024",
        nombre: "Guia de Tursimo Comunitario"

      },
      // Agrega más alumnos aquí...
    ]
    this.filtrarAlumnos()
  }

  filtrarAlumnos() {
    this.alumnosFiltrados = this.alumnos.filter((alumno) =>
      Object.values(alumno).some((valor) =>
        valor.toString().toLowerCase().includes(this.terminoBusqueda.toLowerCase()),
      ),
    )
    this.paginaActual = 1 // Resetear a la primera página después de filtrar
  }

  get alumnosPaginados() {
    const indiceInicio = (this.paginaActual - 1) * this.elementosPorPagina
    return this.alumnosFiltrados.slice(indiceInicio, indiceInicio + this.elementosPorPagina)
  }

  get totalPaginas() {
    return Math.ceil(this.alumnosFiltrados.length / this.elementosPorPagina)
  }

  cambiarPagina(pagina: number) {
    this.paginaActual = pagina
  }
}
