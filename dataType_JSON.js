/**data type add JSON meta */

Ext.data.Types.JSON = {
    convert: function(v){ 
        console.log('data type convert - '+v);
        return isJson(v)?JSON.parse(v):v; 
    },
    sortType: Ext.data.SortTypes.none,
    type: 'json'

}


/**column renderer */

function (v) {
    if(!isArray(v))return 'null';
                        
    var firstName = v[0].name;

    var returnStr = Ext.zip(v,function(o){
        return String.format('編號:{0}  姓名:{1}',o.sn,o.name);
    });


    return '<span ext:qtip="'+returnStr.join('<br>')+'" >'+firstName+'</span>';
}
