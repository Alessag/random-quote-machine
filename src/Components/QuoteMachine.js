import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faTumblr } from '@fortawesome/fontawesome-free-brands';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const iconStyle = {
    background: '#f50057',
    color: 'white',
    width: '20px',
    height: '20px',
    borderRadius: '0'
};

const quoteStyles = {
    fontWeight: '300', 
    fontSize: '1.5em'
};

const footerStyles = {
    display: 'block',
    paddingRight: '0',
    paddingTop: '25px'
};

const buttonStyle = {
    float: 'right'
};

const authorStyle = {
    textAlign: 'right',
    paddingTop: '20px', 
    fontWeight: '300'
}

const cardStyle = {
    padding: '40px 50px'
};

const quoteLeftStyle = {
    marginRight: '5px',
    color: '#f50057'
};

const QuoteMachine = ({ selectedQuote, assignNewQuoteIndex }) => (
    <Card style={cardStyle}>
        <Box 
            display="block"
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Typography id="text" style={quoteStyles}>
                <FontAwesomeIcon 
                    icon={faQuoteLeft} 
                    style={quoteLeftStyle} 
                    size="sm"
                />
                {selectedQuote.quote}<br />
            </Typography>
            <Typography style={authorStyle}>
                - <span id="author">{selectedQuote.author}</span>
            </Typography>
        </Box>
        <CardActions style={footerStyles}>
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
                style={buttonStyle}
                variant="contained"
                color="secondary"
                id="new-quote"
                size="medium" 
                onClick={assignNewQuoteIndex}>Next Quote
            </Button>
        </CardActions>
    </Card>
);

export default QuoteMachine;