import React from 'react'
import style from '../style/grid.module.css'
import { GridItem } from './GridItem'

export const Grid = ({ colors }) => {
	return (
		<div className={style.grid}>
			{colors.map((color, idx) => (
				<GridItem key={idx} color={color} />
			))}
		</div>
	)
}
