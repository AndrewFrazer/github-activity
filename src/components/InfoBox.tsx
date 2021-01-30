import React, {FunctionComponent} from 'react';

type InfoBoxProps = {
    name: string;
    bio?: string;
}

export const InfoBox: FunctionComponent<InfoBoxProps> = ({ name, bio }) => {
    return (
        <div className="InfoBox">
            <h2>
                {name}
            </h2>
            <p>
                {bio}
            </p>
        </div>
    );
}