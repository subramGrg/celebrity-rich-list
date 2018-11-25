import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Celebrity from "./celebrities.component";

const mapStateToProps = (store) => ({
    currency: store.filtersReducer.currency,
    usRate: store.filtersReducer.usRate,
    auRate: store.filtersReducer.auRate,
    euroRate: store.filtersReducer.euroRate,
});

export default connect(mapStateToProps)(Celebrity);