import { 
    setCelebrities, 
    setSpinner,
} from "rich-list/rich-list.actions";
import { 
    setCurreny
} from "filters/filter.actions";

const filterMiddleware = ({ getState, dispatch }) => next => action => {
    if (action.type === "GET_CELEBRITIES") {
        fetch("get-celebrities")
            .then(res => res.json())
            .then(data => {
                dispatch(
                    setCelebrities(data.celebrityList)
                );

                dispatch(
                    setSpinner(false)
                );

                dispatch(
                    setCurreny({
                        ausRate: data.australianDollarValue || 0,
                        usRate: data.usDollarValue || 0,
                        euroRate: data.euroValue || 0,
                    })
                )
            });
    }

    next(action);
};

export { filterMiddleware as default };