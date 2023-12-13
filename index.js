// code your solution here
function saturdayFun (name = "roller-skate"){
    return "This Saturday, I want to " + name + "!";
}

function mondayWork (name2="go to the office"){
    return "This Monday, I will " + name2 +".";
}

function wrapAdjective(highlight="*"){
    return function (adjective="special") {
        return `You are ${highlight}${adjective}${highlight}!`

    }
}

wrapAdjective('*')