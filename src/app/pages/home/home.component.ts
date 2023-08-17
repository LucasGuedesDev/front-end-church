import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/model/Cars';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars!:Member[]

  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe({
      next:(data: Member[]) => {
        this.cars = data;
        console.log(this.cars)
      }
    })
  }

}
