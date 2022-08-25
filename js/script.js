

function yearOf ()  {
    
    const year = $("#year").val();
    
    if (year >= 1990 && year <= 1994) {
        alert("peak shoegaze, birth of it all")
    } else if(year >= 1995 && year <= 1999) {
        alert("late but still peak shoegaze")
    } else if (year >= 2000 && year <= 2009) {
        alert("avant garde shoegaze, somewhere around here they invented 'nugaze' (what even is nugaze? i dont know)")
    } else if (year >= 2010 && year <= 2016) {
        alert("the rebirth of dreampop and shoegaze 2.0")
    } else if (year >= 2017 && year <= 2022) {
        alert("i dont know, we are still figuring it out")
    }
}
