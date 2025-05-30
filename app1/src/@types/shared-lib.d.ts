// src/shared-lib.d.ts
declare module 'shared-lib' {
    import { Subject } from 'rxjs';
  
    export const sharedData$: Subject<string>;
  
    export const sharedDataService: {
      sharedData$: Subject<string>;
    };
  }
  