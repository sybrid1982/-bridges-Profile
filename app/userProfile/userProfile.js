'use strict';

const userProfile = {
    templateUrl: `/app/userProfile/userProfile.html`,
    controller: ['profileFactory', '$location', function(ProfileFactory, $location){
        let vm = this;
        vm.profile = {
            name: 'Grant Chirpus',
            email: 'grant@grandcircus.co',
            text: 'I am pretty cool.  I a great job.  I like to play Tetris.  I am pretty ok at AngularJS.'
        }
        vm.profile = ProfileFactory.getUserProfile();
        vm.editUserProfile = () => {
            $location.path('/edit-profile');
        }
    }]
}

angular.module('app').component('userProfile', userProfile);