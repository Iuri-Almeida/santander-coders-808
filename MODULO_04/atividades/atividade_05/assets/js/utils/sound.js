export default function sound() {
    const audioButton = document.getElementById("sound");
    let soundState = true;

    function toggleSound(elem) {
        if (soundState) {
            elem.play()
            elem.pause();

        } else {
            elem.pause();
            elem.play()
        }
        elem.muted = !elem.muted;
    }
    var elems = document.querySelectorAll("video, audio");

    [].forEach.call(elems, function(elem) { toggleSound(elem); });
    audioButton.addEventListener('click', function() {
        soundState = !soundState
        if (soundState) {
            audioButton.classList = 'button button--flex muted'
        } else {
            audioButton.classList = 'button button--flex active'
        }
        var elems = document.querySelectorAll("video, audio");

        [].forEach.call(elems, function(elem) { toggleSound(elem); });
    });


}