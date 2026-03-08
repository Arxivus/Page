document.addEventListener('DOMContentLoaded', () => {
    showHiddenSections()

    setTimeout(() => {
        const statBlocks = document.querySelectorAll('.about-us-section__stat-block');

        function animateBlock(index) {
            if (index >= statBlocks.length) return;

            const statBlock = statBlocks[index];
            const numberEl = statBlock.querySelector('.about-us-section__stat-number');
            const endValue = Number(numberEl.getAttribute('value'));

            statBlock.classList.add(`about-us-number-animation${index + 1}`);

            const result = animateNumbers(numberEl, 0, endValue, 2)
            if (result) {
                setTimeout(() => animateBlock(index + 1), 300)
            };

        }

        animateBlock(0)
    }, 1000);

    const blocks = document.querySelectorAll('.menu-section__block');
    blocks.forEach(block => {
        const img = block.querySelector('.menu-section__hover-image');

        block.addEventListener('mousemove', (e) => {
            const rect = block.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            img.style.left = x - img.offsetWidth / 2 + 'px';
            img.style.top = y - img.offsetHeight / 2 + 'px';
        });
    });

});


function showHiddenSections() {
    const hiddenElements = document.querySelectorAll('.hidden');

    function checkElementsVisibility() {
        const triggerBottom = window.innerHeight * 0.9

        hiddenElements.forEach(elem => {
            const positionOnTop = elem.getBoundingClientRect().top;
            if (positionOnTop < triggerBottom) {
                elem.classList.add('visible');
            }
        })
    }

    window.addEventListener('scroll', checkElementsVisibility);
    checkElementsVisibility()
}

function animateNumbers(numberEl, startValue, endValue, duration) {
    if (startValue >= endValue) return false;

    let current = startValue
    const increment = 1
    const stepTime = Math.abs(Math.floor(duration * 10))

    const timer = setInterval(function () {
        current += increment
        numberEl.innerHTML = current
        if (current == endValue) {
            clearInterval(timer)
        }
    }, stepTime);

    return true
}
