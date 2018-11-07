import React from 'react'
import MessageBox from './message-box'
import { Typography, withStyles } from '@material-ui/core'
import Space from './space'

const ErrorMessage = ({ classes }) => (
  <Space horizontal>
    <MessageBox className={classes.error}>
      <Typography variant='h6' component='h2'>Deu problema :(</Typography>
      <Typography>Por favor, tente novamente mais tarde.</Typography>
    </MessageBox>
  </Space>
)

const styles = {
  error: {
    background: '#ffe0e0',
    borderColor: '#e8aeae',

    '& h2, & p': {
      margin: 0,
      color: '#c12525',
    },

    '& p': {
      marginTop: 10,
    }
  }
}

export default withStyles(styles)(ErrorMessage)
