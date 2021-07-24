/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-07-24 11:32:53
 * @LastEditTime: 2021-07-24 11:45:41
 * @LastEditors: rodchen
 */
function component() {
  const element = document.createElement('div');
  element.innerHTML = 'hellow world';

  return element;
}

document.body.appendChild(component());