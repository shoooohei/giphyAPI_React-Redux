import Search from "../components/Search";
import { connect } from "react-redux";

// actionを読み込む
import getUrls from "../actions/getUrls";

const mapStateToProps = state => {
  return {
    buttonText: state.buttonText
  };
};

// actionをdispatchするメソッドをpropsとして渡す
const mapDispatchToProps = dispatch => {
  return {
    getUrls: word => {
      dispatch(getUrls(word));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
