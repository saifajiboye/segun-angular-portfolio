import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioChatService {
  private apiUrl = 'https://dfdx6sfncjqmkefbzsecdwpttm0ysafc.lambda-url.us-east-1.on.aws';

  constructor(private http: HttpClient) {}

  ask(question: string): Observable<string> {
    return this.http.post<any>(this.apiUrl, { question }).pipe(
      map(res => {
        const parsed = typeof res.body === 'string' ? JSON.parse(res.body) : res;
        return parsed.answer;
      })
    );
  }
}
