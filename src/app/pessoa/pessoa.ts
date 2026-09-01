import { Component } from '@angular/core';
import { Pessoa as PessoaModel } from './pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css'
})
export class Pessoa {
  pessoas: PessoaModel[] = [
    { id: 1, nome: 'Eduardo Santos', curso: 'Análise e Desenvolvimento de Sistemas', email: 'eduardo@exemplo.com', telefone: '71999999999', ativo: true, vinculo: 'aluno' },
    { id: 2, nome: 'Ana Souza', curso: 'Odontologia', email: 'ana@exemplo.com', telefone: '71888888888', ativo: true, vinculo: 'aluno' },
    { id: 3, nome: 'Carlos Silva', curso: 'Jornalismo', email: 'carlos@exemplo.com', telefone: '71777777777', ativo: true, vinculo: 'convidado' },
    { id: 4, nome: 'Marcos Lima', curso: 'Engenharia', email: 'marcos@exemplo.com', ativo: false, vinculo: 'professor' }
  ];
}