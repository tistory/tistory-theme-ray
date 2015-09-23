;(function($) {

	var Area = {};

	Area.Window = (function() {
		var $window = $(window),
			$areaHead = $(".area_head");

		var onScroll = function(e) {
			if ($window.scrollTop() > 45) {
				$areaHead.addClass("lock_head");
			} else {
				$areaHead.removeClass("lock_head");
			}
		};

		var init = function() {
			$window.on("scroll", onScroll);
		};

		return {
			init: init
		}
	})();

	Area.Skin = (function() {
		var $areaSkin = $(".wrap_skin");

		var openMenu = function() {
			$areaSkin.addClass("layer_on");
		};

		var closeMenu = function() {
			$areaSkin.removeClass("layer_on");
		};

		var init = function() {
			$areaSkin.on("click", ".btn_menu", openMenu);
			$areaSkin.on("click", ".btn_close", closeMenu);
		};

		return {
			init: init
		}
	})();

	Area.Profile = (function() {
		var $areaProfile = $(".area_profile");

		var toggleProfileMenu = function() {
			$areaProfile.toggleClass("on");
		};

		var init = function() {
			$areaProfile.on("click", ".btn_name", toggleProfileMenu);
		};

		return {
			init: init
		}
	})();

	Area.Category = (function() {
		var $areaNavi = $(".area_navi");

		var toggleCategory = function() {
			$areaNavi.toggleClass("on");
		};

		var init = function() {
			$areaNavi.on("click", ".btn_cate", toggleCategory);
		};

		return {
			init: init
		}
	})();


	Area.Search = (function() {
		var $areaSearch = $(".area_search"),
			$input = $areaSearch.find(".tf_search");

		var openSearch = function() {
			$areaSearch.addClass("on");
			$input.focus();
		};

		var leaveSearch = function() {
			if ($input.val() == "") {
				$areaSearch.removeClass("on");
			}
		};

		var init = function() {
			$areaSearch.on("click", ".btn_search", openSearch);
			$input.on("blur", leaveSearch);
		};

		return {
			init: init
		}
	})();

	Area.Comment = (function() {
		var $btnOpen = $(".btn_reply"),
			$listReply = $(".list_reply");

		var changeStatus = function() {
			if ($listReply.is(":show")) {
				$btnOpen.removeClass("on");
			} else {
				$btnOpen.addClass("on");
			}
		};

		var init = function() {
			if ($listReply.is(":show")) {
				$btnOpen.addClass("on");
			}

		};

		return {
			init: init,
			changeStatus: changeStatus
		}
	})();

	Area.init = function() {
		Area.Window.init();
		Area.Skin.init();
		Area.Profile.init();
		Area.Category.init();
		Area.Search.init();
		Area.Comment.init();
	};

	$.Area = {
		init: function() {
			Area.init();
		}
	};

})(jQuery);
