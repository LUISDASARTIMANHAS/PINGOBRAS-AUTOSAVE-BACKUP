function participantConnected(participant) {
    var labelDiv = document.createElement('div');
    labelDiv.setAttribute('class', 'label');
    labelDiv.innerHTML = participant.identity;
    participantDiv.appendChild(labelDiv);
  const shareScreen = document.getElementById('share_screen');
var screenTrack = "https://pingobras.glitch.me";
  
shareScreen.addEventListener('click', shareScreenHandler);
  function shareScreenHandler() {
    event.preventDefault();
    if (!screenTrack) {
        navigator.mediaDevices.getDisplayMedia().then(stream => {
            screenTrack = new Twilio.Video.LocalVideoTrack(stream.getTracks()[0]);
            room.localParticipant.publishTrack(screenTrack);
            shareScreen.innerHTML = 'Stop sharing';
            screenTrack.mediaStreamTrack.onended = () => { shareScreenHandler() };
        }).catch(() => {
            alert('Could not share the screen.');
        });
    }
    else {
        room.localParticipant.unpublishTrack(screenTrack);
        screenTrack.stop();
        screenTrack = null;
        shareScreen.innerHTML = 'Share screen';
    }
};
  function connectButtonHandler(event) {
    event.preventDefault();
    if (!connected) {
        connect(username).then(() => {
            shareScreen.disabled = false;
        }).catch(() => {
       });
    }
   else {
        disconnect();
        shareScreen.innerHTML = 'Share screen';
        shareScreen.disabled = true;
    }
};
  function addLocalVideo() {
    Twilio.Video.createLocalVideoTrack().then(track => {
        var video = document.getElementById('local').firstChild;
        var trackElement = track.attach();
        trackElement.addEventListener('click', () => { zoomTrack(trackElement); });
        video.appendChild(trackElement);
    });
};
  function trackSubscribed(div, track) {
    var trackElement = track.attach();
    trackElement.addEventListener('click', () => { zoomTrack(trackElement); });
    div.appendChild(trackElement);
};

  function zoomTrack(trackElement) {
    if (!trackElement.classList.contains('participantZoomed')) {
        // zoom in
        container.childNodes.forEach(participant => {
            if (participant.className == 'participant') {
                participant.childNodes[0].childNodes.forEach(track => {
                    if (track === trackElement) {
                        track.classList.add('participantZoomed')
                    }
                    else {
                        track.classList.add('participantHidden')
                    }
                });
                participant.childNodes[1].classList.add('participantHidden');
            }
        });
    }
    else {
        // zoom out
        container.childNodes.forEach(participant => {
            if (participant.className == 'participant') {
                participant.childNodes[0].childNodes.forEach(track => {
                    if (track === trackElement) {
                        track.classList.remove('participantZoomed');
                    }
                    else {
                        track.classList.remove('participantHidden');
                    }
                });
                participant.childNodes[1].classList.remove('participantHidden');
            }
        });
    }
};
  function trackUnsubscribed(track) {
    track.detach().forEach(element => {
        if (element.classList.contains('participantZoomed')) {
            zoomTrack(element);
        }
        element.remove()
    });
};