import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

interface Office {
  value: string;
  viewValue: string;
}

interface Type {
  value: string;
  viewValue: string;
}

interface Church {
  value: string;
  viewValue: string;
}

interface MaritalStatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register-members',
  templateUrl: './register-members.component.html',
  styleUrls: ['./register-members.component.css'],
})
export class RegisterMembersComponent implements OnInit {
  frmPerson!: FormGroup;
  panelOpenState = false;

  constructor(private frmBuilder:FormBuilder) {
    this.createFormPersonBlank();
  }

  offices: Office[] = [
    {value: 'Jovem Obreiro-0', viewValue: 'Jovem Obreiro'},
    {value: 'Cooperador-1', viewValue: 'Cooperador'},
    {value: 'Diácono-2', viewValue: 'Diácono'},
  ];

  churchs: Church[] = [
    {value: 'Sede Regional-0', viewValue: 'Sede Regional'},
    {value: 'Setor Portal-1', viewValue: 'Setor Portal'},
    {value: 'Setor Vila Rosina-2', viewValue: 'Setor Vila Rosina'},
    {value: 'Setor Jd Esperança-2', viewValue: 'Setor Jd Esperança'},
    {value: 'Setor Jd Pinheiros-2', viewValue: 'Setor Jd Pinheiros'},
    {value: 'Setor Vila Rosina-2', viewValue: 'Cong Jd dos Cunhas'},
    {value: 'Setor Vila Rosina-2', viewValue: 'Cong São Gonçalo'},
  ];

  types: Type[] = [
    {value: 'Membro-0', viewValue: 'Membro'},
    {value: 'Obreiro-1', viewValue: 'Obreiro'},
  ];

  statusMaritals: MaritalStatus[] = [
    {value: 'Solteiro-0', viewValue: 'Solteiro'},
    {value: 'Casado-1', viewValue: 'Casado'},
    {value: 'Divorciado-2', viewValue: 'Divorciado'},
  ];

  ngOnInit(): void {
  }

  createFormPersonBlank(){
    this.frmPerson = this.frmBuilder.group({
      name: [''],
      email: [''],
      foneRes: [''],
      foneCel: [''],
      maritalStatus: [''],
      dateConversion: [''],
      dateBaptizedHe: [''],
      dateBaptized: [''],
      office: [''],
      type: [''],
      cpf: [''],
      rg: [''],
      dateBirth: [''],
      church: [''],

      //endereço
      cep: [""],
      logradouro: [""],
      numberRoad: [""],
      complementObservation: [""],
      bairro: [""],
      localidade: [""],
      uf: [""]
    })
  }
}


