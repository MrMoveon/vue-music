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