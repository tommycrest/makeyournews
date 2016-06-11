//////////////////////////////////////////////////////////////////////////////////////
// feedService gathering the information from sources from the net
//////////////////////////////////////////////////////////////////////////////////////
'use strinct';

angular.module('makeyournewsApp').service('feedService',['$http','$resource', function($http){
    return {
        parseFeed: function(url) {
            // return the parsed feed in json format
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);