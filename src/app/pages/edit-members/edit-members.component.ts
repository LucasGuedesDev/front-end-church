import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cep } from 'src/app/model/Cep';
import { Church } from 'src/app/model/Church';
import { ApiCepService } from 'src/app/services/api-cep.service';
import { ApiService } from 'src/app/services/api.service';
import * as cpf from 'validation-br/dist/cpf';

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
  selector: 'app-edit-members',
  templateUrl: './edit-members.component.html',
  styleUrls: ['./edit-members.component.css']
})
export class EditMembersComponent implements OnInit {
  frmEditPerson!: FormGroup;
  listChurch: Church[] = []
  nameChurch: string = "";
  resultCep!: Cep;

  constructor(private _formBuilder: FormBuilder,
    private ApiCepService: ApiCepService,
    private snackBar: MatSnackBar, private apiBack: ApiService) {}

  ngOnInit(): void {
   this.createFormPersonBlank();
   this.apiBack.getMemberById(4).subscribe(member => {console.log(member)});
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

  createFormPersonBlank() {
    this.frmEditPerson = this._formBuilder.group({
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

  cpfInputValue(cpfvalue: any) {
    var valueCpf = cpfvalue.value
    this.validateCpf(valueCpf)
  }

  validateCpf(valueCpf: any) {
    var result = cpf.validate(valueCpf)

    if(result == true){
      ""
    }else{
      this.openSnackBar("CPF inválido")
      this.frmEditPerson.controls['cpf'].setValue('');
    }


  }

  populateFormCep(data: Cep) {
    this.resultCep = data
    this.frmEditPerson.controls['cep'].setValue(data.cep);
    this.frmEditPerson.controls['logradouro'].setValue(data.logradouro);
    this.frmEditPerson.controls['bairro'].setValue(data.bairro);
    this.frmEditPerson.controls['localidade'].setValue(data.localidade);
    this.frmEditPerson.controls['uf'].setValue(data.uf);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', { duration: 3000 })
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

  saveFormsPerson(){

  }

  valueInputNameCongregation(nameCongregation: any) {
    this.nameChurch = nameCongregation.value;

  }
}
