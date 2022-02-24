import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { DateTime } from 'luxon';
import './GiphCard.scss'
import { useSelector } from 'react-redux';

const GiphCard = ({ cardInfo }) => {
    const { title, import_datetime, images } = cardInfo;
    const { showDates, showNames } = useSelector(({ gihpyState }) => gihpyState.viewState);

    return (
        <Card >
            <CardContent className="card-giph">

                {
                    showNames &&
                    <Typography variant="h1" component="h1" className='card-title'>
                        {title}
                    </Typography>
                }

                {
                    showDates &&
                    <Typography variant="subtitle1" component="span" className='card-date'>
                        {DateTime.fromSQL(import_datetime).toLocaleString(DateTime.DATE_SHORT)}
                    </Typography>
                }

                <img src={images.preview_gif.url} className='card-thumbnail' />
            </CardContent>
        </Card>
    );
}

export default GiphCard;