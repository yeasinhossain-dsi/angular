/*
 *  if two array has same thing in common
 */
Array.prototype.hasCommon = function(array) {

    var result = false;
    
    this.map( function(k){
        
        if( array.indexOf( k ) > -1 ){
            result = true;
            return true;
        }
        
    });
    
    return result;
}   