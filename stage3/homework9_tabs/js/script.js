window.addEventListener("DOMContentLoaded", function(){
    'use strict';

    function ShowHideTabs(tab, headerTabsBox, tabContent){
        
        //hide tabs starting with a
        function hideTabContent(a){  
            for (let i = a; i < tabContent.length; i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        hideTabContent(1);

        //show b-th tab
        function showContent(b){
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
            
        }

        //processing a tab click and displaying content
        headerTabsBox.addEventListener('click', function(e){
            let target = e.target;
            if(target && target.classList.contains('info-header-tab')){
                for(let i = 0; i < tab.length; i++){
                    if (target == tab[i]){
                        hideTabContent(0);
                        showContent(i);
                        break;
                    }
                }
            }
        });
    }
    let tab = document.querySelectorAll('.info-header-tab'),
        headerTabsBox = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    ShowHideTabs(tab,headerTabsBox,tabContent);
        
});