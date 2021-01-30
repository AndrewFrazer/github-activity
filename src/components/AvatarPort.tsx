import React, {Component} from 'react';
import logo from '../logo.svg';

type AvatarPortProps = {
    avatar_url: string;
}

export class AvatarPort extends Component<AvatarPortProps> {
    // constructor(props: AvatarPortProps) {
    //     super(props)
    // }

    render() {
        let image = <img width="120" height="120" className="AvatarPort-img" src={logo} alt="Avatar loading..."/>;
        if (this.props.avatar_url !== "") {
            image = <img width="120" height="120" className="AvatarPort-img" src={this.props.avatar_url} alt="Github Avatar"/>
        }
        return (
            <div className="AvatarPort">
                {image}
            </div>
        );
    }
}