import { COUNT_ITEM } from "../constants/constant"

export const setCountItem = (count) => {
    return {
        type: COUNT_ITEM,
        payload: count
    }
}   