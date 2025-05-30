import { Subject } from 'rxjs';

export const sharedData$ = new Subject<string>();

export const sharedDataService = {
  sharedData$,
};
