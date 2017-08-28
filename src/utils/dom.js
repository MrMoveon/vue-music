export function addClass(elem, className) {
    if(elem.classList) {
      elem.classList.add(className);
    } else {
      elem.className += ' ' + className;
    }
}
export function removeClass(elem, className) {
        if(elem.classList) {
          elem.classList.remove(className);
        } else {
          elem.className = elem.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
}
export function hasClass(elem, className) {
    if(elem.classList) {
      return elem.classList.contains(className);
    } else {
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(elem.className);
    }
  }

export function getData(el,name,val){
  //data-index=1
  if(arguments.length===2){
    return el.getAttribute('data-'+name) ? el.getAttribute('data-'+name) : ''
  }
  if(arguments.length===3){
    return el.getAttribute('data-'+name,val)
  }
}