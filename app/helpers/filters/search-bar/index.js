import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import SearchBar from "./search-bar.component";
import * as filterActions from "filters/filter.actions";

const mapDispatchToProps = (dispath) => ({
    ...bindActionCreators({
        ...filterActions,
    }, dispath),
});

const SearchFilter = connect(null, mapDispatchToProps)(SearchBar);
export { SearchFilter };