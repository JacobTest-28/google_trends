exports.handler =  async function (event) {

console.log("hi I am in func")
    const googleTrends = require('google-trends-api');
    const array = ['red hat', 'blue ball'];
    let lastYearToday = new Date();
    var pastYear = lastYearToday.getFullYear() - 1;
    lastYearToday.setFullYear(pastYear);
    console.log(lastYearToday.toLocaleDateString());

    googleTrends.interestOverTime({
        keyword: array,
        startTime: lastYearToday, geo: 'US'
    })
        .then(function (results) {
            console.log('These results are awesome', results);


        }).catch(function (err) {
        console.error('Oh no there was an error', err);
    });
}