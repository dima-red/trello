import { primary, decline } from '../../constants/color.constants';

const styles = {
    listItem: {
        display: "flex",
        "margin-bottom": "10px",
        "height": "26px",
    },
    trash: {
        "&:hover": {
            color: decline,
        },
    },
};

export default styles;

