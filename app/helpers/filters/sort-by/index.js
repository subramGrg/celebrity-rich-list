import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import BirthPlaceOption from "./sort-by.component";
import * as filterActions from "filters/filter.actions";

const mapDispatchToProps = (dispath) => ({
    ...bindActionCreators({
        ...filterActions,
    }, dispath),
});

const SortByFilter = connect(null, mapDispatchToProps)(BirthPlaceOption);
export { SortByFilter };