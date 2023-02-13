import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { User } from '../../../shared/interfaces/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user!: User;
  userImage: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params.id)
        this.dataService.getUserByID(params.id).subscribe((serverItem) => {
          this.user = serverItem;
          this.userImage = this.user.image;
        });
    });
  }

  fullName(first: string, maiden: string, last: string) {
    return first + ' ' + maiden + ' ' + last;
  }

  getAddress(address: any): string {
    let fullAddress =
      address.address +
      ' ' +
      address.city +
      ', ' +
      address.postalCode +
      ' ' +
      address.state +
      '.';
    return fullAddress;
  }
}
