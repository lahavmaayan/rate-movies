const request = require('request-promise');
const init = require('server/initDB/app');

const proxiedRequest = process.env.HTTP_PROXY
    ? request.defaults({ proxy: process.env.HTTP_PROXY })
    : request;
const appKey = 'a37ceb600ec44e1d8cb0edb4b0852ab2';

const getInitialData = async () => {
    const response = await proxiedRequest(
        'https://api.themoviedb.org/3/search/movie?api_key=' +
            appKey +
            '&language=en-US&query=%22a%22&page=1&include_adult=false'
    );
    const data = JSON.parse(response);
    const currentPage = data.page;
    const pages = data.total_pages;
    const movies = data.results;
    console.log('current page:', currentPage);
    console.log('data:', pages);
};

getInitialData();
