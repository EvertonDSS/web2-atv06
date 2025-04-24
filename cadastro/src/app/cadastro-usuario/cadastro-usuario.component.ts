import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-usuario',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    CommonModule
  ],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {

  formCadastro!: FormGroup;
  estados = [
    { valor: 'PR', nome: 'Paraná' },
    { valor: 'SC', nome: 'Santa Catarina' },
    { valor: 'RS', nome: 'Rio Grande do Sul' },
    { valor: 'SP', nome: 'São Paulo' },
    { valor: 'RJ', nome: 'Rio de Janeiro' }
  ];

  constructor(private fb: FormBuilder) {
    this.formCadastro = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.pattern('[0-9]{10,11}')],
      dataNascimento: ['', Validators.required],
      sexo: ['', Validators.required],
      endereco: this.fb.group({
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required]
      }),
      aceitaTermos: [false, Validators.requiredTrue]
    });
  }

  ngOnInit() {
    console.log(this.estados);
  }

  onSubmit() {
    if (this.formCadastro.valid) {
      console.log('Formulário válido!');
      console.log(this.formCadastro.value);
      // Aqui você poderia enviar os dados para um servidor
      alert('Cadastro realizado com sucesso!');
      this.formCadastro.reset();
    } else {
      // Marca todos os campos como touched para mostrar os erros
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
    }
  }

  validarTodosOsCamposDoFormulario(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      if (controle instanceof FormGroup) {
        this.validarTodosOsCamposDoFormulario(controle);
      } else {
        controle?.markAsTouched();
      }
    });
  }

  getErrorMessage(campo: string): string {
    const control = this.formCadastro.get(campo);

    if (control?.hasError('required')) {
      return 'Campo obrigatório';
    }
    if (control?.hasError('email')) {
      return 'Email inválido';
    }
    if (control?.hasError('minlength')) {
      return `Deve ter no mínimo ${control.errors?.['minlength'].requiredLength} caracteres`;
    }
    if (control?.hasError('pattern')) {
      return 'Formato inválido';
    }

    return '';
  }


  getAddressErrorMessage(campo: string): string {
    const control = this.formCadastro.get('endereco')?.get(campo);

    if (control?.hasError('required')) {
      return 'Campo obrigatório';
    }

    return '';
  }
}

