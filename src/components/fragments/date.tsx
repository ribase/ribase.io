import moment from "moment/moment";
import { useEffect } from "react";

export default function StringToDate({ dateString } : { dateString: string }) {
    const date: any = new Date(dateString).getFullYear();

    return (
        <>
            { date }
        </>
    )
}