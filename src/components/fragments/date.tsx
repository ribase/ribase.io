import moment from "moment/moment";
import {useEffect, useState} from "react";

export default function StringToDate({ dateString } : { dateString: string }) {
    const date: string = moment(dateString).format('Y');

    return (
        <>
            {date}
        </>
    )
}