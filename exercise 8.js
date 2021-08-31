/*
    Jerusalem is ancient, famous and a capital
    Tel Aviv is famous and coastal
    Acre is coastal and ancient
    Katzrin is ancient
    Zikim is coastal
    Musmus is not any of the above
*/

function guessCity(capital, coastal, famous, ancient) {
    capital = capital ? b1000 : 0
    coastal = coastal ? b0100 : 0
    famous = famous ? b0010 : 0
    ancient = ancient ? b0001 : 0
    const val = capital | coastal | famous | ancient;
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