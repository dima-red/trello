import {primary, secondary, ternary, decline} from '../../constants/color.constants';

const styles = {
    button: {
        "background-color": primary,
        color: ternary,
        border: `1px solid ${ternary}`,
        padding: "10px 20px",
        "border-radius": "5px",
        "font-size": "20px",
        cursor: "pointer",
    },

    mainButton: {
        "&:hover": {
            "border-color": secondary,
            "& $alertColor$text": {
                color: decline,
            },
            "& $text": {
                color: secondary,
            },
        },
    },
    additionalButton: {
        "font-weight": "bold",
        "&:hover": {
            "border-color": primary,
            "& $alertColor$text": {
                color: decline,
            },
            "& $text": {
                color: primary,
            },
            "background-color": ternary,
        },
    },

    text: {},
    alertColor: {},
};

export default styles;

