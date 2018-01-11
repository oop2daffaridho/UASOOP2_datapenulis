pnlsApp.controller('EditController',
	function($scope, $window, $http){


		$scope.pnls={};

		$scope.simpan = function() {
			$http.post('/tambah-pnls', $scope.pnls).then(sukses, gagal);

            function sukses(response){
                $window.location.href = '/';
            };
            function gagal(response){
                console.log(response);
            };
		};

		$scope.batal = function() {
			$window.location.href = "/";
		};

		$scope.updateById = function() {
			id=$window.location.search.split('=')[1];
			//console.log(nim);
			$scope.pnls.id = id;

			$http.get("/get-pnls-by-id/" + id).then(sukses, gagal);

			function sukses(response){
                //$window.location.href = '/';
                $scope.pnls = response.data;
            };
            function gagal(response){
                console.log(response);
            };
		};

		$scope.updateById();

	});