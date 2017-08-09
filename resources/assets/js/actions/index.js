import axios from 'axios';

export const ACTIONS = {
    RESULT_FETCH: 'RESULT_FETCH',
    APP_BUSY:     'APP_BUSY',
    APP_ERROR:    'APP_ERROR'
};

export function fetchResult(personsName) {
    return dispatch => {
        dispatch({ type: ACTIONS.APP_BUSY, payload: true });

        return fetchPersonAjax(personsName).then(({ data: personsData }) => {
            return Promise.all([
                fetchFacilityAjax(personsData.val1).then(response => response.data),
                fetchExposureAjax(personsData.val2).then(response => response.data)
            ]).then(([ facilityData, exposureData ]) => {
                dispatch({ type: ACTIONS.RESULT_FETCH, payload: { ...personsData, ...facilityData, ...exposureData, name: personsName } });
                dispatch({ type: ACTIONS.APP_BUSY, payload: false });
            });
        }).catch(() => {
            dispatch({ type: ACTIONS.APP_BUSY, payload: false });
            dispatch({ type: ACTIONS.APP_ERROR, payload: true });
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
