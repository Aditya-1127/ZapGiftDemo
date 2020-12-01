import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';

export default class FetchFacebook extends Component {

    state = {
        auth: false,
        name: '',
        picture: '',
        birthday:'',
        user_friends:'',
        friends:[]

    };

    responseFacebook = response => {
        // console.log(response);
        let tmpArray = []
        for (var i = 0; i < response.friends.data.length; i++) {
            tmpArray.push(response.friends.data[i].name)
        }

        if(response.status !== 'unknown')


        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url,
            birthday:response.birthday,
            user_friends:response.friends.summary.total_count,
            friends: tmpArray


        });
        console.log(this.state.friends)
        
    }

    componentClicked = () => {
        console.log('Facebook btn clicked');
    }

    render(){
        let facebookData;
        
        this.state.auth ?
        facebookData = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    color: '#000'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    

                        
                            <h2>Welcome {this.state.name}! This is your birthday {this.state.birthday}  {this.state.user_friends} {this.state.friends} </h2> 
                        
                    {
                   (this.state.friends.length !=0) ? this.state.friends.map(friend => {return <p>{friend}</p>}) : ""}
                    
                    
                </div>
            ) : 
            facebookData = (<FacebookLogin
                appId="684283498894043"
                autoLoad={true}
                fields="name,picture,birthday,friends"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);

        return (
            <>
                {facebookData}
            </>
        );
    }
}
