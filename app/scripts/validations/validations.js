app.directive('badword', function(){
    
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl){
            
            var filterWords = ['fuck', 'dick'];
            
            ctrl.$validators.badword = function(){
                
                var elemVal = elm.val().split(' ');
                elemVal.map(function(k){
                    k = k.toLowerCase();
                });
                
                if( elemVal.hasCommon( filterWords ) )                    
                    return false;
                
                return true;
                
            }
        }
    };
    
});