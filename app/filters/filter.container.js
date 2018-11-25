import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Filter from "./filter.component";
import * as filterActions from "./filter.actions";

const mapDispatchToProps = (dispath) => ({
    ...bindActionCreators({
        ...filterActions,
    }, dispath),
});

const mapStateToProps = (store) => ({
    celebrities: store.filtersReducer.celebrities,
    spinner: store.filtersReducer.spinner,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);