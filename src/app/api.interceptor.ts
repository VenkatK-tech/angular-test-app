import { HttpHandler, HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const APIInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: any) => {
  const  baseUrl = 'https://6790bcabaf8442fd737777c8.mockapi.io/api';

  const newHeader = req.headers.append('Content-Type', 'application/json');
  const request = req.clone({ url: `${baseUrl}${req.url}`, headers: newHeader } );
  return next(request);
};
