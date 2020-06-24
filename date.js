function getDayName(dateString) {
    let dayName = new Date(dateString);
    let options = {
        weekday:'long'
    };
    // Write your code here
    
    return new Intl.DateTimeFormat('en-us',options).format(dayName);
}