const wrapper = document.querySelector('.wrapper');
const empty = Array.from(document.querySelectorAll('.empty'));
const drag = document.querySelector('.drag');

drag.addEventListener('touchmove', touchMove);
drag.addEventListener('touchend', touchEnd);

let itemAppend = null;
// ------------------------ touchMove
function touchMove(event) {
    event.preventDefault();

    let touch = event.targetTouches[0];
    drag.style.top = `${touch.pageY - (wrapper.offsetTop) - (drag.offsetWidth / 2)}px`;
    drag.style.left = `${touch.pageX - (wrapper.offsetLeft) - (drag.offsetHeight / 2)}px`;

    empty.map(item => {
        if (
            drag.getBoundingClientRect().top + drag.offsetWidth / 2 < item.getBoundingClientRect().bottom &&
            drag.getBoundingClientRect().right - drag.offsetWidth / 2 > item.getBoundingClientRect().left &&
            drag.getBoundingClientRect().bottom - drag.offsetWidth / 2 > item.getBoundingClientRect().top &&
            drag.getBoundingClientRect().left + drag.offsetWidth / 2 < item.getBoundingClientRect().right
        ) {
            item.classList.add('active');
            itemAppend = item;
        }
        else {
            item.classList.remove('active');
        }
    });
}


function touchEnd() {
    if (itemAppend.classList.contains('active')) {
        itemAppend.append(this);
        this.style.top = `${itemAppend.offsetTop}px`;
        this.style.left = `${itemAppend.offsetLeft}px`;
    }
    else {
        this.style.top = `${itemAppend.offsetTop}px`;
        this.style.left = `${itemAppend.offsetLeft}px`;
    }
}
