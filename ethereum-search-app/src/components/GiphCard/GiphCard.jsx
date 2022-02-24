import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { DateTime } from 'luxon';
import './GiphCard.scss'

const GiphCard = ({ cardInfo }) => {

    return (
        <Card >
            <CardContent className="card-giph">
                <Typography variant="h1" component="h1" className='card-title'>
                    {cardInfo.title}
                </Typography>

                <Typography variant="subtitle1" component="span" className='card-date'>
                    {DateTime.fromSQL(cardInfo.import_datetime).toLocaleString(DateTime.DATE_SHORT)}
                </Typography>

                <img src={cardInfo.images.preview_gif.url} className='card-thumbnail' />
            </CardContent>
        </Card>
    );
}

export default GiphCard;