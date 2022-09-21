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
                    data.result.forEach(x => {
                        x.Rating = getStarRatings(x.Rating, 5);
                    })
                    $scope.$apply($scope.test = data.result);
                    console.log($scope.test);
                }
            })
    }

    function getStarRatings(x, n) {
        let b = [];
    
    let i=0;
    while (i < n) {
    
        if (x > 1) {
            b.push(1)
        }
        else {
            
            b.push(x);
            x = x==0.5? 0: x;
        }
        if (x>0){
            x = x - 1;
        }
        
        i++;
    }
    return b;
    }
})