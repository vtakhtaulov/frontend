import { combineReducers } from 'redux'


const initialState = {
    FIO: "Тахтаулов Вячеслав Владимирович",
    DateBD: "05.11.1998",
    login: "vtakhtaulov",
    email: "vtakhtaulov@bk.ru",
    phone: "89924203920",
    dat: "06.01.2020"

}
 function userInfo(state = initialState) {
    return state
}

const rootReduser = combineReducers({userInfo})

export default rootReduser