import axios from 'axios';

export const ACTIONS = {
    FETCH_RESULT: 'FETCH_RESULT',
};

export function fetchResult(personsName) {
    return dispatch => {
        return fetchPersonAjax(personsName).then(({ data: personsData }) => {
            return Promise.all([
                fetchFacilityAjax(personsData.val1).then(response => response.data),
                fetchExposureAjax(personsData.val2).then(response => response.data)
            ]).then(([ facilityData, exposureData ]) => dispatch({
                type: ACTIONS.FETCH_RESULT,
                payload: { ...personsData, ...facilityData, ...exposureData }
            }));
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
