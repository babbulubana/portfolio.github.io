import React, { Component } from 'react'
import {Grid, Cell,List,ListItem,ListItemContent} from 'react-mdl'

 class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}> <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and 
                    more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu
                        
                        </p> </Cell>
                    <Cell col={6}> 
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
  <ListItem>
    <ListItemContent style={{fontFamily: 'Anton', 
    fontSize: '30px'}}> <i className="fa fa-phone-square" aria-hidden="true"/>(559)618-0559</ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent style={{fontFamily: 'Anton', 
    fontSize: '30px'}}> <i className="fa fa-envelope-square" aria-hidden="true"/>singh0901@yahoo.com</ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent style={{fontFamily: 'Anton', 
    fontSize: '30px'}}> <i className="fa fa-skype" aria-hidden="true"/>babbulubana</ListItemContent>
  </ListItem>
</List>
</div>
                    
                     </Cell>
                </Grid>
                
           </div>
        )
    }
}

export default Contact;
