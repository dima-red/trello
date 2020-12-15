import {primary, secondary, ternary, decline} from '../../constants/style.constants';

export const styles = {
    listWrapper: {
        color: primary,
        border: `2px solid ${ternary}`,
        "border-radius": "5px",
        margin: "20px",
        "background-color": secondary,
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
        "&:hover": {
            "background-color": ternary,
            "& $text": {
                "color": primary,
            },
        },
        text: {},
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

        "&:hover": {
            "border-color": primary,
        },
        "margin-left": "1px",
    },
};

export default styles;

