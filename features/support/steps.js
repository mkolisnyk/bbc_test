import { When, Then, world } from '@cucumber/cucumber';
import {expect} from 'chai';
import {client} from '../../lib/client.js';

When('I make a GET request to {string}', async (endpoint) => {
    let response = null;
    try {
        response = await client().get(endpoint);
    } catch(err) {
        response = err.response
    }
    world.resp = response;
});

Then('I should see the HTTP status code of the response is {int}', (code) => {
    expect(world.resp.status).to.equal(code);
});

Then('the response time of the request is below {int} milliseconds', (milliseconds) => {
    expect(world.resp.headers['request-duration']).to.be.lessThanOrEqual(milliseconds);
});

Then('the error object has the properties:', (dataTable) => {
    const fields = Object.keys(world.resp.data.error);
    dataTable.rows().forEach((row) => {
        expect(fields.includes(row[0]), `Unable to find field ${row[0]}`).to.be.true;
    });
});

Then('I should see the {string} value in the response header', (header) => {
    expect(Object.keys(world.resp.headers)).to.include(header.toLowerCase());
});

Then('I should see the {string} field is never null or empty for all items', function (field) {
    world.resp.data.schedule.elements.forEach((element) => {
        expect(element[field]).to.be.not.null;
        expect(element[field]).to.be.not.empty;
    });
});

Then('the {string} in {string} for every item is always {string}', function (field, item, value) {
    world.resp.data.schedule.elements.forEach((element) => {
        expect(`${element[item][field]}`).to.equal(`${value}`);
    });
});

Then('I should see the {string} field in {string} is never null or empty for any schedule item', function (field, section) {
    world.resp.data.schedule.elements.forEach((element) => {
        expect(element[section][field]).to.be.not.null;
        expect(element[section][field]).to.be.not.empty;
    });
});

Then('I should see the only one episode in the list has {string} field in {string} as {string}', function (field, section, value) {
    let liveCount = 0;
    world.resp.data.schedule.elements.forEach((element) => {
        if (`${element[section][field]}` == value) {
            liveCount++;
        }
    });
    expect(liveCount).to.equal(1);
});

Then('I should see the {string} date value is before the {string} date', function (start, end) {
    world.resp.data.schedule.elements.forEach((element) => {
        const startDate = Date.parse(element[start]);
        const endDate = Date.parse(element[end]);
        expect(endDate > startDate).to.be.true;
    });
});
