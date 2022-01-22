import React from 'react'
import { AppBar, Toolbar, IconButton, Button, Typography, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'

const Navbar = () => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
					<FeatherIcon icon='menu' />
				</IconButton>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					Welcome
				</Typography>

				<FeatherIcon icon='user' />
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
