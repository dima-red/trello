import {primary, secondary, ternary, decline} from '../../constants/color.constants';

const styles = {
    listNameInput: {
        border: "1px solid grey",
        "border-radius": "5px",
    },
    listItem: {
        "text-align": "center",
        display: "flex",
        margin: "20px",
    },
    listNameButton: {
        padding: "2px 6px",
        border: `1px solid ${primary}`,

        "&:hover": {
            "border-color": primary,
        },
        "margin-left": "1px",
    },
    textArea: {
        "align-self": "flex-end",
    },
};

export default styles;

