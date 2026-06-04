import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface WordResponse {
  word: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class BedrockService {
  private apiUrl = 'https://j3zjozjoa5xymb33vt7hkx2gru0cabif.lambda-url.us-east-1.on.aws';
  private cache: WordResponse[] = [];

  constructor(private http: HttpClient) {}

  private fetchBatch(): Observable<WordResponse[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(res => typeof res.body === 'string' ? JSON.parse(res.body) : res),
      tap(words => this.cache.push(...words))
    );
  }

  getWord(): Observable<WordResponse> {
    if (this.cache.length > 0) {
      const index = Math.floor(Math.random() * this.cache.length);
      return from([this.cache.splice(index, 1)[0]]);
    }
    return this.fetchBatch().pipe(
      map(() => this.cache.splice(Math.floor(Math.random() * this.cache.length), 1)[0])
    );
  }
}
