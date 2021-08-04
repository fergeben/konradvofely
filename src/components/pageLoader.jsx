import React from "react";
import Loader from "react-spinners/PropagateLoader";

export default function PageLoader({ loading }) {
    if (!loading)
        return <></>;
    return (
        <div className="page-loader-wrapper">
            <div className="page-loader">
                <Loader color="white" loading={true} size={15} />
            </div>
        </div>
    );
}