const btn = document.querySelector('#share');
const resultPara = document.querySelector('#result');

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
  