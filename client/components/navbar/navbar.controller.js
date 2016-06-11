'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  } /*,{
    'title': 'Feed',
    'state': 'feed'
  }*/];

  isCollapsed = true;
  //end-non-standard

  ///////////////////////////////////////////////////////
  // languages available for the news from Google News
  ///////////////////////////////////////////////////////
  edition;

  constructor($scope, Auth, localStorageService, $http) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.localStorageService = localStorageService;
    this.$scope = $scope;
    this.$http = $http;
    this.languages = [];
	
	//consuming the rest api for the language 
	$http.get('api/languages').then( response => {
		$scope.edition = response.data;
        this.languages = $scope.edition;
	});
  }

  //Getting the language edtion available on the platform
  getLanguages() {
     return this.$scope.edition;
  }

  //configure after the language choose from platform
  configureSessionStorage( language ) {
      for (var value of this.$scope.edition) {
          if( value.language == language ) {
            this.localStorageService.set("ned", value.ned);
            this.localStorageService.set("hl", value.hl);
            this.localStorageService.set("language", value.language);
			this.localStorageService.set("_id", value._id);
          }
      }
  }

  ///////////////////////////////////////////////////////
  // save() save the configuration of the language 
  ///////////////////////////////////////////////////////
  save(language) {
    //console.log("NavbarController.save() "+language);
    this.configureSessionStorage(language);
    this.$scope.$broadcast("REFRESH");
  }
  close() {
	  this.isCollapsed = true;
  }
}

angular.module('makeyournewsApp').controller('NavbarController', NavbarController);
angular.module('makeyournewsApp').filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});