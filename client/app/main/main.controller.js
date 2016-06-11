'use strict';

(function() {

class MainController {

  constructor($http, socket, $scope, $sce, feedService, localStorageService, $state) {

    this.topic = ['','p','b','n','m','w','t','e','s'];
    this.awesomeThings = {"title":"News", "topic1":"Prima Pagina", "topic2":"Esteri" };
    this.$http = $http;
    this.socket = socket;
    this.$state = $state; //tracking the state of the component 
    this.feeds = []; 
    this.feedService = feedService; //feedservice on Google news
    this.feeds = [];
    this.$sce = $sce; //service for html rendering
    this.localStorageService = localStorageService; //activation of the localstorageservice
    this.q_feed = ""; //query string for Google News
	this.leftToRight = false;
	  
 	//language with writing from right to left
	this.leftToRightLang = ['iw_il','ar_sa','ar_ae','ar_me','ar_lb','ar_eg'];

    //message on broadcast for reload the component page
    $scope.$on("REFRESH", function() {
       $state.go($state.current, {}, {reload: true});
    });
  }

  //onInit --> instance of the controller and loding of the page
  $onInit() {
    if(this.localStorageService.isSupported) { 
        if( this.localStorageService.get("ned") == '' || this.localStorageService.get("ned") == null ) {
            this.localStorageService.set("ned", "it");
            this.localStorageService.set("hl", "it");
            this.localStorageService.set("cf", "all");  	
        }
		
		var el = this.localStorageService.get("ned");
		for( var iter = 0; iter<this.leftToRightLang.length; iter++ ) {
			var element = this.leftToRightLang[iter];
			console.log("element "+element);
			if( element == el ) {
				console.log("left to right reading");
				this.leftToRight = true;
				console.log(this.leftToRight);
			} 
		}
		
		this.getLanguage(this.localStorageService.get("_id"));
    }
    
    //Loading the first tab of the home page
    this.loadFeed(10);
    
  }

  //method for consuming api for the single language type
  getLanguage(id) {
	 this.$http.get('/api/languages/'+id).then(response => {
			this.awesomeThings = response.data;
	}); 
  }
   
  // setting the feed query string src
  settingSrcFeedGoogle( language ) {
    this.q_feed = "";
    //console.log(language);
    switch( language ) {
     case 'it' :
            this.q_feed = "http://news.google.com/news?cf=all&as_qdr=h&hl="+this.localStorageService.get("hl")+"&pz=1&ned="+this.localStorageService.get("ned")+"&output=atom";
        break;
        case 'ru_ru' :
            this.q_feed = "http://news.google.com/news?cf=all&hl=ru&ned=ru_ru&output=atom";
            break;
        case 'EN_UK' :
            this.q_feed = "";
        break;
        case 'EN_US' :
            this.q_feed = "";
        break;
        case 'hk' :
            this.q_feed = "http://news.google.com/news?cf=all&hl=zh-TW&ned=hk&output=atom";
        break;
        case 'kr' :
            this.q_feed = "http://news.google.com/news?cf=all&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom";
        break;
        case 'el_gr' :
            this.q_feed = "http://news.google.com/news?cf=all&as_qdr=h&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom";
        break;
        default :
            this.q_feed = "http://news.google.com/news?as_qdr=h&ned="+this.localStorageService.get("ned")+"&hl="+this.localStorageService.get("hl")+"&output=atom";
        break;
    }
  }

  settingTopicOnLanguages( trequest ) {
       return this.topic[trequest];
  }
  
  //loading the feed from Google separted by topic and with default case head line
  loadFeed(type) {
      console.log("loading feed on home page ");
	  
	  //src feed
      var feedSrc = ""
	  //google news endpoin
	  var endpoint = "http://news.google.com/news?";
	  //topic choose
      var topic;
	  
      switch(type) {
          case 1: 
              this.settingSrcFeedGoogle( this.localStorageService.get("ned") );
              topic = this.settingTopicOnLanguages(this.localStorageService.get("hl"),type);
              feedSrc = this.q_feed +"&topic="+topic;
              break;
          case 2: 
              this.settingSrcFeedGoogle( this.localStorageService.get("ned") );
              topic = this.settingTopicOnLanguages(this.localStorageService.get("hl"),type);
              feedSrc = this.q_feed +"&topic="+topic;
              break;
          case 3: 
              this.settingSrcFeedGoogle( this.localStorageService.get("ned") );
              topic = this.settingTopicOnLanguages(this.localStorageService.get("hl"),type);
              feedSrc = this.q_feed +"&topic="+topic;
              break;
          case 4: 
              this.settingSrcFeedGoogle( this.localStorageService.get("ned") );
              topic = this.settingTopicOnLanguages(this.localStorageService.get("hl"),type);
              feedSrc = this.q_feed +"&topic="+topic;
              break;
          case 5:
              topic = this.settingTopicOnLanguages(type);
			  if( this.localStorageService.get("ned") == "ru_ru") {
				  this.q_feed="cf=all&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic="+topic
				  feedSrc = endpoint + this.q_feed;
			  } else if(this.localStorageService.get("ned") == "kr") { 
				  this.q_feed="cf=all&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic=n";
				  feedSrc = endpoint + this.q_feed;
			  } else if( this.localStorageService.get("ned") == "nl_be" || this.localStorageService.get("ned") == "fr_be" ) {
				  this.q_feed="cf=all&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic=n";
				  feedSrc = endpoint + this.q_feed;
			  } else if( this.localStorageService.get("ned") == "es_co" ) {
				  this.q_feed="cf=all&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic=n";
				  feedSrc = endpoint + this.q_feed;
			  }  else if( this.localStorageService.get("ned") == "de" ) {
				  this.q_feed="cf=all&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic=n";
				  feedSrc = endpoint + this.q_feed;
			  } else if( this.localStorageService.get("ned") == "en_et" ) {
				  this.q_feed="cf=all&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic=n";
				  feedSrc = endpoint + this.q_feed;
			  } else if( this.localStorageService.get("ned") == "en_my" ) {
				  this.q_feed="cf=all&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic=n";
				  feedSrc = endpoint + this.q_feed;
			  } else if( this.localStorageService.get("ned") == "ar_ae" ) {
				  this.q_feed="cf=all&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic=n";
				  feedSrc = endpoint + this.q_feed;
			  } else if(this.localStorageService.get("ned") == "en_gh" ) {
				   this.q_feed="cf=all&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic=w";
				  feedSrc = endpoint + this.q_feed;
			  
			  } else if(this.localStorageService.get("ned") == "en_ng" ) {
				   this.q_feed="cf=all&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic=w";
				  feedSrc = endpoint + this.q_feed;
			  
			  } else if(this.localStorageService.get("ned") == "no_no" ) {
				   this.q_feed="cf=all&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic=w";
				  feedSrc = endpoint + this.q_feed;
			  
			  } else if(this.localStorageService.get("ned") == "en_sg" ) {
				   this.q_feed="cf=all&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic=w";
				  feedSrc = endpoint + this.q_feed;
			  
			  } else if(this.localStorageService.get("ned") == "sk_sk" ) {
				   this.q_feed="cf=all&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic=w";
				  feedSrc = endpoint + this.q_feed;
			  
			  } else if(this.localStorageService.get("ned") == "en_tz" ) {
				   this.q_feed="cf=all&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic=w";
				  feedSrc = endpoint + this.q_feed;
			  
			  } else if(this.localStorageService.get("ned") == "sv_se" ) {
				   this.q_feed="cf=all&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic=w";
				  feedSrc = endpoint + this.q_feed;
			  
			  } else if(this.localStorageService.get("ned") == "es_ve" ) {
				   this.q_feed="?cf=all&pz=1&as_qdr=h&hl=es&ned=es_ve&output=atom&scoring=n&num=15&topic=w"
				  feedSrc = endpoint + this.q_feed;
			  
			  } else if(this.localStorageService.get("ned") == "ar_eg" ) {
				   this.q_feed="?cf=all&pz=1&as_qdr=h&hl=ar_eg&ned=ar_eg&output=atom&scoring=n&num=15&topic=w";
				  feedSrc = endpoint + this.q_feed;
			  
			  } else if(this.localStorageService.get("ned") == "hi_in" ) {
				    this.q_feed="?cf=all&pz=1&as_qdr=h&hl=hi_in&ned=hi_in&output=atom&scoring=n&num=15&topic=w";
				  feedSrc = endpoint + this.q_feed;
			  
			  } else if(this.localStorageService.get("ned") == "ta_in" ) {
				  this.q_feed="?cf=all&pz=1&as_qdr=h&hl=ta&ned=ta_in&output=atom&scoring=n&num=15&topic=w";
				  feedSrc = endpoint + this.q_feed;
			  
			  } else {
			  	  this.q_feed="cf=all&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&topic="+topic;
				  feedSrc = endpoint + this.q_feed;
			  }
              break;
          case 6:
              this.settingSrcFeedGoogle( this.localStorageService.get("ned") );
              topic = this.settingTopicOnLanguages(this.localStorageService.get("hl"),type);
              feedSrc = this.q_feed +"&topic="+topic;
              break;
          case 7: 
              this.settingSrcFeedGoogle( this.localStorageService.get("ned") );
              topic = this.settingTopicOnLanguages(this.localStorageService.get("hl"),type);
              feedSrc = this.q_feed +"&topic="+topic;
              break;
          case 8: 
              this.settingSrcFeedGoogle( this.localStorageService.get("ned") );
              topic = this.settingTopicOnLanguages(this.localStorageService.get("hl"),type);
              feedSrc = this.q_feed +"&topic="+topic;
              break;
          default: 
              if( this.localStorageService.get("ned") == "ru_ru" ) {
				  //?cf=all&hl=ru&ned=ru_ru
                  feedSrc = "http://news.google.com/news?cf=all&hl=ru&ned=ru_ru&output=atom&scoring=n";
              } else if( this.localStorageService.get("ned") == "el_gr" ) {
                feedSrc = "http://news.google.com/news?cf=all&pz=1&as_qdr=h&&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n";  
              } else if( this.localStorageService.get("ned") == "ca" ) {
                feedSrc = "http://news.google.com/news?cf=all&hl="+this.localStorageService.get("hl")+"&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n";  
              }  else if( this.localStorageService.get("ned") == "fr" ) {
                feedSrc = "http://news.google.com/news?cf=all&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n";  
              }  else if( this.localStorageService.get("ned") == "uk" ) {
                feedSrc = "http://news.google.com/news?cf=all&hl=en&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n";  
			  } else if(this.localStorageService.get("ned") == "es_ve" ) {
				  feedSrc="http://news.google.com/news?cf=all&pz=1&as_qdr=h&ned=es_ve&output=atom&scoring=n&num=15";
			  } else if(this.localStorageService.get("ned") == "no_no" ) {
				  feedSrc="http://news.google.com/news?cf=all&hl=no&as_qdr=h&ned=no_no&output=atom&scoring=n&num=15";
			  } else {
                feedSrc = "http://news.google.com/news?cf=all&pz=1&as_qdr=h&ned="+this.localStorageService.get("ned")+"&output=atom&scoring=n&num=15";
                
              }
              break;
      }
      console.log("feedSrc "+feedSrc);
      var feed = [];
      this.feedService.parseFeed(feedSrc).then( response => {
          console.log(response);
          this.feeds = response.data.responseData.feed.entries;
      });
      this.q_feed = "";
    }
    
    //html populate on home page for the tabs
    getHtml(html) {
        return this.$sce.trustAsHtml(html);
    }
}

angular.module('makeyournewsApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  }).controller('MainController', MainController).config(function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix("makeyournews");
    localStorageServiceProvider.setStorageType("localStorage");
    //console.log(localStorageServiceProvider);  
  });

})();
