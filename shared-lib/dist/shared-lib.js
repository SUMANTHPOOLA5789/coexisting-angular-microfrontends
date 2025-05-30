System.register('sharedLib', ['rxjs'], (function (exports) {
    'use strict';
    var Subject;
    return {
        setters: [function (module) {
            Subject = module.Subject;
        }],
        execute: (function () {

            const sharedData$ = exports("sharedData$", new Subject());
            const sharedDataService = exports("sharedDataService", {
                sharedData$,
            });

        })
    };
}));
