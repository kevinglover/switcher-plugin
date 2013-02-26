(function($) {
	$.fn.switcher = function(D) {
		var $self = this;
		var params = {
				"checkedLabel":"ON",
				"uncheckedLabel":"OFF"
		};
		params = $.extend(params, D);
		
		var DATA_KEY = 'switcher';
		$self.data(DATA_KEY, params);
		
		function get(key) {
			return $self.data(DATA_KEY)[key];
		}
		
		function set(key, value) {
			var D = $self.data(DATA_KEY);
			D[key] = value;
			$self.data(DATA_KEY, D);
		}	
	
	//Start plugin
	
		var data = $self.data();
		//console.log($self.data());
		
		$self.data({"animationSpeed": 200,

					});
					
	var $switcher_container = $('<div />', {"class":"switcher-container"}),
		$backface = $('<div />', {"class":"switcher-backface"}),
		$slider = $('<ul />', {"class":"switcher-slider"}),
		$firstLabel = $('<li />', {"class":"first",text:data.switcher.checkedLabel}),
		$sliderControl = $('<li />', {"class":"switch"});
		$lastLabel = $('<li />', {"class":"last",text:data.switcher.uncheckedLabel})
	
	
	$slider = $slider.append($firstLabel).append($sliderControl).append($lastLabel);
	$switcher_container = $switcher_container.append($backface).append($slider);
	
								
	
	$self.wrap("<span/>").hide().parent().append($switcher_container);
	
	
	$self.each(function(index){
		var $this = $(this);
		if($this.attr("checked")){
			
			var $switch = $this.parent().find(".switcher-slider"),
				firstLabel = $switch.children()[0],
				$s_container = $this.parent().find(".switcher-container");
			
			$switch.css({"left":"0",});
			$s_container.addClass("checked");
		}
	})
		
	.parent().bind("click", function(){
		
		var $this = $(this),
			$switch = $this.parent().find(".switcher-slider"),
			firstLabel = $switch.children()[0],
			$s_container = $this.parent().find(".switcher-container");
						
		if ($s_container.hasClass("checked")){
			
			var left_travel_distance = -1* $(firstLabel).width();
			
			$switch.animate({"left":left_travel_distance,},data.animationSpeed,function(){
				$s_container.removeClass("checked");
				$s_container.parent().find(":checkbox").removeAttr("checked");
			});
		}
		else{
			$switch.animate({"left":"0",},data.animationSpeed,function(){
				$s_container.addClass("checked");
				$s_container.parent().find(":checkbox").attr("checked", "checked");
			});
		}
	})
	
	
	//Return self	
	return $self;
	}
})(jQuery);