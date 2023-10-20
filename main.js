document.writeln(find_longest_word('maloe sredneee samoedlinnoeslovo'));


function find_longest_word(str) {
    let array1 = str.match(/\w[a-z]{0,}/gi);
    let result = array1[0];
  
    for(let i = 1 ; i < array1.length ; i++) {
      if(result.length < array1[i].length)
      {
      result = array1[i];
      }
    }
    return result;
  }
  

" "
  

  function detect_data_type(value) {
    let dtypes = [Object,Boolean,Function,Number, undefined,  String,  ], i, len;
        
    if (typeof value === "object" || typeof value === "function") {
         for (i = 0, len = dtypes.length; i < len; i++)  {
                if (value instanceof dtypes[i])  {
                    return dtypes[i];
                }
          }
        }
        
        return typeof value;
    }
    
    document.writeln(detect_data_type(20)); // number
    document.writeln(detect_data_type(false)); // boolean
    document.writeln(detect_data_type('wm-school')); // string
    document.writeln(detect_data_type());//undefined
    
     
