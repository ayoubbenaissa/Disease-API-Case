import {MetaProps} from "../types/meta";

import "../styles/Meta.scss";
import moment from "moment";

export const Meta = ({contact, info, lastCheckedForUpdate, lastUpdate, source}: MetaProps) => {
    return (
        <>
        <div className="meta-wrapper">
            <div className="meta">Meta:</div>
            <div className="meta-contact">{contact}</div>
            <div className="meta-info"><a href={info} target="_blank">GitHub Link</a></div>
            <div className="meta-lastCheckedForUpdate">{moment(lastCheckedForUpdate).format('DD-MM-YYYY')}</div>
            <div className="meta-lastUpdate">{moment(lastUpdate).format('DD-MM-YYYY')}</div>
            <div className="meta-source">{source}</div>
        </div>
        </>
    )
};