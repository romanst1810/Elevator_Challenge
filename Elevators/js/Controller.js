var eChallenge = eChallenge || {};
eChallenge.utils = eChallenge.utils || {};
eChallenge.data = eChallenge.data || {};

$(document).ready(function () {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'AppData/ding.mp3');
    eChallenge.utils.divBuilding = document.createElement("div");
    eChallenge.utils.divBuilding.className = "building";
    eChallenge.utils.divBuilding.id = "building_" + "1";
    
    for (var f = eChallenge.utils.numOfFloors; f >= 0; f--) {
        eChallenge.utils.divFloor = document.createElement("div");
        eChallenge.utils.divFloor.className = "floor";
        eChallenge.utils.divFloor.id = "floor" + f;
        eChallenge.utils.divFloor.style.height = "60px";
        eChallenge.utils.divFloor.style.width = "100px";

        eChallenge.utils.divBtn = document.createElement("input");
        eChallenge.utils.divBtn.type = 'button';
        eChallenge.utils.divBtn.className = "metal linear";
        eChallenge.utils.divBtn.id = "btnOrder" + f;
        eChallenge.utils.divBtn.value = f;

        $(eChallenge.utils.divBtn).click(function () {

            var floorNumToCalcElevator = eChallenge.utils.numOfFloors - $(this).val() + 1;
            var floorNumToGoto = parseInt($(this).val());
            var currentElevatorFloor = null;
            var selectedElevator = null;
            var minDistance = eChallenge.utils.numOfFloors + 1;
            for (var e = 0; e < eChallenge.utils.elevatorsHeightArr.length; e++) {
                currentElevatorFloor = parseInt((eChallenge.utils.elevatorHeight - parseFloat(eChallenge.utils.elevatorsHeightArr[e])) / eChallenge.utils.floorHeight);
                if (Math.abs(floorNumToGoto - currentElevatorFloor) < minDistance) {
                    minDistance = Math.abs(floorNumToGoto - currentElevatorFloor);
                    selectedElevator = e;
                }
            }
            var timeSpanToMove = (eChallenge.utils.speedTransition * minDistance);
            eChallenge.utils.elevatorsHeightArr[selectedElevator] = eChallenge.utils.floorHeight * floorNumToCalcElevator;
            $(eChallenge.utils.elevatorsArr[selectedElevator]).animate({ height: eChallenge.utils.elevatorsHeightArr[selectedElevator] + 'px' },
                timeSpanToMove, function () {
                    if (!audioElement.paused) audioElement.pause();
                    audioElement.currentTime = 0;
                    audioElement.play();
                });
        });

        $(eChallenge.utils.divFloor).append(eChallenge.utils.divBtn);

        if (f >= 0 && f !== eChallenge.utils.numOfFloors) {
            var newdivS = document.createElement("div");
            newdivS.style.background = "#000000";
            newdivS.style.height = "7px";
            newdivS.style.width = "100px";
            $(eChallenge.utils.divBuilding).append(newdivS);
        }
        $(eChallenge.utils.divBuilding).append(eChallenge.utils.divFloor);
    }

    $('.panel').append(eChallenge.utils.divBuilding);

    for (var e = 0; e < eChallenge.data.building[0].elevator.length; e++) {
        eChallenge.utils.divElevator = document.createElement("div");
        eChallenge.utils.divElevator.className = "elevator";
        eChallenge.utils.divElevator.style.height = eChallenge.utils.elevatorHeightPX;
        eChallenge.utils.divElevator.id = "elevator" + e;
        eChallenge.utils.elevatorsHeightArr.push(eChallenge.utils.elevatorHeight);
        eChallenge.utils.elevatorsArr.push(eChallenge.utils.divElevator);
        $('.panel').append(eChallenge.utils.divElevator);
    }
});