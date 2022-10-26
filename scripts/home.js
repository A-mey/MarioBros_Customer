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
                        x["starRatings"] = getStarRatings(x.Rating, 5);
                    })
                    $scope.$apply($scope.test = data.result);
                    console.log($scope.test);
                }
            })
    }

    $scope.book = function() {
        if ($scope.isUserLoggedin) {
            $scope.showBookingForm = true;
        }
        else {
            notificationSuccess("You're not logged in");
        }
    }

    $scope.closeBookingForm = function() {
        $scope.showBookingForm = false;
    }

    $scope.openModal = function(x) {
        $scope.showModal = true;
        $scope.selectedProduct = {
            modalImage: x.Image,
            description: x.Description,
            title: x.Product,
            price: x.Price,
            time: x.Time,
            ratings: x.Rating,
            starRatings: getStarRatings(x.Rating, 5)
        }
        
        // $scope.modalImage = x.Image;
        // $scope.description = x.Description;
        // $scope.title = x.Product;
        // $scope.Price = x.Price;
        // $scope.Time = x.Time;
        // $scope.ratings = getStarRatings(x.Rating, 5);
    }

    $scope.bookNow = function(address, phoneNo, time) {
        if (address && phoneNo && time) {
            
        }
    }

    $scope.closeProductModal = function() {
        $scope.showModal = false;
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