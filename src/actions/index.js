import request from 'superagent';
import axios from "axios";


const CALENDAR_ID = 'trentzen63@gmail.com';
const API_KEY = '';

let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
    request
        .get(url)
        .end((err, resp)=> {
            if(!err) {
                const events = []
                JSON.parse(resp.text).items.map((event)=> {
                    events.push({
                        start: event.start.date || event.start.dateTime,
                        end: event.end.data || event.end.dateTime,
                        title: "Busy"
                        
                    });
                });

                callback(events)
            }
        })
}

//mongo database calls below

export function loadData() {
    console.log("test");
    return(dispatch)=> {
        return axios.get("/trentinthecity").then((response)=> {
            dispatch(setData(response.data.data))
        }).catch((error)=> {
            throw error;
        })
    }
}

export function addData(data) {
    return (dispatch)=> {
        return axios.post("/trentinthecity", data).then((response)=> {
            dispatch(loadData())
        }).catch((error)=> {
            throw error;
        })
    }
}

export function deleteData(id) {
    return (dispatch)=> {
        return axios.delete(`/trentinthecity/${id}`).then((response)=> {
            dispatch(loadData());
        }).catch((error)=> {
            throw error;
        })
    }
}

export function changeData(id, data) {
    return (dispatch)=> {
        return axios.put(`/trentinthecity/${id}`, data).then((response)=> {
            dispatch(loadData());
        }).catch((error)=> {
            throw error;
        })
    }
}

export function setData(prices) {
    return {
        type: "SET_DATA",
        prices
    }
}
