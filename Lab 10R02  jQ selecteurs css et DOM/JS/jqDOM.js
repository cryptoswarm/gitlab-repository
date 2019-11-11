/**
 * @author Johnny Tsheke
 */


function enleveStyle()
{
$("ol#liste>li").each(function(){
	 			$(this).removeAttr('style');
	 		});	
}

function ajoutDebut()
{
	 var item=$(':input[name="nouveau"]').eq(0).val();
	if(item.length>0)
	{  var lItem="<li>"+item+"</li>";
	 enleveStyle();
		$("ol#liste").prepend(lItem);
		$("ol#liste>li:first").css({"color":"red"});
	}
	
}


function ajoutFin()
{
	 var item=$(':input[name="nouveau"]').eq(0).val();
	if(item.length>0)
	{  var lItem="<li>"+item+"</li>";
	  enleveStyle();
		$("ol#liste").append(lItem);
		$("ol#liste>li:last").css({"color":"red"});
	}
	
}
function ajoutPos()
{
	 var item=$(':input[name="nouveau"]').eq(0).val();
	 var pos=$(':input[name="pos"]').eq(0).val();
	if((item.length>0)&&(pos==parseInt(pos)))
	{  var lItem="<li>"+item+"</li>";
	var nbelem=$("ol#liste>li").length;
	 if(pos>nbelem){
	 	ajoutFin();
	 	}else if(pos<=0){
	 		ajoutDebut();
	 	}
	 	else{
	 		
	 		//$("ol#liste>li").each(function(){
	 		//	$(this).removeAttr('style');
	 		//});
	 		enleveStyle();
	 		$("ol#liste>li").eq(pos-1).before(lItem);
	 		$("ol#liste>li").eq(pos-1).css({"color":"red"});
	 	}
		
	}
	
}

function supprimeDebut()
{
	 var nbelem=$("ol#liste>li").length;
	 
	if(nbelem>0)
	{  
		$("ol#liste>li").eq(0).remove();
	}
	
}
function supprimeFin()
{
	 var nbelem=$("ol#liste>li").length;
	 
	if(nbelem>0)
	{  
		$("ol#liste>li").eq(nbelem-1).remove();
	}
	
}

function supprimePos()
{
	 var nbelem=$("ol#liste>li").length;
	 var pos=$(':input[name="suppPos"]').eq(0).val();
	if((nbelem>0)&&(pos==parseInt(pos)))
	{  
	 if((pos>0)&&(pos<=nbelem)){
	 	$("ol#liste>li").eq(pos-1).remove();
	 	}
		
	}
	
}

$(document).ready(function(){
	$(':input[name="btAjoutDeb"]').eq(0).click(function(){
		ajoutDebut();
	});
	$(':input[name="btAjoutPos"]').eq(0).click(function(){
		ajoutPos();
	});
	$(':input[name="btAjoutFin"]').eq(0).click(function(){
		ajoutFin();
	});
	$(':input[name="btSuppDeb"]').eq(0).click(function(){
		supprimeDebut();
	});
	$(':input[name="btSuppPos"]').eq(0).click(function(){
		supprimePos();
	});
	$(':input[name="btSuppFin"]').eq(0).click(function(){
		supprimeFin();
	});
});
