angular.module("quantChange", [])
	.controller("qc", ["$scope", "$compile", function ($scope, $compile) {
		$scope.cost = 19.99;
		$scope.name = "Hottest Trend by Brittany";
		$scope.quant = 1;
		//$scope.calc = (+$scope.cost * +$scope.quant);
		
		$scope.changeQuantUp = function (){
			$scope.quant ++;
		};
		$scope.changeQuantDown = function (){
			if ($scope.quant > 0){
				$scope.quant --;
			}
		};
		$scope.update = function (){
			$(".defaultCost").hide();
			$scope.updated = +$scope.quant * +$scope.cost;
		};

		$scope.selectedItems = [
			{
				"cost": "19.99"

			},
			{
				"cost": "29.99"

			},
			{
				"cost": "39.99"

			},
			{
				"cost": "49.99"

			}
		]

	}]);