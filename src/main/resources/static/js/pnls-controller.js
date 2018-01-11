var pnlsApp= angular.module('PnlsApp', []);

pnlsApp.controller('PnlsController', 
    function($scope, $http, $window) {
        $scope.daftarPnls = [];
        $scope.updateDaftarPnls = function(){
            $http.get('/daftar-penulis').then(sukses, gagal);
            
            function sukses(response){
            	console.log(response);
            	//isidata mahasiswa
            	$scope.daftarPnls = response.data;
            };
            function gagal(response){
            	console.log(response);
        	};
        };

        $scope.ubah = function(pnls){
            //console.log(mhs);
            $window.location.href="/form-edit?id=" + pnls.id;
        };
        
        $scope.hapus = function(pnls){
            $http.delete('/hapus-data/' + pnls.id).then(sukses, gagal);

            function sukses(response){
                $scope.updateDaftarPnls();
            } ;

            function gagal(response){
                console.log(response);
            } ;
        };

        $scope.keluar = function() {
            $http.get('/keluar').then(sukses, gagal);

            function sukses(response){
                $window.location.href="/";
                
                
            };
            function gagal(response){
                console.log(response);
            };
        

        };

        $scope.updateDaftarPnls();
    });
pnlsApp.controller('FormController', 
    function($scope, $http, $window){
        $scope.simpan = function() {
            //console.log('nim : '+ $scope.mhs.nim);
            //console.log('nama : '+ $scope.mhs.nama);
            //console.log('jurusan : '+ $scope.mhs.jurusan);

            $http.post('/tambah-pnls', $scope.pnls).then(sukses, gagal);

            function sukses(response){
                $window.location.href = '/';
            };
            function gagal(response){
                console.log(response);
            };
        };

        $scope.batal = function() {
            $window.location.href = '/';
        };
    });