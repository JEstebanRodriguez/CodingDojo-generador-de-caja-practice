import React from 'react'
import style from '../style/grid.module.css'

export const GridItem = ({ color }) => {
	return (
		<div
			className={style.grid__item}
			style={{
				width: color.dimension ? `${color.dimension}px` : '100px',
				height: color.dimension ? `${color.dimension}px` : '100px',
				backgroundColor: color.code
			}}>
			<span>{color.code}</span>
		</div>
	)
}
