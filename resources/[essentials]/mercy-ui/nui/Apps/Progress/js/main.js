var Progress = RegisterApp('Progress');



Progress.addNuiListener("Start", (Data) => {
    $('.progressbar-text').text(Data.Title);
    const durationInMilliseconds = parseInt(Data.Duration);
    const durationInSeconds = durationInMilliseconds / 1000;
    $('.progress-bar-fill').css('transition', `width ${durationInSeconds}s ease`);

    $('.timer').text(formatTime(durationInSeconds)); // Set initial timer value

    $('.progress-bar-container').fadeIn(250, function () {
        $('.progressbar-text, .timer').show();
        $('.progress-bar-fill').css("width", "100%");

        let startTime = Date.now();
        let countdownInterval = setInterval(() => {
            let elapsedTime = Date.now() - startTime;
            let remainingTime = Math.max(0, durationInMilliseconds - elapsedTime);
            updateTimer(remainingTime);

            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                $.post('https://mercy-ui/Progress/Done', JSON.stringify({}));
                $('.progress-bar-container').fadeOut(500, function () {
                    $('.progress-bar-fill').css("width", "0");
                    $('.progressbar-text, .timer').hide();
                });
            }
        }, 1000);
    });
});

Progress.addNuiListener("Stop", () => {
    $('.progress-bar-container').fadeOut(500, function () {
        $('.progressbar-text, .timer').hide();
        $('.progress-bar-fill').css("width", "0");
    });
});

function updateTimer(timeInMilliseconds) {
    const formattedTime = formatTime(timeInMilliseconds / 1000);
    $('.timer').text(formattedTime);
}

function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
