// JavaScript Document
$(document).ready(function(){
	//导航js
	$('.button').click(
	function(){
		try{
		$(this).next("div.templatemo_leftmenu").slideDown(500).
		siblings("div.templatemo_leftmenu").slideUp("slow");
		
		}
		catch(e){alert(e);}
		
	});

	$(".templatemo_leftmenu ul li").each(function(index){
			$(this).mouseover(function(){
				$(this).addClass("hover");
			});
			
	     $(this).mouseout(function(){
				$(this).removeClass("hover");
			});
			
	     $(this).click(
	 			function(){
	 				try{
	 					var str=window.location.href;
	 					str=str.substring(0,str.lastIndexOf('/'));
	 					
	 					switch($(this).attr("id")){
	 				
	 					case 'overview':
	 						 str=str+"/overview";
	 						
	 						 $("#templatemo_right_content").load(str);
	 						break;
	 					case 'target':
	 						str=str+"/target";
	 						 $("#templatemo_right_content").load(str);
	 						break;
	 					case 'special':
	 					str=str+"/special";
	 					 $("#templatemo_right_content").load(str);
	 					break;
	 					case 'planing':
		 					str=str+"/planing";
		 					 $("#templatemo_right_content").load(str);
		 					break;
	 					case 'textbook':
		 					 str=str+"/textbook";
		 					 $("#templatemo_right_content").load(str);
		 					break;
	 					}
	 			       
	 				}
	 				catch(e){alert(e);}
	 				
	 			});	
		});
	

	function LeftNavItem(){
		try{
			alert(1);
		$(".templatemo_leftmenu").hide();
		}
		catch(e){alert(e);}
	}
	
});