module.exports = {
    scrollToElement: function(elm, bottomOfViewableArea, topOfViewAbleArea){
        function scrollElementToMiddle(){
            if (document.body.scrollHeight < document.body.clientHeight) {
                return;
            }
            //because of the fixed elements (header, footer) on some pages an area is not viewable (top and bottom of the page)
            //so it is necessary to scroll the element (eg: to be clicked) to the viewable area (center)
            //the following constants specify the viewable area top and bottom
            //so this function will scroll the actual element into this area
            var viewableAreaTop = arguments[2] ? arguments[2] : 200;
            var viewableAreaBottom = arguments[1] ? arguments[1] : 300;

            var elmPosFromTop = arguments[0].getBoundingClientRect().top;

            if (elmPosFromTop<viewableAreaTop){
                window.scrollBy(0,elmPosFromTop-viewableAreaTop);
            }
            else if(elmPosFromTop>viewableAreaBottom){
                window.scrollBy(0,elmPosFromTop-viewableAreaBottom);
            }

        }

        return browser.executeScript(scrollElementToMiddle, elm.getWebElement(), bottomOfViewableArea, topOfViewAbleArea).then(function() {
            return protractor.promise.fulfilled();
        }, function() {
            console.error('ERROR CAUSE: scrolling to element is failed!');
            return protractor.promise.fulfilled();
        });
    },
    checkHasClass: function (element, class_name) {
        // custom function returns true/false depending if selector has class name

        // split classes for selector into a list
        return element.getAttribute('class').then(function(classes){
            var classes = classes.split(' ');
            if (classes.indexOf(class_name) > -1) {
                return true;
            }
            return false;
        });
    },
    every: function (array, conditionPromise, notFoundCallback) {
        //this function is for going through multiple elements, but we only need to find one, so dont go through all of them
        //the promise chain iteration stops, when the conditionPromise is fullfiled (and not rejected)

        var deferred = protractor.promise.defer();
        var iterate = function(index) {
            if(array.length > index ) {
                conditionPromise(array[index], index).then(function(result) {
                    deferred.fulfill(result);
                }, function(){
                    //the promise was rejected so continue with the next iteration
                    iterate(index + 1);
                })
            }
            else {
                //we have reached the end of the iteration, and have not found a match
                if (notFoundCallback) {
                    notFoundCallback();
                }
                deferred.fulfill();
            }
        };
        iterate(0);
        return deferred.promise;
    },
    forEach: function (array, promise) {
        //this function is for going through all the element, that need to be resolved
        //iterating through all the elements, no matter what is the promise result
        var iterate = function(index) {
            if(array.length > index) {
                return promise(array[index], index).then(function() {
                    return iterate(index + 1);
                }, function() {
                    return iterate(index + 1);
                })
            }
            else {
                return protractor.promise.fulfilled();
            }
        };
        return iterate(0);
    }
};
