import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { initializeData, setEvent } from '../../actions/main/main';
import Main from '../../components/Main';

const mapStateToProps = (state) => ({
  creditAgreements: state.main.creditAgreements,
  loading: state.main.loading,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ initializeData, setEvent }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
