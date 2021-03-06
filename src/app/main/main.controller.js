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
        'imageUrl': 'https://img.clipartfox.com/f52def27840220eafc18ac0bede81b86_cnd-shellac-satin-pajamas-empty-egg-carton-clipart_1280-804.jpeg',
        'type': 'C'
      },
	  {
        'title': 'Uncoated Paper Plates',
        'imageUrl': 'https://i5.walmartimages.com/asr/ff798b27-da26-4364-9467-aeafc4ead821_1.e56eae4a31c0d75cbc201524ef34e26d.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
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
        'title': 'Meat',
        'imageUrl': 'assets/images/Meat.jpg',
        'type': 'C'
      },
	  {
        'title': 'Bones',
        'imageUrl': 'assets/images/Bones.png',
        'type': 'C'
      },
	  {
        'title': 'Animal Waste',
        'imageUrl': 'assets/images/Animal-waste.jpg',
        'type': 'C'
      },
	  {
        'title': 'Milk Carton',
        'imageUrl': 'assets/images/Milk-Carton.jpg',
        'type': 'R'
      },
	  {
        'title': 'Alkaline Batteries',
        'imageUrl': 'assets/images/Batteries.jpg',
        'type': 'G'
      },
	  {
        'title': 'Carpet',
        'imageUrl': 'assets/images/Carpet.jpg',
        'type': 'C'
      },
	  {
        'title': 'Christmas Tree',
        'imageUrl': 'assets/images/Christmas-Tree.jpg',
        'type': 'S'
      },
	  {
        'title': 'Electronics',
        'imageUrl': 'assets/images/Electronics.jpg',
        'type': 'S'
      },
	  {
        'title': 'Flourescent Lights',
        'imageUrl': 'assets/images/Flourescent-Lights.jpg',
        'type': 'S'
      },
	  {
        'title': 'Furniture',
        'imageUrl': 'assets/images/Furniture.jpg',
        'type': 'S'
      },
	  {
        'title': 'Lawn Mower',
        'imageUrl': 'assets/images/Lawn-Mower.jpg',
        'type': 'S'
      },
	  {
        'title': 'Medicines',
        'imageUrl': 'assets/images/Medicines.jpg',
        'type': 'S'
      },
	  {
        'title': 'Pots and Pans',
        'imageUrl': 'assets/images/Pots-and-Pans.jpg',
        'type': 'S'
      },
	  {
        'title': 'Microwave Ovens',
        'imageUrl': 'assets/images/Microwave-Ovens.jpg',
        'type': 'S'
      },
	  {
        'title': 'Motor Oil',
        'imageUrl': 'assets/images/Motor-Oil.jpg',
        'type': 'S'
      },
	  {
        'title': 'Paint',
        'imageUrl': 'assets/images/Paint.jpg',
        'type': 'S'
      },
	  {
        'title': 'Pizza Box',
        'imageUrl': 'assets/images/Pizza-box.jpg',
        'type': 'C',
      },
	  {
        'title': 'Pesticides',
        'imageUrl': 'assets/images/Pesticides.jpg',
        'type': 'S'
      },
	  {
        'title': 'Printer Cartridges',
        'imageUrl': 'assets/images/Printer-cartridges.jpg',
        'type': 'S'
      },
	  {
        'title': 'Propane Tanks',
        'imageUrl': 'assets/images/Propane-Tanks.jpg',
        'type': 'S'
      },
	  {
        'title': 'Needles',
        'imageUrl': 'assets/images/Needles.jpg',
        'type': 'S'
      },
	  {
        'title': 'TVs',
        'imageUrl': 'assets/images/Tvs.jpg',
        'type': 'S'
      },
	  {
        'title': 'Textiles',
        'imageUrl': 'assets/images/Textiles.jpg',
        'type': 'S'
      },
	  {
        'title': 'Tires',
        'imageUrl': 'assets/images/Tires.jpg',
        'type': 'S'
      },
	  {
        'title': 'Vehicles',
        'imageUrl': 'assets/images/Vehicles.jpg',
        'type': 'S'
      },
	  {
        'title': 'Wood',
        'imageUrl': 'assets/images/Wood.jpg',
        'type': 'S'
      },
	  {
        'title': 'Incandescent Light Bulbs',
        'imageUrl': 'assets/images/Light-Bulbs.jpg',
        'type': 'S'
      },
	  {
        'title': 'CDs and DVDs',
        'imageUrl': 'assets/images/CDs-and-DVDs.jpg',
        'type': 'S'
      },
	  {
        'title': 'Ceramics',
        'imageUrl': 'assets/images/Ceramics.jpg',
        'type': 'S'
      },
	  {
        'title': 'Broken Glass',
        'imageUrl': 'assets/images/Broken-Glass.jpg',
        'type': 'S'
      },
    ];

    $scope.points = 0;
    $scope.currentItemIndex = Math.floor(Math.random() * ($scope.rcgItems.length - 1));

    // move to the next question
    $scope.nextQuestion = function() {
      $scope.currentItemIndex = Math.floor(Math.random() * ($scope.rcgItems.length - 1));
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

        $scope.points += 50;
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
	
	$scope.restart = function (){
		$scope.points = 0;
		console.log("Restarting Quiz");
	}

    function updateCurrentItem() {
      $scope.currentItem = $scope.rcgItems[$scope.currentItemIndex];
    }
  });
