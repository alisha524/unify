import React, { useState,useEffect } from 'react'
import { Button, Paper, Grid, Typography, Link } from '@mui/material'


export default function InviteHackathon({ID}) {

	const handleSubmit = () => {
        e.preventDefault();
    }

	useEffect(() =>{
		axios.get('hackathon/getDetails')
		.then((res=> console.log(res)) )
	})
    
	const handleChange = () => {}
	return (
		<Grid container alignItems='center' justifyContent='center' >
			<Grid item>
				<Paper sx={{ p: 2 }}>
					<form>
						<Grid
							container
							direction='column'
							justifyContent='center'
							alignItems='center'
							spacing={1}
						>
							
						    Invite

							<Button sx={{ mt: 2 }} type='submit' variant='contained' color='primary'>
								Complete
							</Button>
						</Grid>
					</form>
				</Paper>
				
				
			</Grid>
		</Grid>
    )
}
