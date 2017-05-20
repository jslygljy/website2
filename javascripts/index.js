//框架结构
		var height;
		var page = 1;//当前处于的页数
		var car;//小车偏移
		var plan;//飞机偏移
		var game;//游戏偏移
		var isGame = false;//是否正在进行游戏动画
		var gameHtml = $("#page-6 .game").html();
		var cloud;//云朵偏移
		var isCloud = false;//云朵是否正处于飘浮
		var cloudHtml = $("#cloud").html();
		var shadow;//建筑窗户偏移
		var isShadow = false;//建筑窗户是否正处于动画
		var cp;//唱片偏移
		var isCp = false;//唱片是否正处于动画
		var wifi;//wifi偏移
		var isWifi = false;//wifi是否正处于动画
    	var scrollerOffset = $("#scroller").offset().top;
		function structure()
		{
			car = $("#page-5 .car").offset().top + $("#page-5 .car").height() - height - scrollerOffset;
			plan = $("#page-5 .plan").offset().top + $("#page-5 .plan").height() - height - scrollerOffset;
			game = $("#page-6 .game").offset().top + $("#page-6 .game").height() - height - scrollerOffset;
			cloud = $("#page-7 .cloud-2").offset().top + $("#page-7 .cloud-2").height() - height - scrollerOffset;
			shadow = $("#page-7 .shadow").offset().top + $("#page-7 .shadow").height() - height - scrollerOffset;
			cp = $("#page-8 .cp").offset().top + $("#page-8 .cp").height() - height - scrollerOffset;
			wifi = $("#page-9 .wifi").offset().top + $("#page-9 .wifi").height() - height - scrollerOffset;
			man = $("#page-10 .man").offset().top + $("#page-10 .man").height() - height - scrollerOffset;
		}
		structure();
	//滚动
		myScroll = new IScroll("#wrapper", { probeType: 3, scrollX: false, freeScroll: true, checkDOMChanges: true, bounce: false,scrollbars: true, scrollbars: 'custom'});
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		myScroll.on("scroll", onscrolls);
		myScroll.on("scrollEnd", onscrolls);
		function onscrolls()
		{
			//重复函数
				var offset = -this.y;
				var slide = $("#wrapper").parent();
				if ( offset == 0 )
				{
					slide.removeClass("swiper-no-prev");
				}
				else
				{
					slide.addClass("swiper-no-prev");
				}
				if ( this.y == this.maxScrollY )
				{
					slide.removeClass("swiper-no-next");
					$(".up").show();
				}
				else
				{
					slide.addClass("swiper-no-next");
					$(".up").hide();
				}
				//汽车
					if ( offset >= car && (offset-car)/2 <= 225 )
					{
						$("#page-5 .car").transition({y:(offset-car)/2},1);
					}
				//飞机
					if ( offset >= plan && (offset-plan)/2 <= 170 )
					{
						$("#page-5 .plan").transition({x:(offset-plan),y:"-"+(offset-plan)/2},1);
					}
				//游戏
					if ( offset >= game && offset <= game + height )
					{
						if ( isGame == false )
						{
							gameStart();
						}
						isGame = true;
					}
					else
					{
						if ( isGame )
						{
							$("#page-6 .game").html(gameHtml);
							isGame = false;
						}
					}
				//云朵
					if ( offset >= cloud && offset <= cloud + height )
					{
						if ( isCloud == false )
						{
							$("#cloud>div").addClass("layer");
							var scene = $("body")[0];
							var parallax = new Parallax(scene);
						}
						isCloud = true;
					}
					else
					{
						if ( isCloud )
						{
							$("#cloud").html(cloudHtml);
							isCloud = false;
						}
					}
				//建筑窗户
					if ( offset >= shadow && offset <= shadow + height )
					{
						if ( isShadow == false )
						{
							windows();
						}
						isShadow = true;
					}
					else
					{
						if ( isShadow )
						{
							clearInterval(windowAuto);
							isShadow = false;
						}
					}
				//唱片
					if ( offset >= cp && offset <= cp + height )
					{
						if ( isCp == false )
						{
							$(".cp-rotate").addClass("cp-rotate-animate");
							changpian();
						}
						isCp = true;
					}
					else
					{
						if ( isCp )
						{
							$(".cp-rotate").removeClass("cp-rotate-animate");
							clearInterval(changpianAuto);
							$("#page-8 ul li").removeAttr("style");
							isCp = false;
						}
					}
				//wifi
					if ( offset >= wifi && offset <= wifi + height )
					{
						if ( isWifi == false )
						{
							wifis();
						}
						isWifi = true;
					}
					else
					{
						if ( isWifi )
						{
							clearInterval(wifiAuto);
							clearInterval(xinhaoAuto);
							clearInterval(sAuto);
							isWifi = false;
						}
					}
		}