
(function ( $ ) {
 
    $.fn.ll = function(ss) {
       


        this.animate({
            left: '-=120%',
            top: '+=80%',
            
        },ss);
        return this;
       
        
    };
    $.fn.ss = function(ss) {
       


        this.animate({
            left: '-=120%',
            
            
        },ss);
        
        
        return this;
       
        
    };
    $.fn.upright = function(sp) {
       


        this.animate({
            left: '+=260%',
            top: '-=110%',
            
        },sp);
        return this;
       
        
    };
    $.fn.sl = function(ss) {
       


        this.animate({
            left: '+=150%',
            
            
        },ss);
        return this;
       
        
    };
 
    $.fn.up = function(ss) {
        


        this.animate({
            top: '+=130%'
            
        },ss);
        return this;
       
        
    };
}( jQuery ));
