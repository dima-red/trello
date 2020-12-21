import { primary, secondary, ternary } from '../../constants/color.constants';

export const styles = {
    wrapper: {
        color: primary,
        border: `2px solid ${ternary}`,
        "border-radius": "5px",
        margin: "20px",
        "background-color": secondary,
        height: "fit-content",
        "min-width": "270px",
    },
    footer: {
        display: "flex",
        "margin-bottom": "10px",
        "justify-content": "space-around",
    },
    addTaskButton: {
        padding: "5px 10px",
        "font-size": "12px",
    },
};

export default styles;

