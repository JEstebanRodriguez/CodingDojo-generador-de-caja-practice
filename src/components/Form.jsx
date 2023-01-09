import React, { useState } from 'react'
import style from '../style/form.module.css'

export const Form = ({ setNewColor }) => {
	const [color, setColor] = useState('')
	const [dimension, setDimension] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		setNewColor((item) => [
			...item,
			{ code: color, dimension: dimension ? dimension : null }
		])
	}

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<div className={style.group}>
				<label htmlFor='color' className={style.label}>
					Haz click para seleccionar el color 👇
				</label>
				<input
					type='color'
					name='color'
					value={color}
					onChange={(e) => setColor(e.target.value)}
					className={style.input}
				/>
			</div>
			<div className={style.group}>
				<label htmlFor='dimension' className={style.label}>
					Ancho/Alto
				</label>
				<input
					type='number'
					name='dimension'
					placeholder='Ej: 100'
					value={dimension}
					onChange={(e) => setDimension(e.target.value)}
					className={style.input_color}
				/>{' '}
				px
			</div>
			<button type='submit' className={style.btn}>
				Add
			</button>
		</form>
	)
}
