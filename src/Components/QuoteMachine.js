import React from 'react';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faTumblr } from '@fortawesome/fontawesome-free-brands';

const iconStyle = {
    background: 'green',
    color: 'white',
    width: '25px',
    height: '25px',
    borderRadius: '0'
};

const QuoteMachine = ({ selectedQuote, assignNewQuoteIndex }) => (
    <Card>
        <CardContent>
            <Typography id="text">
                {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
            </Typography>
        </CardContent>
        <CardActions>
            <IconButton
                style={iconStyle} 
                id="tweet-quote"
                target="_blank" 
                href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote}`}>
                <FontAwesomeIcon icon={ faTwitter} size="sm"/>
            </IconButton>
            <IconButton 
                style={iconStyle} 
                id="tumblr-quote"
                target="_blank" 
                href={`https://tumblr.com/intent/tumblr?text=${selectedQuote.quote}`}>
                <FontAwesomeIcon icon={ faTumblr } size="sm"/>
            </IconButton>
            <Button 
                id="new-quote"
                size="small" 
                onClick={assignNewQuoteIndex}>Next Quote
            </Button>
        </CardActions>
    </Card>
);

export default QuoteMachine;