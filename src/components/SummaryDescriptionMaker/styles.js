import { primary } from '../../constants/color.constants';

const styles = {
    listItem: {
        "text-align": "center",
        display: "flex",
        "margin-bottom": "10px",
    },
    inputControls: {
        padding: "2px 6px",
        border: `1px solid ${primary}`,
        "&:hover": {
            "border-color": primary,
        },
        "margin-left": "1px",
    },
};

export default styles;

