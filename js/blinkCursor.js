(() => {
    let cursorIsVisible = true;
    let cursorDuration = 550;
    
    setInterval(() => {
        const cursor = document.getElementById('eol-cursor');

        cursor.style.color = cursorIsVisible
            ? 'black'
            : 'white';

        cursorIsVisible = !cursorIsVisible;
    }, cursorDuration);
})();