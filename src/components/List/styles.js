import { primary, secondary, ternary, white} from '../../constants/style.constants';

export const styles = {
  listWrapper: {
    color: primary,
    border: `2px solid ${white}`,
    "border-radius": "5px",
    margin: "20px",
    "background-color": ternary,
  },
  listFooter: {
    display: "flex",
    "margin-bottom": "10px",
  },
  addTaskButton: {
    padding: "5px 10px",
    "font-size": "15px",
  },
};

export default styles;

