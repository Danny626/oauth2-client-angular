import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  message = '';

  constructor(
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.resourceService.user().subscribe({
      next: (data) => this.message = data.message,
      error: (err) => console.log(err)
    });
  }
}
