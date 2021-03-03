exports.handler =  async function (event) {



        const googleTrends = require('google-trends-api');
const helper = ['red hat', 'blue ball'];
        const array = helper.split(",");
        googleTrends.interestOverTime({keyword: array,
            startTime: new Date('2020-01-01'), geo: 'US'})
            .then(function(results){
                console.log('These results are awesome', results);
                //helper = results;
            })
            .catch(function(err){
                console.error('Oh no there was an error', err);
            });
        console.log(`Hi ${helper}!`)


}