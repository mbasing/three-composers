let app = angular.module("ComposersList", []);
app.controller("ComposerController",function($scope){
    $scope.pieces = [
       {"pic": "assets/bach.jfif", "composer": "Bach", "title": "Goldberg Variations"},
       {"pic": "assets/bach.jfif", "composer": "Bach", "title": "Harpsichord Concerto"},
       {"pic": "assets/bach.jfif", "composer": "Bach", "title": "Brandenburg Concerto"},
       {"pic": "assets/bach.jfif", "composer": "Bach", "title": "Air On G"},
       {"pic": "assets/bach.jfif", "composer": "Bach", "title": "Contana #85"},
       {"pic": "assets/beethoven.jfif", "composer": "Beethoven", "title": "Symphony #9"},
       {"pic": "assets/beethoven.jfif", "composer": "Beethoven", "title": "Fur Elise"},
       {"pic": "assets/beethoven.jfif", "composer": "Beethoven", "title": "Moonlight Sonata"},
       {"pic": "assets/beethoven.jfif", "composer": "Beethoven", "title": "Violin Concerto"},
       {"pic": "assets/beethoven.jfif", "composer": "Beethoven", "title": "Egnant Overture"},
       {"pic": "assets/mozart.jfif", "composer": "Mozart", "title": "Eine Kleine Machtmusic"},
       {"pic": "assets/mozart.jfif", "composer": "Mozart", "title": "Piano Concerto #21"},
       {"pic": "assets/mozart.jfif", "composer": "Mozart", "title": "Don Giovanni"},
       {"pic": "assets/mozart.jfif", "composer": "Mozart", "title": "Jupiter Symphony"},
       {"pic": "assets/mozart.jfif", "composer": "Mozart", "title": "larinet Concerto #3"}
    ];
});

