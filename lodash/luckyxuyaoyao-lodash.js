
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
     * @param {*} array
     
     */
    difference:function(array1,array2){
        
    
    },

    /**
     * @param {*} array
     * @param {*} number
     */
    drop:function(ary,n){
        return ary.slice(n,ary.length)
    },

    /**
     * 
     */
    fill:function(){

    },
    
    
    /**
     * @param {*} array
     */
    first:function(array){
        if(array == []){
            return undefined
        }else{
            return array[0]
        }
    },
    
    /**
     * 
     */
    flatten:function(ary){
        var result = []
        for(var item of ary){
            if(Array.isArray(item)){
                for(var val of item){
                    result.push(val)
                }
            }else{
                result.push(item)
            }
        }
        return result
    },

    flattenDeep:function(ary){
        var result = []
        for(var item of ary){
            if(Array.isArray(item)){
                var flatdeep = flattenDeep(item)
                result.push(...flatdeep)
            }else{
                result.push(item)
            }
        }
        return result
    },
    
    flattenDepth:function(ary,depth){
        var result = []
        for(var item of ary){
            if(Array.isArray(item)){
                var flatdepth = flattenDepth(item,depth -1)
                result.push(...flatdepth)
            }else{
                result.push(item)
            }
        }
        return result
    },

    
    
    initial:function(array){
       return array.slice(0,array.length - 1)
    },
    
    
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
    last:function(array){
        return array[array.length - 1]
    },

    /**
     * 
     */
    lastIndexOf:function(){

    },
    
    /**
     * 
     */
    nth :function(array,n){
        if(n>=0){
            return array[n-1]
        }else{
            return array[n+array.length]
        }
    },
    
    
    
    
    
    
    
    
    

}










