function m(arg){
	this.elements=[];
	switch (typeof arg){
		case 'function':
			window.addEventListener('load',arg);
			break;
		case 'string':
			switch (arg.charAt(0)){
				case '#':
					this.elements.push(document.getElementById(arg.substring(1)));
					break;
				case '.':
					this.elements=document.querySelectorAll(arg);
					break;	
				default:
					this.elements=document.querySelectorAll(arg);
					break;
			}
			break;
		case 'object':
			this.elements.push(arg);
			break;
	}
}

/**
 * @description  获取设置元素内容
 * @param {String} str
 */
m.prototype.html=function(str){
	if(str){
		//设置
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].innerHTML=str;
		}
	}else{
		//获取
		return this.elements[0].innerHTML;
	}
	return this;
}

/**
 * @description  获取元素第几个对象
 * @param {Number} index
 */
m.prototype.eq=function(index){
	return mui(this.elements[index]);
}
/**
 * @description 获取原生Dom元素
 * @param {Number} index
 */
m.prototype.get=function(index){
	return this.elements[index];
}
/**
 * @description  获取元素的长度
 */
m.prototype.index=function(){
	return this.elements.length;
}

/**
 * @description  显示元素
 */
m.prototype.show=function(){
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style.display='block';
	}
	return this;
}
/**
 * @description  隐藏元素
 */
m.prototype.hide=function(){
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style.display='none';
	}
	return this;
}
/**
 * 获取设置属性
 * @param {String} attr
 * @param {Number,String} val
 */
m.prototype.attr=function(attr,val){
	
	if(!val){
		return this.elements[0].getAttribute(attr)
	}else{
		this.elements[0].setAttribute(attr,val)
	}
	return this;
}
/**
 * @description 找到所有子元素
 * @param {String} ele
 */
m.prototype.find=function(ele){
	//.list li
	this.elements=this.elements[0].querySelectorAll(ele)
	return this;
}


/**
 * @description 获取元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性
 */
m.prototype.offset=function(){
	return this.elements[0].getBoundingClientRect();
}
/**
 * @description 绑定事件
 * @param {String} eventName 事件名
 * @param {Function} fn 回调函数
 */
m.prototype.on=function(eventName,fn){
	
	if(typeof fn === 'function'){
		if(eventName!='tap'){
			for (var i = 0; i < this.elements.length; i++) {
				this.elements[i].addEventListener(eventName,fn,false);
			}
		}else{
			for (var i = 0; i < this.elements.length; i++) {
				mui(this.elements[i]).tap(fn)
			}
		}
	}
	return this;
}
/**
 * @description 解除绑定
 * @param {Object} eventName
 * @param {Object} fn
 */
m.prototype.off=function(eventName,fn){
	if(typeof fn === 'function'){
		if(eventName!='tap'){
			for (var i = 0; i < this.elements.length; i++) {
				this.elements[i].removeEventListener(eventName,fn,false);
			}
		}
		
	}
}
/**
 * @description click事件
 * @param {Object} fn 回调函数
 */
m.prototype.click=function(fn){
	this.on('click',fn)
	return this;
}
/**
 * @description tap事件
 * @param {Object} fn 回调函数
 */
m.prototype.tap=function(fn){
	//根据点击抬起的x,y的坐标，判读是否为点击
	var startPoint={};
	if(typeof fn == 'function'){
		for (var i = 0; i < this.elements.length; i++) {
			mui(this.elements[i]).on('touchstart',function(e){
				
				startPoint={
					x:e.changedTouches[0].pageX,
					y:e.changedTouches[0].pageY
				}
			})
			mui(this.elements[i]).on('touchend',function(e){
				var endPoint={
					x:e.changedTouches[0].pageX,
					y:e.changedTouches[0].pageY
				}
				if(Math.abs(endPoint.x-startPoint.x)<5 && Math.abs(endPoint.y-startPoint.y)<5){
					fn && fn.call(this,e)
				}
			})
			
		}
	}
	return this;
}
/**
 * @description 遍历dom
 * @param {Function} fn(item,index) item当前元素，index索引
 */
m.prototype.each=function(fn){
	
	if(typeof fn == 'function'){
		for (var i = 0; i < this.elements.length; i++) {
			var item=this.elements[i]
			var index=i
			fn && fn(item,index)
		}
	}
}

/**
 * @description css属性获取设置
 * @param {Object,String} attr
 * @param {String} val
 */
