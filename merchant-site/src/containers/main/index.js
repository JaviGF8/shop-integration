import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { initializeData } from '../../actions/main/main';
import Main from '../../components/Main';

const mapStateToProps = (state) => ({
  creditAgreements: state.main.creditAgreements,
  loading: state.main.loading,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ initializeData }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
