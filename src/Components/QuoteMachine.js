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

const QuoteMachine = ({ selectedQuote, assignNewQuoteIndex }) => (
    <Card>
        <CardContent>
            <Typography id="text">
                {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
            </Typography>
        </CardContent>
        <CardActions>
            <IconButton 
                id="tweet-quote"
                target="_blank" 
                href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote}`}>
                <FontAwesomeIcon icon={ faTwitter} size="md"/>
            </IconButton>
            <IconButton 
                id="tumblr-quote"
                target="_blank" 
                href={`https://tumblr.com/intent/tumblr?text=${selectedQuote.quote}`}>
                <FontAwesomeIcon icon={ faTumblr } size="md"/>
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