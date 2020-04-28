
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
            if(array[i] !== '0'|| array[i] !== 'null' || array[i] !== 'undefined' || array[i] !== 'NaN' || array[i] !== '' || array[i] !== 'false'){
                res.push(array[i])
            }
        }
        return res 
    },

   


    
}










