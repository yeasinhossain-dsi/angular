app.directive('badword', function(){
    
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl){
            
            var filterWords = ['fuck', 'dick'];
            
            ctrl.$validators.badword = function(){
                
                var elemVal = elm.val().split(' ');
                
                if( elemVal.toLowerCase() in filterWords )
                    
                    return false;
                
                return true;
                
            }
        }
    };
    
});