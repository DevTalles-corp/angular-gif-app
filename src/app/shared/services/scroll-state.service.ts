import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollStateService {
  trendingScrollState = signal(0);

  // pagesScrollState: Record<string, number> = {
  //   'page1': 1000,
  //   'page2': 0,
  //   'aboutPage': 50,
  //   'page20': 0,
  // }
}
