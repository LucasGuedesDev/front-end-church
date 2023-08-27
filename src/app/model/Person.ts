import { Church } from "./Church"

export class Member{
  id?: number
  ri!: string
  name!: string
  office!: string
  consecrationDate!: Date
  dateBirth!: Date
  naturalness!: string
  uf!: string
  sex!: string
  cep!: string
  address!: string
  neighborhood!: string
  city!: string
  country!: string
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
  churchCity!: string
  churchUf!: string
  dateAdmission!: Date
  dateConversion!: Date
  churchOrigin!: string
  churchOriginCity!: string
  churchOrigiNCity_uf!:string
  nameSpouse!: string
  children!: string
  amountSon!: number
}
