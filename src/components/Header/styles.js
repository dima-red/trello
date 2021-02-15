import { ternary } from '../../constants/color.constants';

const styles = {
    appHeader: {
        display: "flex",
        "justify-content": "space-between",
        "border-bottom": `2px solid ${ternary}`,
        position: "fixed",
        width: "100%",
    },
    headerRight: {
        display: "flex"
    },
    headerLeft: {},
};

export default styles;
