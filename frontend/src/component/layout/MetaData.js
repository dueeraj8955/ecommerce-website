import React from "react";
import Helmet from "react-helmet";

const MetsData = ({title}) => {
    return (
        <Helmet>
            <title>
                {title}
            </title>
        </Helmet>
    );
};

export default MetsData;