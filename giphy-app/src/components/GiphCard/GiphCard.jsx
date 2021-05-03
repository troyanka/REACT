import React from 'react';
// TODO: check if needed
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './GiphCard.scss'
import Moment from 'react-moment';


const GiphCard = ({ cardInfo }) => {
    // const classes = useStyles();

    return (
        <Card >
            <CardContent className="card-giph">
                <Typography variant="h1" component="h1" className='card-title'>
                    {cardInfo.title}
                </Typography>

                <Typography variant="subtitle1" component="span" className='card-date'>
                    <Moment format="DD/MM/YYYY">
                        {cardInfo.import_datetime}
                    </Moment>
                </Typography>

                {/* TODO: change the data come from */}
                <img src={cardInfo.images.preview_gif.url} className='card-thumbnail' />
            </CardContent>
        </Card>
    );
}

export default GiphCard;