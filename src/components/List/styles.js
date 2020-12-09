import { primary, secondary, ternary, white} from '../../constants/style.constants';

export const styles = {
  listWrapper: {
    color: primary,
    border: `2px solid ${white}`,
    "border-radius": "5px",
    margin: "20px",
    "background-color": ternary,
    height: "fit-content",
    "min-width": "270px",
  },
  listFooter: {
    display: "flex",
    "margin-bottom": "10px",
    "justify-content": "space-around",
  },
  addTaskButton: {
    padding: "5px 10px",
    "font-size": "12px",
  },


  summary: {
    "text-align": "center",
    display: "flex",
    margin: "20px",
  },
  listNameInput: {
    border: "1px solid grey",
    "border-radius": "5px",
  },
  listNameButton: {
    padding: "2px 6px",
    border: "1px solid grey",
  },

  description: {
    display: "flex",
  },
  taskNameButton: {
    "align-self": "flex-end",
  },

};

export default styles;

