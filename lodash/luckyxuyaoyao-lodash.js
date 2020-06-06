
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
    difference:function(array, ...values){
        let map = {}
        let count = []
        let index = 0
        while (index < arguments.length) {
          for (let i = 0; i < arguments[index].length; i++) {
            if (!(arguments[index][i] in map)) {
              map[arguments[index][i]] = 1
            }
          }
          index++
        }
        for (let j = 0; j < array.length; j++) {
          if (!(array[j] in map)) {
            count.push(array[j])
          }
        }
        return count
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
    last:function(array){
        return array[array.length - 1]
    },

   
    nth:function(array,n){
        if(n = 0){
            return array[0]
        }
        else if(n>0){
            return array[n-1]
        }else{
            return array[n+array.length]
        }
    },

    
    pull:function(ary,a,b){
        var result = []
        for(var i = 0 ; i < ary.length;i++){
            if(ary[i] != a && ary[i] != b ){
                result.push(ary[i])
                
            }ary.shift()
            i--
        }
        return result 

    },

    reverse:function(ary){
        var result = []
        for(var i = ary.length - 1; i >= 0 ; i--){
            result.push(ary[i])
        }
        return result
    },

    slice:function(ary,start,end){
        
    },

    sortedIndex:function(ary,val){
       
    },


    tail:function(ary){
        ary.shift(ary[0])
        return ary
    },

    take:function(ary,n){
        if(n == undefined){
            return [ary[0]]
        }else{
            if(n <= ary.length){
                return ary.slice(0,n)
            }else{
                return ary
            }
        }
    },

    takeRight:function(ary,n){
        if(n == undefined){
            return [ary[ary.length - 1]]
        }else{
            if(n <= ary.length){
                return ary.slice(ary.length - n ,ary.length )
            }else{
                return ary
            }
        }
    },

    union:function(arr){
        return arr.filter(function(item, index, arr) {
        return arr.indexOf(item, 0) === index;
    })
        console.log(unique(arr))
    },

    unzip:function(arr){

    },

    without:function(arr){

    },
    
    xor:function(arr){

    },
    
    zip:function(arr){

    },
    
    zipObject:function(arr){

    },
    
    includes:function(arr){

    },
    
    sample:function(arr){

    },
    
    sampleSize:function(arr){

    },
    
    
    
    
    
    
    
    
    
    
    

}










