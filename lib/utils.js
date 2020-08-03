function generateHtml(html) {
  return `
 <script>
      let timeOutTimer = null;
      let timeIntervalTimer = null;
      let height = null;
      let repeatTimes = 0;

      function postMessage() {
        if(repeatTimes === 10){
          clearTimer();
        }
        if (window.originalPostMessage) {
          if (height === document.body.scrollHeight) {
            repeatTimes++;
            return;
          }
          repeatTimes = 0;
          height = document.body.scrollHeight;
          window.postMessage(document.body.scrollHeight);
        }
      }

      function clearTimer() {
        if (!timeIntervalTimer) {
          clearInterval(timeIntervalTimer);
        }
        if (!timeOutTimer) {
          clearTimeout(timeOutTimer);
        }
      }

      window.onload = function () {
        postMessage();
        timeIntervalTimer = setInterval(postMessage, 10);
        timeOutTimer = setTimeout(clearTimer, 5000);
      };
    </script>${html}`;
}

export { generateHtml };
