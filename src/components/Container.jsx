import React from 'react'
import style from '../style/container.module.css'

export const Container = ({ children }) => {
	return <div className={style.container}>{children}</div>
}
