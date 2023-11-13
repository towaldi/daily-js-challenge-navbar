// Selection of elements
const menuBtn = document.getElementById('icon-btn');
const tabList = document.getElementById('tab-list');

console.log(menuBtn);
console.log(tabList);

// Checking window size at initialization


/**
 * Show tab list
 * -> click on button
 */

menuBtn.addEventListener('click', function() {
    tabList.classList.toggle('d-none');

    // if (tabList.classList.contains('tab-list')) {
    //     tabList.style.display = 'flex';
    //     console.log(tabList.classList);
    // } else {
    //     tabList.style.display = 'none';
    // }
});