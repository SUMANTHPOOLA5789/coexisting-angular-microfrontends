declare class SharedDataService {
    private sharedDataSubject;
    setData(data: any): void;
    getData(): import("rxjs").Observable<any>;
}
export declare const sharedDataService: SharedDataService;
export {};
