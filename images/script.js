;(function($) {

	var Area = {};

	Area.Profile = (function() {
		var $areaProfile = $(".area_profile");

		var init = function() {
			$areaProfile.on("click", ".btn_name", function() {
				$areaProfile.toggleClass("on");
			});
		};

		return {
			init: init
		}
	})();

	Area.Category = (function() {

		var $areaNavi = $(".area_navi");

		var init = function() {
			$areaNavi.on("click", ".btn_cate", function() {
				$areaNavi.toggleClass("on");
			});
		};

		return {
			init: init
		}
	})();


	Area.Search = (function() {
		var $areaSearch = $(".area_search"),
			$input = $areaSearch.find(".tf_search");

		var init = function() {
			$areaSearch.on("click", ".btn_search", function() {
				$areaSearch.addClass("on");
				$input.focus();
			});

			$input.on("blur", function() {
				if ($input.val() == "") {
					$areaSearch.removeClass("on");
				}
			});
		};

		return {
			init: init
		}
	})();


	Area.Profile.init();
	Area.Category.init();
	Area.Search.init();

})(jQuery);
