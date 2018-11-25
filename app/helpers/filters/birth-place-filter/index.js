import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import BirthPlaceOption from "./birth-place.component";
import * as filterActions from "filters/filter.actions";

const mapDispatchToProps = (dispath) => ({
    ...bindActionCreators({
        ...filterActions,
    }, dispath),
});

const mapStateToProps = (store) => ({
    celebrities: store.filtersReducer.celebrities,
    spinner: store.filtersReducer.spinner,
});

const BirthPlaceFilter = connect(null, mapDispatchToProps)(BirthPlaceOption);
export { BirthPlaceFilter };