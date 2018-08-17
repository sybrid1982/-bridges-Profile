angular.module('app').config(($routeProvider)=> {
    $routeProvider
        .when("/", {
            template: `<user-profile></user-profile>`
        })
        .when("/profile", {
            template: `<user-profile></user-profile>`
        })
        .when("/edit-profile", {
            template: `<edit-profile></edit-profile>`
        });
})