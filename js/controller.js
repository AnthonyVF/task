var appControllers = angular.module("appControllers", []);


// List Page controller
appControllers.controller('listController', function($scope, $http, $filter) {
  	
	// Show loader while awaiting data to load
  	$scope.dataLoaded = false;
  	$http.get('js/feed.json').then(
      function(phones){

      	// Hide loader after data loads
        $scope.dataLoaded = true;
        
        // The Following variable and for loops were created to 
        // deal with the order by, sort and limiting functions on
        // the app. As anguler could not do these as information been 
        // past was in an object. So I got the information for 
        // each of the phones (dataArray) and than past this to another for 
        // loop to push the information i needed to the phone array

        var data = phones.data,
			dataArray = new Array,
        	phoneArray = new Array;
		
		// Data array loop
		for(var ps in data) {
		    dataArray.push(data[ps]);
		}

		// If further in formation is needed just add to items array
		for(var i = 0; i < dataArray.length; i++){
			
			var items = {
			    "imageFront": dataArray[i].imageFront,
				"description": dataArray[i].description,
				"priceFrom": dataArray[i].priceFrom,
				"manufacturer": dataArray[i].manufacturer,
				"rating": dataArray[i].rating,
				"enabled4G": dataArray[i].enabled4G,
				"offercode": dataArray[i].offercode,
				"outOfStock": dataArray[i].outOfStock
			};

			phoneArray.push(items);

		}

		// Set number of phones to show to all 
		var numberPhones = null;

		if($(window).width() < 768){
			// If screen is smaller than tablet show 5 phones. 
			// There is a load more function below that will let user
			// load more phones 
			numberPhones = 5;
		}


		// Phone list array for filtering and sorting
		$scope.phones = phoneArray;
		// Number of phones to show in the list
		$scope.quantity = numberPhones;
		// Default order of phones is my offercode
		$scope.orderProd = 'offercode';

		//Load more feature - This loads all the phones with in the array
			/* 	
				This was went to be a infinite loader but had to 
				drop the idea as didn't have enough time 
			*/
		$scope.loadMore = function() {
  			$scope.quantity = $scope.phones.length;
		}

		// Checkbox Filter Function
			/* This unable to be completed for task */

      });

});

appControllers.controller("detailsController", function($scope, $http, $routeParams)
		{    
			// Show loader while awaiting data to load
			$scope.dataLoaded = false;

			$http.get('js/feed.json').success (function(data){
				// Hide loader after data loads
				$scope.dataLoaded = true;

				$scope.phones = data;
				// Which phone shows the gets the phones parameters that
				// was choosen on the list page to bring in the content 
				// for this phone.
				$scope.whichPhone = $routeParams.phoneId;
			}); 

			// Function Range to show the amount of stars for 
			// the rating the phone has be given.
			$scope.range = function(count){
  			var ratings = []; 
			  for (var i = 0; i < count; i++) { 
			    ratings.push(i) 
			  } 
  			return ratings;
			}

		});

