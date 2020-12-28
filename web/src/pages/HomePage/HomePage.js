import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/forms'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const HomePage = () => {
  const [lego, setLego] = useState();
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  

  const onSubmit = (data) => {
    console.info(data.setnumber)

    fetch(
      `https://rebrickable.com/api/v3/lego/sets/${data.setnumber}/parts/?key=316a3d5b865d0c6612fb412bd6ac291a`
    )
      .then((response) => response.json())
      .then((json) => setLego(json))
  }

  class LPart extends React.Component {
    // Example url
    // https://cdn.rebrickable.com/media/parts/elements/300526.jpg"
    render() {
      return (
        <>
          <div class="flex-vertical">
            <img
              src={this.props.lpart.part.part_img_url}
              alt={this.props.lpart.part.name}
              width="42"
              height="42"
            />
            <p>Name: {this.props.lpart.part.name}</p>
            <p>Color: {this.props.lpart.color.name}</p>
            <p>Transparency: {this.props.lpart.color.is_trans}</p>
          </div>
        </>
      )
    }
  }

  // Items from the JSON for set peices that we want:
  // results[0].part.name 								//display the part name
  // results[0].part.part_img_url				//display the part image
  // results[0].color.name					//display the part color and whether the part is transparent
  // results[0].color.is_trans			//display whether the part is transparent
  // results[0].quantity									//repeat the image of the part as many times as as it appears in the set
  // results[0].is_spare									//do not display part if this is true? Not too sure about this
  // results[0].element_id								//display the part id from lego

  return (
    // <>
    //   <h1>SetselectPage</h1>
    //   <p>
    //     Find me in <code>./web/src/pages/SetselectPage/SetselectPage.js</code>
    //   </p>
    //   <p>
    //     My default route is named <code>setselect</code>, link to me with `
    //     <Link to={routes.setselect()}>Setselect</Link>`
    //   </p>
    // </>
    <>
      <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
        <TextField
          name="setnumber"
          placeholder="Lego Set number"
          maxLength="15"
          // validation={{ required: false, pattern: /^[\d\-]{15}$/ }}
        />
        <Submit>Go</Submit>
      </Form>

      {lego && JSON.stringify(lego.results[0].part.part_img_url)}
      <div class="flex-container">
      
        {lego &&
          lego.results.map((lPart) => <Card className={classes.root}>
          <CardContent><LPart key={lPart.id} lpart={lPart} /></CardContent>
    </Card>)}
            
      </div>
    </>
  )
}

export default HomePage


// http://24.5.50.252

// API call for elements in a particular set
// https://rebrickable.com/api/v3/lego/sets/{set_num}/parts/

// API call for element in a particlar set with my ~real~ API key
// curl https://rebrickable.com/api/v3/lego/sets/{set_num}/parts/?key=316a3d5b865d0c6612fb412bd6ac291a

// Mark's key: 0f6ef57156125b9aa4c9ce65775df761
