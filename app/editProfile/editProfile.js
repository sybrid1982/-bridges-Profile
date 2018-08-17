'use strict';

const editProfile = {
    templateUrl: 'app/editProfile/editProfile.html',
    controller: ['profileFactory', '$location', function(ProfileFactory, $location){
        let vm = this;
        vm.profile = ProfileFactory.getUserProfile();
        vm.setUserProfile = (profile) => {
            ProfileFactory.setUserProfile(profile);
            $location.path('/profile');
        }
    }]
}

angular.module('app').component('editProfile', editProfile);