import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiCepService } from '../../services/api-cep.service';
import { ApiService } from 'src/app/services/api.service';
import { Cep } from 'src/app/model/Cep';
import { Person } from 'src/app/model/Person';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Church } from 'src/app/model/Church';
import { cpf } from 'cpf-cnpj-validator';

interface Office {
  value: string;
  viewValue: string;
}

interface Type {
  value: string;
  viewValue: string;
}

interface MaritalStatus {
  value: string;
  viewValue: string;
}

interface GenderStatus {
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
  listChurch: Church[] = []
  nameChurch: string = "";
  resultCep!: Cep;

  constructor(private frmBuilder: FormBuilder,
    private ApiCepService: ApiCepService,
    private service: ApiService,
    private snackBar: MatSnackBar, private apiBack: ApiService) {
    this.createFormPersonBlank();
  }

  offices: Office[] = [
    { value: 'Jovem Obreiro-0', viewValue: 'Jovem Obreiro' },
    { value: 'Cooperador-1', viewValue: 'Cooperador' },
    { value: 'Diácono-2', viewValue: 'Diácono' },
  ];

  types: Type[] = [
    { value: 'Membro-0', viewValue: 'Membro' },
    { value: 'Obreiro-1', viewValue: 'Obreiro' },
  ];

  statusMaritals: MaritalStatus[] = [
    { value: 'Solteiro-0', viewValue: 'Solteiro' },
    { value: 'Casado-1', viewValue: 'Casado' },
    { value: 'Divorciado-2', viewValue: 'Divorciado' },
  ];

  statusGender: GenderStatus[] = [
    { value: 'Masculino-0', viewValue: 'Masculino' },
    { value: 'Feminino-1', viewValue: 'Feminino' },
  ];

  ngOnInit(): void {
    this.apiBack.getAllChurchs().subscribe(
      {
        next: (data: Church[] | any) => {
          this.listChurch = data;
        },
      }
    )
  }

  setInputCongregation() {

  }

  createFormPersonBlank() {
    this.frmPerson = this.frmBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      foneRes: [''],
      foneCel: [''],
      maritalStatus: [''],
      dateConversion: [''],
      dateBaptizedHe: [''],
      dateBaptized: ['', Validators.required],
      office: ['', Validators.required],
      type: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      gender: [''],
      dateBirth: ['', Validators.required],
      church: ['', Validators.required],

      //endereço
      cep: [""],
      logradouro: [""],
      numberHome: [""],
      complementObservation: [""],
      bairro: [""],
      localidade: [""],
      uf: [""]
    })
  }

  cepInputValue(cepvalue: any) {
    var valueCep = cepvalue.value
    this.getCep(valueCep)
  }

  getCep(valueCep: string) {
    this.ApiCepService.getCep(valueCep).subscribe(
      {
        next: (data: Cep | any) => {
          this.populateFormCep(data)
        },
        error: () => {
          this.openSnackBar("Cep Invalído :(")
        }
      }
    )
  }

  populateFormCep(data: Cep) {
    this.resultCep = data
    this.frmPerson.controls['cep'].setValue(data.cep);
    this.frmPerson.controls['logradouro'].setValue(data.logradouro);
    this.frmPerson.controls['bairro'].setValue(data.bairro);
    this.frmPerson.controls['localidade'].setValue(data.localidade);
    this.frmPerson.controls['uf'].setValue(data.uf);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', { duration: 3000 })
  }

  getChurch() {

  }

  saveFormsPerson() {
    var person = this.frmPerson.getRawValue() as Person;
    // var person = this.frmPerson.value;
    // console.log(person.numberHome);
    var church = this.service.getByNameCongregation(this.nameChurch).subscribe({
      next: (result: Church) => {
        if(result != null) {
          person.address = this.resultCep.logradouro
          person.neighborhood = this.resultCep.bairro
          person.city = this.resultCep.localidade
          person.church = result;
          this.service.createPerson(person).subscribe({
            next: (result: Person) => console.log(result)
          })
        }
      }
    })
  }

  valueInputNameCongregation(nameCongregation: any) {
    this.nameChurch = nameCongregation.value;

  }
}





