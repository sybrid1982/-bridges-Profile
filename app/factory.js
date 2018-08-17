'use strict';

function ProfileFactory() {
    let currentProfile = {
        name: 'Grant Chirpus',
        email: 'grant@grandcircus.co',
        text: 'I am pretty cool.  I a great job.  I like to play Tetris.  I am pretty ok at AngularJS.'
    }
    const setUserProfile = (profile) => {
        currentProfile = angular.copy(profile);
    }

    const getUserProfile = () => {
        return angular.copy(currentProfile);
    }

    return {
        setUserProfile,
        getUserProfile
    };
}

angular.module('app').factory('profileFactory', ProfileFactory);