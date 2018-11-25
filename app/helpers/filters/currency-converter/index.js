import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CurrencyOption from "./converter.component";
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

const CurrencyConverterFilter = connect(null, mapDispatchToProps)(CurrencyOption);

export { CurrencyConverterFilter };