
var luckyxuyaoyao = {
    /**
     * 
     * @param {*} val 
     */
    isNull:function(val){
        if(val === null){
            return true
        }else{
            return false
        }
    },

    /**
     * 
     * @param {*} val 
     */
    isNaN:function(val){
        if(val !== val){
            return true
        }else{
            return false
        }
    },

     /**
     * @param {*} array
     * @param {*} size
     */
    chunk:function(array,size){
        let ary = []
        for(var i = 0; i < array.length; i+=size){
            ary.push(array.slice(i,i+size))
        }
        return ary
    },

    /**
     * @param {*} array
     */
    compact:function(array){
        let res = []
        for(var i = 0; i < array.length; i++){
            if(array[i]){
                res.push(array[i])
            }
        }
        return res 
    },

   
    /**
     * @param {*} array
     * @param {...val} [values]
     */
    concat:function(array,...val){
        array = array.concat(...val)
        return array
    },

    /**
     * 
     */
    difference:function(){

    },

    /**
     * 
     */
    drop:function(){

    },

    /**
     * 
     */
    fill:function(){

    },
    
    /**
     * 
     */
    find:function(){

    },
    
    /**
     * 
     */
    first:function(){

    },
    
    /**
     * 
     */
    flatten:function(){

    },
    
    /**
     * 
     */
    indexOf:function(){

    },
    
    /**
     * 
     */
    initial:function(){

    },
    
    /**
     * 
     */
    intersection:function(){

    },
    
    /**
     * 
     */
    join:function(){

    },

    /**
     * 
     */
    last:function(){

    },

    /**
     * 
     */
    lastIndexOf:function(){

    },
    
    /**
     * 
     */
    nth:function(){

    },

    /**
     * 
     */
    pull:function(){

    },

    /**
     * 
     */
    pullAll:function(){

    },

    /**
     * 
     */
    pullAt:function(){

    },

    /**
     * 
     */
    remove:function(){

    },

    /**
     * 
     */
    reverse:function(){

    },

    /**
     * 
     */
    reverse:function(){

    },

    /**
     * 
     */
    slice:function(){

    },
    
    
    
    
    
    
    
    
    
    

}










