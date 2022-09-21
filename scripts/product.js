app.controller('product', function($scope, $rootScope) {
    loadCategories();

    function loadCategories() {
        getRequest("", oURL.productAPI, 'getCategories')
            .then((data) => {
                if (data) {
                    $scope.$apply($scope.categories = data.result);
                    console.log("categories", $scope.categories);
                    let defaultCategory = $scope.categories[0];
                    dropdown(defaultCategory);
                }
            })
    }

    // function getProducts(CategoryID) {
    //     let oData = JSON.stringify({CategoryID: CategoryID});
    //     postRequest(oData, oURL.productAPI, 'getProducts')
    //         .then((data) => {
    //             if (data) {
    //                 //$scope.test = data.result;
    //                 console.log("products", $scope.test);
    //             }
    //         })
    // }

    // function getProducts() {
    //     getRequest("", oURL.productAPI, 'getProducts')
    //         .then((data) => {
    //             if (data) {
    //                 $scope.products = data.result;
    //                 console.log("products", $scope.products);
    //             }
    //         })
    // }

    $scope.dropdown = dropdown;
    function dropdown(x) {
        //let categoryID = x.CategoryID;
        //let productList = $scope.products.filter(a => a.ParentID == categoryID);
        //$scope.$emit('sendCategory', x);
        $rootScope.$emit('sendCategory', x);
    }

    $scope.test = function() {
        console.log('xxxx')
    }
})