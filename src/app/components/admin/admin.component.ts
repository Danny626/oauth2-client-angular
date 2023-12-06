import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  message = '';

  constructor(
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {
    this.resourceService.admin().subscribe({
      next: (data) => this.message = data.message,
      error: (err) => console.log(err)
    });
  }
}
