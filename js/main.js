const wrapper = document.querySelector('.wrapper');
const empty = Array.from(document.querySelectorAll('.empty'));
const drag = document.querySelector('.drag');

drag.addEventListener('touchmove', touchMove);
drag.addEventListener('touchend', touchEnd);

let itemDrop;
// ------------------------ touchMove
function touchMove(event) {
    event.preventDefault();

    let touch = event.targetTouches[0];
    drag.style.top = `${touch.pageY - (drag.offsetWidth / 2) - (wrapper.offsetTop)}px`;
    drag.style.left = `${touch.pageX - (drag.offsetHeight / 2) - (wrapper.offsetLeft)}px`;

    empty.map((item, index) => {
        if (
            drag.getBoundingClientRect().top + drag.offsetWidth / 2 < item.getBoundingClientRect().bottom &&
            drag.getBoundingClientRect().left + drag.offsetWidth / 2 < item.getBoundingClientRect().right &&
            drag.getBoundingClientRect().bottom - drag.offsetWidth / 2 > item.getBoundingClientRect().top &&
            drag.getBoundingClientRect().right - drag.offsetWidth / 2 > item.getBoundingClientRect().left
        ) {
            item.classList.add('active');
            console.log(item.classList.contains('active'));
            itemDrop = item;
        }
        else {
            item.classList.remove('active')
        }
    });
}


function touchEnd(element) {
    if (itemDrop.classList.contains('active')) {
        itemDrop.append(this);
        this.style.top = `${itemDrop.offsetTop}px`;
        this.style.left = `${itemDrop.offsetLeft}px`;
    }
    else {
        this.style.top = `${itemDrop.offsetTop}px`;
        this.style.left = `${itemDrop.offsetLeft}px`;
    }
}
