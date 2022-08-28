app.controller('product', function($scope) {
    getCategories();
    getProducts();

    function getCategories() {
        getRequest("", oURL.productAPI, 'getCategories')
            .then((data) => {
                if (data) {
                    $scope.categories = data.result;
                    console.log("categories", $scope.categories);
                }
            })
    }

    function getProducts() {
        getRequest("", oURL.productAPI, 'getProducts')
            .then((data) => {
                if (data) {
                    $scope.products = data.result;
                    console.log("products", $scope.products);
                }
            })
    }

    $scope.dropdown = dropdown;
    function dropdown(x, i) {
        let categoryID = x.CategoryID;
        $scope.productList = $scope.products.filter(a => a.ParentID == categoryID);
        let id = "#ProductList__" + categoryID;
        $(id).show();
    }
})