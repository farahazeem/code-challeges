import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { User } from '../../../shared/interfaces/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private service: DataService) {}
  users: User[] = [];

  ngOnInit() {
    this.service.getAllUsers().subscribe((users: any) => {
      this.users = users.users;
    });
  }
}
