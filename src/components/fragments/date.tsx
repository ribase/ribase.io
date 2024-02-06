import React from "react";
import moment from "moment";

export default function StringToDate(
    props: {
        dateString: string,
        format: string,
    }
) {
    return (
        <>
            { moment(props.dateString).format(props.format) }
        </>
    )
}