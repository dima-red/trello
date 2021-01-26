import { ternary } from '../../constants/color.constants';

export const styles = {
    summary: {
        "text-align": "center",
        "margin": "10px 10px 0",
    },
    description: {
        "box-shadow": "0 1px 0 rgba(9, 30, 66, 0.25)",
        "background-color": ternary,
        "border-radius": "5px",
        "margin-bottom": "10px",
        "font-size": "15px",
        padding: "10px",
        cursor: "grab",
        "&:active": {
            cursor: "grabbing",
        },
    },
    dateTime: {
        "font-size": "12px",
        "text-align": "right",
        "align-self": "center",
        display: "block",
    },
    text: {
        overflow: "hidden",
        "text-overflow": "ellipsis",
        display: "block",
    }
};

export default styles;
