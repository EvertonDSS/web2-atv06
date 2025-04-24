import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroUsuarioComponent } from "./cadastro-usuario/cadastro-usuario.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cadastro';
}
