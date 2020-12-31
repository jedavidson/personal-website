(() => {
    const cursorDuration: number = 550;
    let cursorIsVisible: boolean = true;

    setInterval(() => {
        const cursor: HTMLElement = document.getElementById('eol-cursor');

        cursor.style.color = cursorIsVisible
            ? 'black'
            : 'white';

        cursorIsVisible = !cursorIsVisible;
    }, cursorDuration);
})();