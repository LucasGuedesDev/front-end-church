import { Cep } from "./Cep"
import { Church } from "./Church"

export class Person{
  id?: number
  ri!: string
  name!: string
  type!: string
  isMember!: boolean
	isChurchWorker!: boolean
  office!: string
  consecrationDate!: Date
  dateBirth!: Date
  naturalness!: string
  uf!: string
  gender!: string
  cep!: Cep
  address!: string
	neighborhood!: string
	city!: string
	numberHome!: string
  country!: string
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
