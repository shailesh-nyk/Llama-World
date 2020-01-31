import React, { Component } from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Container from 'react-bootstrap/Container';
class TrendingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trending : ['986273329844633600','871685160374349825','1219747342208917504','1221957897292328960','996780574982443008','685417970638585858','1222020657678049286', '1221659167124938752', '1175277389070229504','1221539092162383873']
        }
    }
    render() {
        return (
            <div>
                <h2 style={{textAlign: "center", marginBottom: "20px", paddingTop: "20px"}}> Now trending #llamas </h2>
                <Container className="d-flex flex-wrap">
                    {this.state.trending.map(id => {
                        return (
                            <TwitterTweetEmbed style={{marginLeft: "50px"}}
                            tweetId={id}
                            />
                        )   
                    })}
                </Container>
            </div>
        )
    }
}

export default TrendingComponent