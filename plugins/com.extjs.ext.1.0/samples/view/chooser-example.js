/*
 * Ext JS Library 1.0.1
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://www.extjs.com/license
 */

Ext.onReady(function(){
    var chooser, btn;
    
    function insertImage(data){
    	Ext.DomHelper.append('images', {
    		tag: 'img', src: data.url, style:'margin:10px;visibility:hidden;'
    	}, true).show(true);
    	btn.getEl().focus();
    };
    
    function choose(btn){
    	if(!chooser){
    		chooser = new ImageChooser({
    			url:'get-images.php',
    			width:515, 
    			height:400
    		});
    	}
    	chooser.show(btn.getEl(), insertImage);
    };
    
    btn = new Ext.Button('buttons', {
	    text: "Insert Image",
		handler: choose
	});
});
