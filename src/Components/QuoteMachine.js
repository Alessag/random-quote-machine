import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

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

const byStyle = {
    fontWeight: '300',
    marginTop: '15px'

};

const QuoteMachine = ({ selectedQuote, assignNewQuoteIndex }) => (
    <Box>
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
                    href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${selectedQuote.author}+&content=+${selectedQuote.quote}+&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}>
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
        <Box 
            display="flex" 
            justifyContent="center"
            style={byStyle} >
            by&nbsp;
            <Link  
                target="_blank" 
                href="https://github.com/Alessag" 
                color="textPrimary">Alessandra
            </Link>
        </Box>
    </Box>
);

export default QuoteMachine;