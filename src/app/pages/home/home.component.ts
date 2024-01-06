import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/Person';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  members:Person[] = []
  frmPerson!: FormGroup;
  displayedColumns: string[] = ['ri', 'name', 'email', 'office', 'congregation', 'sector' ,'regional', 'actions'];
  dataSource = new MatTableDataSource<Person>();

  constructor(
    private service:ApiService,
    private frmBuilder: FormBuilder,
    private router: Router
    ) {
      this.createFormPersonBlank();
    }

  ngOnInit(): void {
    this.getAllMembers()
  }

  createFormPersonBlank(){
    this.frmPerson = this.frmBuilder.group({
      ri: [''],
      name: [''],
      email: [''],
      office: [''],
      congregation: [''],
      sector: [''],
      regional: ['']
    })
  }

  getAllMembers(){
    this.service.getAllMembers().subscribe({
      next:(data: Person[]) => {
        this.members = data;
        this.dataSource = new MatTableDataSource(this.members)
        console.log(this.members)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  abrirEditar(id:number){
    this.router.navigate([`/editar/${id}`]);
    console.log(id);
  }

  cadastro(){
    this.router.navigate(['/cadastro']);
  }

}
