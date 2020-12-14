import { primary, secondary, ternary, white, decline} from '../../constants/style.constants';

const styles = {
  button: {
    "background-color": primary,
    color: "white",
    border: "1px solid white",
    padding: "10px 20px",
    "border-radius": "5px",
    "font-size": "20px",
    cursor: "pointer"
  },
  text: {
    color: white,
    "&:hover": {
      color: secondary,
    },
  },
  cancelButton: {
    "&:hover": {
      color: decline,
    }
  },
};

export default styles;

