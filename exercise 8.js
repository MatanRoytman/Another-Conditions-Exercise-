/*
    Jerusalem is ancient, famous and a capital
    Tel Aviv is famous and coastal
    Acre is coastal and ancient
    Katzrin is ancient
    Zikim is coastal
    Musmus is not any of the above
*/

function guessCity(capital, coastal, famous, ancient) {
    capital = capital ? 0b1000 : 0
    coastal = coastal ? 0b0100 : 0
    famous = famous ? 0b0010 : 0
    ancient = ancient ? 0b0001 : 0
    const val = capital | coastal | famous | ancient;
    const places = {
    0b1011: "Jerusalem",
    0b0110: "Tel Aviv",
    0b0101: "Acre",
    0b0001: "Katzrin",
    0b0100: "Zikim",
    0b0000:"Musmus";
}
    if (val in places) {
        return places[val];
    } else {
        return ""
    }
}
    switch (val) {
        case ancient | famous | capital:
            return "Jerusalem";
        case famous | coastal:
            return "Tel Aviv";
        case coastal | ancient:
            return "Acre";
        case ancient:
            return "Katzrin";
        case coastal:
            return "Zikim";
        case 0:
            return "Musmus";
        default:
            return "";
    }
}
console.log(guessCity(false, false, false, true));

