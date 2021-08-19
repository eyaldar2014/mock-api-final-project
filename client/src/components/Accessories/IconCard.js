// import react from 'react'

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// icons:
import { GrPhone } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";

const IconCard = ({ icon, body, bottom }) => {

  let iconDesplay

  switch (icon) {
    case ('phone'):
      iconDesplay = <GrPhone />
      break;
      case ('mail'):
      iconDesplay = <BiMailSend />
      break;
    default:
      iconDesplay = ''
  }


  return <>
    <Card >
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {iconDesplay}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
      </Typography>
        <br />
        <Typography variant="body2" color="textSecondary" component="p">
          <span className='blue'>{bottom}</span>
        </Typography>
      </CardContent>
    </Card>
  </>
}

export default IconCard;
