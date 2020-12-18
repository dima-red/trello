import { primary, secondary, ternary } from '../../constants/color.constants';

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
};

export default styles;

