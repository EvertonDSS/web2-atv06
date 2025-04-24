import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaTarefaComponent } from "./lista-tarefa/lista-tarefa.component";

@Component({
  selector: 'app-root',
  imports: [ListaTarefaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tarefas';
}
