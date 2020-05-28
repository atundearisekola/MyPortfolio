import React,{Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0,
        };

    }
    toggleCategories(){
        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    <Grid>
                    <Cell col={4} phone={12} tablet={6}>
                    <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.idgesg.net/images/article/2019/05/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-large.jpg) center /cover'}}>React Project #1</CardTitle>
                    <CardText>
                    On it follow, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>

                </Card>

                    </Cell>
                    <Cell col={4} phone={12} tablet={6}>
                    <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.idgesg.net/images/article/2019/05/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-large.jpg) center /cover'}}>React Project #1</CardTitle>
                    <CardText>
                    On it follow, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>

                </Card>

                    </Cell>

                    <Cell col={4} phone={12} tablet={6}>
                    <Card shadow={5} style={{minwidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.idgesg.net/images/article/2019/05/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-large.jpg) center /cover'}}>React Project #1</CardTitle>
                    <CardText>
                    On it follow, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>

                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>

                </Card>

                    </Cell>
                    </Grid>
                    

                

                </div>
                
            )
            
        }else if (this.state.activeTab === 1) {
            return(
                <div><h1>This is PHP/Laravel</h1></div>
            )
            
        }else if (this.state.activeTab === 2) {
            return(
                <div><h1>This is ReactJS</h1></div>
            )
            
        }else if (this.state.activeTab === 3) {
            return(
                <div><h1>This is React Native</h1></div>
            )
            
        }else if (this.state.activeTab === 4) {
            return(
                <div><h1>This is Python</h1></div>
            )
            
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs style={{marginTop: '30px'}} activeTab={this.state.activeTab} onChange={(tabid) => this.setState({activeTab: tabid})} ripple>
                    <Tab>JAVA</Tab>
                    <Tab>PHP/Laravel</Tab>
                    <Tab>ReactJS</Tab>
                    <Tab>React Native</Tab>
                    <Tab>Python</Tab>

                </Tabs>
                
                    <Grid >
                        <Cell col={12}>
        <div className="content"> {this.toggleCategories()}</div>

                        </Cell>

                    </Grid>
                   

               
            </div>
        )
    }
}

export default Projects;