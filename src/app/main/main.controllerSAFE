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
        'title': 'Coffee grounds',
        'imageUrl': 'https://shanegenziuk.files.wordpress.com/2012/08/coffee-filter.jpg',
        'type': 'C'
      },
      {
        'title': 'Diaper',
        'imageUrl': 'http://img.thrfun.com/img/083/177/diaperpail_s1.jpg',
        'type': 'G'
      },
      {
        'title': 'Bunch of Plastic Bags',
        'imageUrl': 'http://myplasticfreelife.com/images/plastic-bags.jpg',
        'type': 'R'
      },
      {
        'title': 'Junk Mail',
        'imageUrl': 'https://si.wsj.net/public/resources/images/OB-PZ529_junkma_G_20111006070316.jpg',
        'type': 'R'
      },
      {
        'title': 'Food containers with food/dirty',
        'imageUrl': 'http://projects.seattletimes.com/2015/compost/assets/takeout.jpg',
        'type': 'G'
      },
	  {
        'title': 'Sandwich',
        'imageUrl': 'http://www.motherjones.com/files/sandwich-630.gif',
        'type': 'C'
      },
      {
        'title': 'CDs',
        'imageUrl': 'http://gascv.org/wp-content/uploads/2013/12/cds.png',
        'type': 'G'
      },
      {
        'title': 'Pizza Box',
        'imageUrl': 'https://wrappartners-production.s3.amazonaws.com/preview-images/b3/35746afaa34037.jpg',
        'type': 'C'
      },
      {
        'title': 'Clean To-Go Plastic Container',
        'imageUrl': 'http://greenpaperproducts.com/images/biodegradable/containers/compostable-clear-clamshell-med-PLA110.jpg',
        'type': 'R'
      },
	  {
        'title': 'Pizza',
        'imageUrl': 'http://i.istockimg.com/file_thumbview_approve/1202816/3/stock-photo-1202816-pizza-half-eaten-slice.jpg',
        'type': 'C'
      },
	  {
        'title': 'Empty Cups',
        'imageUrl': 'http://earthbabyblog.org/wp-content/uploads/2013/01/starbucks-paper-cup.jpg',
        'type': 'R'
      },
      {
        'title': 'Plastic Bottle Caps',
        'imageUrl': 'http://image.made-in-china.com/2f0j00EelafRJbYmkG/Plastic-Bottle-Cap-for-Drinking-Water-Bottle.jpg',
        'type': 'G'
      },
      {
        'title': 'Egg carton',
        'imageUrl': 'http://www.ckfinc.com/Portals/0/food-packaging/pulp-egg-cartons/06524.jpg',
        'type': 'C'
      },
	  {
        'title': 'Uncoated Paper Plates',
        'imageUrl': 'http://www.popuppoems.com/wp-content/gallery/street-treats-found-stuff/food-paper-plate-street-3.jpg',
        'type': 'C'
      },
      {
        'title': 'kleenex/tissues',
        'imageUrl': 'http://greengroundswell.com/wordpress/wp-content/uploads/2013/12/Box-of-Paper-Facial-Tissues-with-Pile-of-Used-Tissues-190.jpg',
        'type': 'C'
      },
      {
        'title': 'Rusted Metal pieces',
        'imageUrl': 'http://idahoptv.org/dialogue4kids/images/season11/chemistry/rust.jpg',
        'type': 'R'
      },
	  {
        'title': 'Bones',
        'imageUrl': 'http://purposefullfood.com/wp-content/uploads/2014/12/chicken-bones.jpg',
        'type': 'C'
	  }
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

        var answeredEverythingCorrectly = $scope.points + 20 > $scope.rcgItems.length * 20;
        if (answeredEverythingCorrectly) return;

        $scope.points += 5;
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
