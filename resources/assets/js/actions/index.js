import axios from 'axios';

export const ACTIONS = {
    FETCH_RESULT: 'FETCH_RESULT',
    FETCH_PERSON: 'FETCH_PERSON',
    FETCH_FACILITY: 'FETCH_FACILITY',
    FETCH_EXPOSURE: 'FETCH_EXPOSURE'
};

export function fetchResult(personsName) {
    return dispatch => {
        return fetchPersonAjax(personsName).then(({ data }) => {
            dispatch({ type: ACTIONS.FETCH_PERSON, payload: data });

            return Promise.all([
                fetchFacilityAjax(data.val1).then(({ data }) => dispatch({ type: ACTIONS.FETCH_FACILITY, payload: data })),
                fetchExposureAjax(data.val2).then(({ data }) => dispatch({ type: ACTIONS.FETCH_EXPOSURE, payload: data }))
            ]).then(() => dispatch({ type: ACTIONS.FETCH_RESULT }));
        });
    };
}

function fetchPersonAjax(personsName) {
    return axios.get(`/api/person/${ personsName }`);
}

function fetchFacilityAjax(facilityId) {
    return axios.get(`/api/facility/${ facilityId }`);
}

function fetchExposureAjax(exposureId) {
    return axios.get(`/api/exposure/${ exposureId }`);
}
