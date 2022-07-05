const btn = document.querySelector('#share');
const resultPara = document.querySelector('#result');
const shareScreen = document.getElementById('share_screen');
var screenTrack;

        navigator.mediaDevices.then(stream => {
            screenTrack = new Twilio.Video.LocalVideoTrack(stream.getTracks()[0]);
            room.localParticipant.publishTrack(screenTrack);
        }).catch(() => {
            alert('Não foi possivel compartilhar a tela.')
        });
room.localParticipant.unpublishTrack(screenTrack);
        screenTrack.stop();
        screenTrack = null;

function participantConnected(participant) {
    var labelDiv = document.createElement('div');
    labelDiv.setAttribute('class', 'label');
    labelDiv.innerHTML = participant.identity;
    participantDiv.appendChild(labelDiv);
  }

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
        // ...
        connect(username).then(() => {
            // ...
            shareScreen.disabled = false;
        }).catch(() => {
        // ...
       });
    }
   else {
        disconnect();
        shareScreen.innerHTML = 'Share screen';
        shareScreen.disabled = true;
    }
};