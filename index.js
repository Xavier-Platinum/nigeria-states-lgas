var statesAndLocalGov = require('./src/statesAndLocalGov.json');

function _lower(input) {
    return input.toLowerCase().trim()
}

const all = () => {
    return statesAndLocalGov;
}

const states = () => {
    return statesAndLocalGov.map(function (nigeriaStates) {
        return nigeriaStates.state;
    });
}

const senatorialDistricts = (state) => {
    state = _lower(state);

    if (!state || state == "") {
        throw new Error('Invalid Nigeria State');
    }

    if (['fct', 'f.c.t', 'abuja', 'f c t'].includes(state)) {
        state = 'Federal Capital Territory'
    }

    const response = statesAndLocalGov.find(function (nigeriaStates) {
        return _lower(nigeriaStates.state) === _lower(state);
    });
    return response.senatorial_districts;
}

const lgas = (state) => {
    state = _lower(state);

    if (!state || state == "") {
        throw new Error('Invalid Nigeria State');
    }

    if (['fct', 'f.c.t', 'abuja', 'f c t'].includes(state)) {
        state = 'Federal Capital Territory'
    }

    const response = statesAndLocalGov.find(function (nigeriaStates) {
        return _lower(nigeriaStates.state) === _lower(state);
    });
    return response.senatorial_districts;
}

module.exports = {
    all,
    states,
    senatorialDistricts,
    lgas
}