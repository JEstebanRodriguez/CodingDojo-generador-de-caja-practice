import React, { useState } from 'react'
import { Container } from './components/Container'
import { Form } from './components/Form'
import { Grid } from './components/Grid'

export const App = () => {
	const [colors, setColors] = useState([])
	return (
		<Container>
			<Form setNewColor={setColors} />
			<Grid colors={colors} />
		</Container>
	)
}
