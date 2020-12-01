import { createUseStyles } from 'react-jss'

export const styles = createUseStyles({
  listWrapper: {
    border: "2px solid white",
    "border-radius": "5px",
    margin: "20px"
  },
  summary: {
    "text-align": "center",
    "margin-bottom": "20px",
  },
  description: {
    border: "2px solid white",
    "border-radius": "5px",
    width: "70%",
    margin: "0 auto",
    "font-size": "15px",
  },
  dateTime: {
    "font-size": "10px",
    "text-align": "right",
    padding: "10px",
    display: "block",
  }
});


