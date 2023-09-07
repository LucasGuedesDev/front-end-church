import { Cep } from "./Cep"
import { Church } from "./Church"

export class Person{
  id?: number
  ri!: string
  name!: string
  type!: string
  office!: string
  consecrationDate!: Date
  dateBirth!: Date
  naturalness!: string
  uf!: string
  sex!: string
  cep!: Cep
  country!: string
  numberRoad!: number
  complementObservation!: string
  foneRes!: string
  foneCel!: string
  email!: string
  maritalStatus!: string
  dateWedding!: Date
  profession!: string
  cpf!: string
  rg!: string
  baptizedHe!: string
  dateBaptizedHe!: Date
  dateBaptized!: Date
  church!: Church
  dateAdmission!: Date
  dateConversion!: Date
  churchOrigin!: string
  churchOriginCity!: string
  churchOrigiNCity_uf!:string
  nameSpouse!: string
  children!: string
  amountSon!: number
}
