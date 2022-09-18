app.controller('home', function($scope, $rootScope) {
    $rootScope.$on('sendCategory', function(event, data) {
        console.log(data);
        getProducts(data.CategoryID)
    })

    function getProducts(CategoryID) {
        let oData = JSON.stringify({CategoryID: CategoryID});
        postRequest(oData, oURL.productAPI, 'getProducts')
            .then((data) => {
                if (data) {
                    $scope.$apply($scope.test = data.result);
                    console.log("products", $scope.test);
                }
            })
    }
})