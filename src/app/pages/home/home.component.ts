import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from 'src/app/model/Person';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  members:Member[] = []
  frmPerson!: FormGroup;
  displayedColumns: string[] = ['ri', 'name', 'email', 'office', 'congregation', 'sector' ,'regional'];
  dataSource = new MatTableDataSource<Member>();

  constructor(
    private service:ApiService,
    private frmBuilder: FormBuilder
    ) {
      this.createFormPersonBlank();
    }

  ngOnInit(): void {
    this.getAllMembers()
  }

  createFormPersonBlank(){
    this.frmPerson = this.frmBuilder.group({
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
      next:(data: Member[]) => {
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

}