m.prototype.css=function(attr,val){

    var transformArr=['scale','scaleX','scaleY','scaleZ','rotate','rotateY','rotateZ','skew','skewX','skewY','skewZ','translate','translateX','translateY','translateZ'];
	if(arguments.length===2){//设置
		for (var i = 0; i < this.elements.length; i++) {
            if(transformArr.indexOf(attr)!=-1){
                this.cssTransform(attr,val);
            }else{
                this.elements[i].style[attr]=val;
            }
			
		}
	}else if(arguments.length===1){
		
		
		
		if(typeof attr === 'object'){//设置
			var obj={};
			for(var key in attr){
				for (var i = 0; i < this.elements.length; i++) {
					if(transformArr.indexOf(key)!=-1){
						this.cssTransform(key,attr[key]);
					}else{
						if(key==='opacity'){
							this.elements[i].style[key]=attr[key]/100;
						}else{
							this.elements[i].style[key]=attr[key];
						}
						
					}
					
				}
			}
		}else if(typeof attr === 'string'){//获取
			if(transformArr.indexOf(attr)!=-1){
				return this.cssTransform(attr);
			}
			return getComputedStyle(this.elements[0],false)[attr];
		}
	}
	return this;
}
/**
 * 获取设置css3属性
 * @param {Object} attr
 * @param {Object} val
 */
m.prototype.cssTransform=function(attr,val){
	var val=parseFloat(val);
	for (var i = 0; i < this.elements.length; i++) {
		if(!this.elements[i].transform){
			this.elements[i].transform={};
		}
	}
	if(arguments.length==2){
			for (var i = 0; i < this.elements.length; i++) {
				switch(attr){
					case 'scale':
					case 'scaleX':
					case 'scaleY':
					case 'scaleZ':
						this.elements[i].transform[attr]=val/100;
						break;
					case 'rotate':	
					case 'rotateX':
					case 'rotateY':
					case 'rotateZ':
					case 'skew':	
					case 'skewX':
					case 'skewY':
					case 'skewZ':
						this.elements[i].transform[attr]=val+"deg";
						break;
					default:
						this.elements[i].transform[attr]=val+"px";
						break;
				}
				this.setTransform(i);
			}
	}else if(arguments.length==1){
		
		if(typeof attr === 'object'){
			
			for(var key in attr){
				for (var i = 0; i < this.elements.length; i++) {
					switch(key){
						case 'scale':
						case 'scaleX':
						case 'scaleY':
						case 'scaleZ':
							this.elements[i].transform[key]=attr[key]/100;
							break;
						case 'rotate':	
						case 'rotateX':
						case 'rotateY':
						case 'rotateZ':
						case 'skew':	
						case 'skewX':
						case 'skewY':
						case 'skewZ':
							this.elements[i].transform[key]=attr[key]+"deg";
							break;
						default:
							this.elements[i].transform[key]=attr[key]+"px";
							break;
					}
					
				}
				
			}
			
			for (var i = 0; i < this.elements.length; i++) {
				this.setTransform(i);
			}
		}
		for (var i = 0; i < this.elements.length; i++) {
			if(!this.elements[i].transform[attr]){
				switch(attr){
					case 'scale':
					case 'scaleX':
					case 'scaleY':
					case 'scaleZ':
						this.elements[i].transform[attr]=1
						break;
					default:
						this.elements[i].transform[attr]=0
						break;
				}
			}
			return this.elements[i].transform[attr];
		}
		
	}
	return this;
}
m.prototype.setTransform=function(i){
	var transformVal='';
	for(var s in this.elements[i].transform){
		switch(s){
			case 'scale':
			case 'scaleX':
			case 'scaleY':
			case 'scaleZ':
				transformVal+=" " + s +"("+this.elements[i].transform[s]+")";
				break;
			case 'rotate':	
			case 'rotateX':
			case 'rotateY':
			case 'rotateZ':
			case 'skew':	
			case 'skewX':
			case 'skewY':
			case 'skewZ':
				transformVal+=" " + s +"("+this.elements[i].transform[s]+")";
				break;
			default:
				transformVal+=" " + s +"("+this.elements[i].transform[s]+")";
				break;
		}
	}
	this.elements[i].style.webkitTransform=this.elements[i].style.transform=transformVal;
}


function mui(arg){
	return new m(arg);
}

/**
 * @description localStorage数据存储
 * @param {String} key
 * @param {Object,String} val
 */
mui.store=function(key,val){
    if(arguments.length===2){
       return localStorage.setItem(key,JSON.stringify(val))
    }else if(arguments.length===1){
        var store= localStorage.getItem(key);
        return (store && JSON.parse(store)) || []
    }
}
export default mui;