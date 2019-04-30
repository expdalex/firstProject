window.addEventListener('DOMContentLoaded', function(){
'use strict';
    class options {
        constructor(height, width, bg, fontSize, textAlign){
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        createDiv(){
            let div = document.createElement('div');
            div.classList.add('div');
            div.innerHTML = 'loremipsum';
            div.style.height = this.height;
            div.style.width = this.width;
            div.style.background = this.bg;
            div.style.fontSize = this.fontSize;
            div.style.textAlign = this.textAlign;
            document.body.appendChild(div);
        }
    }

    let newDiv1 = new options('200px', '200px','red','16px','center'),
        newDiv2 = new options('200px', '200px','green','16px','center'),
        newDiv3 = new options('200px', '200px','blue','16px','center');
    newDiv1.createDiv();
    newDiv2.createDiv();
    newDiv3.createDiv();
});