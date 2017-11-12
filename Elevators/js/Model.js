
var eChallenge = eChallenge || {};

eChallenge.data = {
    "building": [
        {
            "title": "Building 1",
            "floors": 11,
            "elevator": [
                {
                    "title": "Elevator 1"
                },
                {
                    "title": "Elevator 2"
                },
                {
                    "title": "Elevator 3"
                }
            ]
        }
    ]
};

eChallenge.utils = {
    divBuilding: null,
    divElevator: null,
    divFloor: null,
    divBtn: null,
    floorHeight: 66.55,
    floorHeightPX: 66.55 + 'px',
    numOfFloors: eChallenge.data.building[0].floors,
    elevatorHeight: (66.55 * (eChallenge.data.building[0].floors + 1)),
    elevatorHeightPX: (66.55 * (eChallenge.data.building[0].floors + 1)) + "px",
    speedTransition: 500,
    elevatorsHeightArr: new Array(),
    elevatorsArr: new Array()
}