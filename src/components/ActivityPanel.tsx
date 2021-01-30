import React from 'react';

interface ICommit {
    name: string;
    date: Date;
    commit_id: string;
}

const stubCommitList : Array<ICommit> = [
    {
        name: "calendar reacts to setChore.",
        date: new Date(2019, 4, 15),
        commit_id: "1d3c4e540eb936d1fb55b778da3130a03fb36f79"
    },
    {
        name: "Added month names to calendar.",
        date: new Date(2019, 4, 15),
        commit_id: "022b4e874358b99bd2d7a607dc1c250fe79bf81c"
    },
    {
        name: "Added tooltips to calendar squares.",
        date: new Date(2019, 4, 7),
        commit_id: "f122b964f77d5d0cbbd96050fe3125e0b5964cea"
    },
    {
        name: "squares change colour based on days points.",
        date: new Date(2019, 3, 28),
        commit_id: "26cc3657518ea5cdef2d6d9f4f5d57f194e7447b"
    },
    {
        name: "Added setChores function and script to generate json.",
        date: new Date(2019, 3, 27),
        commit_id: "cfaecd2b41d978bb4ec86baee07dcb3854979ca2"
    },
    {
        name: "Merged server changes from master",
        date: new Date(2019, 3, 27),
        commit_id: "e4c9a87e9c1073d715c2e6b963ec3ca999f82ce7"
    },
    {
        name: "Constructing a schema from typedefs and resolvers.",
        date: new Date(2019, 3, 27),
        commit_id: "7dea048da71a4ce6b910c7fc643c71042d0c3127"
    }
];

const ActivityPanel: React.FC<ICommit> = ({name, date, commit_id}: ICommit) => {
    return(
        <div className="ActivityPanel-listitem">
            <h3>{name}</h3>
            <p>{date.toDateString()} {commit_id}</p>
        </div>
    );
}


export const ActivityPanelList: React.FC = () => {
    const listItems = stubCommitList.map((commit: ICommit) => 
        <ActivityPanel
            key = {commit.commit_id}
            name={commit.name}
            date={commit.date}
            commit_id={commit.commit_id} 
            />
    );  

    return (
        <div className="ActivityPanelList">
            {listItems}
        </div>
    );
  }