// shared-data.service.ts
import { BehaviorSubject } from 'rxjs';

class SharedDataService {
  private sharedDataSubject = new BehaviorSubject<any>(null);

  setData(data: any) {
    this.sharedDataSubject.next(data);
  }

  getData() {
    return this.sharedDataSubject.asObservable();
  }
}

export const sharedDataService = new SharedDataService();
