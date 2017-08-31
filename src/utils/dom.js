
const dom = {
  getData:function(el,name,val){
    //data-index=1
    if (arguments.length === 2) {
      return el.getAttribute('data-' + name)
        ? el.getAttribute('data-' + name)
        : ''
    }
    if (arguments.length === 3) {
      return el.getAttribute('data-' + name, val)
    }
  },
  addEvent: function (ele, eventName, eventFn) {
    ele.addEventListener(eventName, eventFn, false);
  },
  removeEvent: function (ele, eventName, eventFn) {
    ele.removeEventListener(eventName, eventFn, false);
  },
  addClass: function (element, clsNames) {
    if (typeof clsNames === "string") {
      if (!dom.hasClass(element, clsNames)) {
        element.className += " " + clsNames;
      }
    }
  },
  removeClass: function (element, clsNames) {
    var classNameArr = element
      .className
      .split(" ");
    for (var i = 0; i < classNameArr.length; i++) {
      if (classNameArr[i] === clsNames) {
        classNameArr.splice(i, 1);
        i--;
      }
    }
    element.className = classNameArr.join(" ");
  },
  hasClass: function (ele, classNames) {

    var classNameArr = ele
      .className
      .split(" ");
    for (var i = 0; i < classNameArr.length; i++) {
      if (classNameArr[i] === classNames) {
        return true;
      }
    }

    return false;
  },
  toggleClass: function (ele, classNames) {
    if (dom.hasClass(ele, classNames)) {
      dom.removeClass(ele, classNames);
      return false;
    } else {
      dom.addClass(ele, classNames);
      return true;
    }
  },
  parents: function (obj, selector) {
    /*

     * selector
     * id
     * class
     * 标签
     * */

    if (selector.charAt(0) === "#") {
      while (obj.id !== selector.slice(1)) {
        obj = obj.parentNode;
      }
    } else if (selector.charAt(0) === ".") {
      while ((obj && obj.nodeType !== 9) && !dom.hasClass(obj, selector.slice(1))) {
        obj = obj.parentNode;
      }
    } else {
      while (obj && obj.nodeType !== 9 && obj.nodeName.toLowerCase() !== selector) {
        obj = obj.parentNode;
      }
    }

    return obj && obj.nodeType === 9
      ? null
      : obj;
  },
  each: function (obj, callBack) {
    for (var i = 0; i < obj.length; i++) {
      callBack(obj[i], i);
    }
  },
  getEleRect: function (obj) {
    return obj.getBoundingClientRect();
  },
  collisionRect: function (obj1, obj2) {
    var obj1Rect = dom.getEleRect(obj1);
    var obj2Rect = dom.getEleRect(obj2);

    var obj1W = obj1Rect.width;
    var obj1H = obj1Rect.height;
    var obj1L = obj1Rect.left;
    var obj1T = obj1Rect.top;

    var obj2W = obj2Rect.width;
    var obj2H = obj2Rect.height;
    var obj2L = obj2Rect.left;
    var obj2T = obj2Rect.top;
    //碰上返回true 否则返回false
    if (obj1W + obj1L > obj2L && obj1T + obj1H > obj2T && obj1L < obj2L + obj2W && obj1T < obj2T + obj2H) {
      return true
    } else {
      false;
    }
  },
  store: function (namespace, data) {
    if (data) {
      return localStorage.setItem(namespace, JSON.stringify(data));
    }

    var store = localStorage.getItem(namespace);
    return (store && JSON.parse(store)) || [];
  },
  extend: function (obj) {
    var newArr = obj.constructor === Array
      ? []
      : {};
    for (var attr in obj) {
      if (typeof obj[attr] === "object") {
        newArr[attr] = dom.extend(obj[attr]);
      } else {
        newArr[attr] = obj[attr];
      }
    }
    return newArr;
  },
  hide: function (element) {
    return element.style.display = "none";
  },
  show: function (element) {
    return element.style.display = "block";
  },
  getOffset: function (obj) {
    return {width: obj.offsetWidth, height: obj.offsetHeight}
  },
  css:function(e, t, a) {
    if(2 == arguments.length) {
      if("scale" == t || "rotate" == t || "rotateX" == t || "rotateY" == t || "rotateZ" == t || "scaleX" == t || "scaleY" == t || "translateY" == t || "translateX" == t || "translateZ" == t) switch(e.$Transform || (e.$Transform = {}), t) {
        case "scale":
        case "scaleX":
        case "scaleY":
          return "number" == typeof e.$Transform[t] ? e.$Transform[t] : 100;
        case "translateY":
        case "translateX":
        case "translateZ":
          return e.$Transform[t] ? e.$Transform[t] : 0;
        default:
          return e.$Transform[t] ? e.$Transform[t] : 0
      }
      var n = e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, !1)[t];
      return "opacity" == t ? Math.round(100 * parseFloat(n)) : parseInt(n)
    }
    if(3 == arguments.length) switch(t) {
      case "scale":
      case "scaleX":
      case "scaleY":
      case "rotate":
      case "rotateX":
      case "rotateY":
      case "rotateZ":
      case "translateY":
      case "translateX":
      case "translateZ":
        setCss3(e, t, a);
        break;
      case "width":
      case "height":
      case "paddingLeft":
      case "paddingTop":
      case "paddingRight":
      case "paddingBottom":
        a = Math.max(a, 0);
      case "left":
      case "top":
      case "right":
      case "bottom":
      case "marginLeft":
      case "marginTop":
      case "marginRight":
      case "marginBottom":
        e.style[t] = "string" == typeof a ? a : a + "px";
        break;
      case "opacity":
        e.style.filter = "alpha(opacity:" + a + ")", e.style.opacity = a / 100;
        break;
      default:
        e.style[t] = a
    }
    return function(t, a) {
      css(e, t, a)
    }
  },
  setCss3:function(e, t, a) {
    var n = "",
      r = "",
      s = ["Webkit", "Moz", "O", "ms", ""];
    e.$Transform || (e.$Transform = {}), e.$Transform[t] = parseInt(a);
    for(n in e.$Transform) switch(n) {
      case "scale":
      case "scaleX":
      case "scaleY":
        r += n + "(" + e.$Transform[n] / 100 + ") ";
        break;
      case "rotate":
      case "rotateX":
      case "rotateY":
      case "rotateZ":
        r += n + "(" + e.$Transform[n] + "deg) ";
        break;
      case "translateY":
      case "translateX":
      case "translateZ":
        r += n + "(" + e.$Transform[n] + "px) "
    }
    for(var c = 0; c < s.length; c++) e.style[s[c] + "Transform"] = r
  }
}

export default dom