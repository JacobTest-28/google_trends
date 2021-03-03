exports.handler =  async function (event) {

console.log("hi I am in func")
    const googleTrends = require('google-trends-api');
    const array = ['red hat', 'blue ball'];

    googleTrends.interestOverTime({
        keyword: array,
        startTime: new Date('2020-01-01'), geo: 'US'
    })
        .then(function (results) {
            console.log('These results are awesome', results);


        }).catch(function (err) {
        console.error('Oh no there was an error', err);
    });
}