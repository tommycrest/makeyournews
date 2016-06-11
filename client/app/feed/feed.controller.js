'use strinct';

(function() {
    
 class FeedController {
     
   constructor($http, $scope, $sce, feedService) {  
    this.$http = $http;
    this.feedService = feedService;
    this.feeds = [];
    this.$sce = $sce;
   }
     
   $onInit(){
     console.log("FeedController onInit()");
     console.log(this);
   }

   loadFeed(feedSrc) {
        console.log("FeedController.loadFeed()");
        //console.log(feedSrc);
        console.log("feedSrc "+feedSrc);
        var feed = [];
        this.feedService.parseFeed(feedSrc).then( response => {
            console.log(response);
            this.feeds=response.data.responseData.feed.entries;
        });
    }
     
    getHtml(html) {
        //console.log("FeedController.gethtml(html) ");
        return this.$sce.trustAsHtml(html);
    }
     
 }
 angular.module('makeyournewsApp')
     .component('feed', {
        templateUrl: 'app/feed/feed.html',
        controller: FeedController
 });
    
})();

