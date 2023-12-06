import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-authorized',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authorized.component.html',
  styleUrl: './authorized.component.css'
})
export class AuthorizedComponent implements OnInit {

  code = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private tokenService: TokenService
  ) {}
  
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      console.log('data: ', data);
      this.code = data['code'];
      this.getToken();
    });
  }

  getToken(): void {
    this.authService.getToken(this.code).subscribe(
      data => {
        this.tokenService.setTokens(data.access_token, data.refresh_token);
      },
      err => {
        console.log(err);
      }
    )
  }

}
