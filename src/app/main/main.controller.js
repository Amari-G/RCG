'use strict';

angular.module('rcg')
  .controller('MainCtrl', function ($scope, $timeout) {
    $scope.rcgItems = [
      {
        'title': 'Banana Peel',
        'imageUrl': 'http://a3145z1.americdn.com/wp-content/uploads/2014/10/the-benefits-of-banana-banana-peel.jpg',
        'type': 'C'
      },
      {
        'title': 'Soda Can',
        'imageUrl': 'http://images2.pics4learning.com/catalog/c/coke.jpg',
        'type': 'R'
      },
      {
        'title': 'Empty plastic bag',
        'imageUrl': 'http://rbrua3v80lj2rulsf7iqfnpmf.wpengine.netdna-cdn.com/wp-content/uploads/2015/02/Plastic-Bag.jpg',
        'type': 'G'
      },
      {
        'title': 'Banana Peel',
        'imageUrl': 'http://a3145z1.americdn.com/wp-content/uploads/2014/10/the-benefits-of-banana-banana-peel.jpg',
        'type': 'C'
      },
      {
        'title': 'Soda Can',
        'imageUrl': 'http://images2.pics4learning.com/catalog/c/coke.jpg',
        'type': 'R'
      },
      {
        'title': 'Empty plastic bag',
        'imageUrl': 'http://rbrua3v80lj2rulsf7iqfnpmf.wpengine.netdna-cdn.com/wp-content/uploads/2015/02/Plastic-Bag.jpg',
        'type': 'G'
      },
      {
        'title': 'Banana Peel',
        'imageUrl': 'http://a3145z1.americdn.com/wp-content/uploads/2014/10/the-benefits-of-banana-banana-peel.jpg',
        'type': 'C'
      },
      {
        'title': 'Soda Can',
        'imageUrl': 'http://images2.pics4learning.com/catalog/c/coke.jpg',
        'type': 'R'
      },
      {
        'title': 'Empty plastic bag',
        'imageUrl': 'http://rbrua3v80lj2rulsf7iqfnpmf.wpengine.netdna-cdn.com/wp-content/uploads/2015/02/Plastic-Bag.jpg',
        'type': 'G'
      },
      {
        'title': 'Banana Peel',
        'imageUrl': 'http://a3145z1.americdn.com/wp-content/uploads/2014/10/the-benefits-of-banana-banana-peel.jpg',
        'type': 'C'
      },
    ];

    $scope.points = 0;
    $scope.currentItemIndex = 0;

    // move to the next question
    $scope.nextQuestion = function() {
      $scope.currentItemIndex += 1;
      updateCurrentItem();
    };

    // move back to the previous question
    $scope.previousQuestion = function() {
      $scope.currentItemIndex -= 1;
      updateCurrentItem();
    };

    // keep track of which questions have already been answered correctly
    $scope.answered = {};

    // keep track of the currently displayed item
    $scope.currentItem = $scope.rcgItems[$scope.currentItemIndex];

    // pick which type of container to throw item away in:
    //  (R)ecycle, (C)ompost, (G)arbage
    $scope.pick = function(type, currentItem) {
      var pickedCorrectContainer = currentItem.type === type;
      if (pickedCorrectContainer) {

        var alreadyThrownAwayCorrectly = $scope.answered[$scope.currentItemIndex];
        if (alreadyThrownAwayCorrectly) return;

        var answeredEverythingCorrectly = $scope.points + 10 > $scope.rcgItems.length * 10;
        if (answeredEverythingCorrectly) return;

        $scope.points += 10;
        $scope.answered[$scope.currentItemIndex] = true;
        $scope.nextQuestion();
      }
      else {
        $scope.wrongAnswer = true;
        $timeout(function() {
          $scope.wrongAnswer = false;
        }, 1000);
      }
    };

    function updateCurrentItem() {
      $scope.currentItem = $scope.rcgItems[$scope.currentItemIndex];
    }
  });
