let myMonth = 15;// 10;

function getMonthName (mo) {
    mo--;

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];

    if(months[mo]) {
        return months[mo];
    } else {
        throw new Error('InvalidMonthNo');
    }
}

try{
    let monthName = getMonthName(myMonth);
    console.log(monthName);
} catch (e) {
    //let monthName = 'unknown';
    //console.log('Error', e.message);
    console.logMyErrors(e);
}
