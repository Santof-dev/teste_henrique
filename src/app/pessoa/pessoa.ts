import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css'
})
export class Pessoa {
  nome = 'Eduardo Santana';
  curso = 'Análise e Desenvolvimento de Sistemas';
  email = 'eduardo@email.com';
}