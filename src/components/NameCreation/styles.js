import {primary, secondary, ternary, decline} from '../../constants/style.constants';

const styles = {
    listNameInput: {
        border: "1px solid grey",
        "border-radius": "5px",
    },
    summary: {
        "text-align": "center",
        display: "flex",
        margin: "20px",
    },
    listNameButton: {
        padding: "2px 6px",
        border: "1px solid grey",

        "&:hover": {
            "border-color": primary,
        },
        "margin-left": "1px",
    },
};

export default styles;

