(() => {
    let cursorIsVisible: boolean = true;
    let cursorDuration: number = 550;
    
    setInterval(() => {
        const cursor: HTMLElement = document.getElementById('eol-cursor');

        cursor.style.color = cursorIsVisible
            ? 'black'
            : 'white';

        cursorIsVisible = !cursorIsVisible;
    }, cursorDuration);
})();