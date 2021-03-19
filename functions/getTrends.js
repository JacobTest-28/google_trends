exports.handler = async function (event) {
    let result = '';
    const query = event.queryStringParameters
    const array = query['bob'].split(",");
    const googleTrends = require('google-trends-api');
    let lastYearToday = new Date();
    var pastYear = lastYearToday.getFullYear() - 1;
    lastYearToday.setFullYear(pastYear);
    console.log(lastYearToday.toLocaleDateString());
    result = await googleTrends.interestOverTime({
        keyword: array,
        startTime: lastYearToday, geo: 'US'
    }).catch(function (err) {
        console.error('Oh no there was an error', err);
    });
    return {
        statusCode: 200,
        body: result
    }
}