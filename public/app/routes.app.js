ddayApp.config(function( $stateProvider , $urlRouterProvider ){
    $stateProvider
        .state('news', {
          url: '/news',
          templateUrl: '/app/news/view/news.html',
        })

        .state('video', {
          url: '/video',
          templateUrl: '/app/video/view/video.html',
          resolve : {
            groups: function(Restangular){
              return Restangular.one('video-youtube').get();
            },
            // routes: function(){
            //   return Restangular.one('user/video').get();
            // },
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'ddayApp',
                    files: [
                       '/app/MainController.js',
                    ]
                });
            }]
          }
        })

        .state('fotoalboms', {
          url: '/fotoalboms',
          templateUrl: '/app/fotoalboms/view/fotoalboms.html',  
        })

        .state('show_biznes', {
          url: '/show-biznes',
          templateUrl: '/app/show_biznes/view/show_biznes.html',
        })

        .state('interesting_facts', {
          url: '/interesting-facts',
          templateUrl: '/app/interesting_facts/view/interesting_facts.html',
        })

       
    $urlRouterProvider.otherwise('news');
});