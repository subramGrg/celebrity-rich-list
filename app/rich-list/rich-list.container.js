import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import RichList from "./rich-list.component";
import * as richListActions from "./rich-list.actions";
import { celebrityList as filterList } from "helpers";

const mapDispatchToProps = (dispath) => ({
    ...bindActionCreators({
        ...richListActions,
    }, dispath),
});

const mapStateToProps = (store) => {
    const list = filterList(store);

    return {
        list,
        spinner: store.filtersReducer.spinner,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RichList);