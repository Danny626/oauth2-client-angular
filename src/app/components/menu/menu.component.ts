import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { Router, RouterLink } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  authorize_uri = environment.authorize_uri;

  params: any = {
    client_id: environment.client_id,
    redirect_uri: environment.redirect_uri,
    scope: environment.scope,
    response_type: environment.response_type,
    response_mode: environment.response_mode,
    code_challenge_method: environment.code_challenge_method,
    code_challenge: environment.code_challenge,
  }

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin(): void {
    const httpParams = new HttpParams({fromObject: this.params})
    const codeUrl = this.authorize_uri + httpParams.toString();
    console.log('codeUrl', codeUrl);
    location.href = codeUrl;
  }

}
