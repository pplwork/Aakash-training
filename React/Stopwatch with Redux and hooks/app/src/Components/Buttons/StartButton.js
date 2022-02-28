import { connect } from "react-redux";
import { ClickStartButton } from "../../Actions/ClickStartButton";
let i;

const StartButton = (props) => {
  const handleStart = () => {
    if (props.isStarted === false) {
      i = setInterval(() => {
        props.start();
      }, 10);
    }
  };

  return (
    <button
      onClick={handleStart}>
      Start
    </button>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    start: () => {
      dispatch(ClickStartButton(i));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);