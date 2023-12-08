import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';

export const resourceInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  let intReq = req;
  const token = tokenService.getAccessToken();
  if(token != null && req.url.includes('resource')) {
    intReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + token)});
  }
  return next(intReq);
};
