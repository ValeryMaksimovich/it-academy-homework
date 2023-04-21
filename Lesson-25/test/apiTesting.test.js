const axios = require('axios');
const validator = require('jsonschema');
const matchesListLiveSchema = require('../data/matchesListLiveSchema.v2.json');
const getLeaguesSchema = require('../data/getLeaguesSchema.json')


describe('API tests', function () {
    test('status code should be 200', async () => {
        const response = await axios.get('https://livescore6.p.rapidapi.com/matches/v2/get-innings', {
            params: {Eid: '723844', Category: 'cricket'},
            headers: {
                'X-RapidAPI-Key': '405e8d2494mshcb5fc9bbcbf0272p1b2eb6jsnea6f8042c851',
                'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'

            }
        });
        expect(response.status).toEqual(200)
    })

    test('json schema should be valid', async () => {
        const response = await axios.get('https://livescore6.p.rapidapi.com/matches/v2/get-innings', {
            params: {Eid: '723844', Category: 'cricket'},
            headers: {
                'X-RapidAPI-Key': '405e8d2494mshcb5fc9bbcbf0272p1b2eb6jsnea6f8042c851',
                'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'

            }
        });
        const result = await validator.validate(response.data, matchesListLiveSchema);
        expect(result.valid).toEqual(true)
    })
    test('status code should be 200 by using post ', async () => {
        const response1 = await axios.post('https://pick-lotto-numbers.p.rapidapi.com/lottoapp/public/api/lotto-result', {
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '405e8d2494mshcb5fc9bbcbf0272p1b2eb6jsnea6f8042c851',
                'X-RapidAPI-Host': 'pick-lotto-numbers.p.rapidapi.com'
            },
            data: '{"halves":"H60","oddeven":"6:0","twins_number":"=0"}'
        });
        expect(response1.status).toEqual(200)
    })
    test('status code is 200', async () => {
        const response2 = await axios.get('https://league-of-legends-esports.p.rapidapi.com/leagues', {
            headers: {
                'X-RapidAPI-Key': '405e8d2494mshcb5fc9bbcbf0272p1b2eb6jsnea6f8042c851',
                'X-RapidAPI-Host': 'league-of-legends-esports.p.rapidapi.com'
            }
        });
        expect(response2.status).toEqual(200)
    })
    test('json schema is valid', async () => {
        const response2 = await axios.get('https://league-of-legends-esports.p.rapidapi.com/leagues', {
            headers: {
                'X-RapidAPI-Key': '405e8d2494mshcb5fc9bbcbf0272p1b2eb6jsnea6f8042c851',
                'X-RapidAPI-Host': 'league-of-legends-esports.p.rapidapi.com'
            }
        });
        const result = await validator.validate(response2.data, getLeaguesSchema);
        expect(result.valid).toEqual(true)
    })
})

