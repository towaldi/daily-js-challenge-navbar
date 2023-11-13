// Selection of elements
const menuBtn = document.getElementById('icon-btn');
const tabList = document.getElementById('tab-list');

console.log(menuBtn);
console.log(tabList);


/**
 * Show tab list
 */

menuBtn.addEventListener('click', function() {
    tabList.classList.toggle('tab-list');

    if (tabList.classList.contains('tab-list')) {
        tabList.style.display = 'flex';
        console.log(tabList.classList);
    } else {
        tabList.style.display = 'none';
    }
})