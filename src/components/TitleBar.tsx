import React from 'react';
import { AvatarPort, InfoBox } from "./index";
import '../css/TitleBar.css';

type TitleState = {
    name: string;
    bio?: string;
    avatar_url: string;
}

type TitleProps = {
    login: string
}

export class TitleBar extends React.Component<TitleProps, TitleState> {
    constructor(props: TitleProps){
        super(props);
        this.state = {
            name: "Loading...",
            avatar_url: ""
        }
    }

    // componentDidMount?
    componentWillMount(){
        let url = `https://api.github.com/users/${this.props.login}`;
        try {
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                return response.json();
            })
            .then((data: TitleState) => {
                console.log(JSON.stringify(data));
                this.setState({
                    name: data.name,
                    bio: data.bio,
                    avatar_url: data.avatar_url,
                });
            })
        } catch (e) {
            console.log('err', e);
        }
    }

    render() {
        return (
            <div className="TitleBar">
                <header className="TitleBar-header">
                    <AvatarPort avatar_url={this.state.avatar_url}/>
                    <InfoBox name={this.state.name} bio={this.state.bio}/>
                </header>
            </div>
        );
    }
}