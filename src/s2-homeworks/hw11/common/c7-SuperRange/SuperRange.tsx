import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider

            sx={{ // стили для слайдера // пишет студент
                width:"150px",mr:"20px",
                color: '#8b8b8b', // Цвет трека по умолчанию
                '& .MuiSlider-thumb': {
                    width: 18, // Размер круга
                    height: 18, // Размер круга
                    backgroundColor: '#fff', // Белый фон круга
                    borderRadius: '50%', // Сделать круг
                    border: '2px solid #0c2', // Зелёная обводка
                    boxShadow: 'none', // Убираем тень
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%', // Центр по вертикали
                        left: '50%', // Центр по горизонтали
                        width: '6px', // Размер внутреннего круга
                        height: '6px', // Размер внутреннего круга
                        borderRadius: '50%', // Сделать круг
                        backgroundColor: '#0c2', // Зеленый цвет
                        transform: 'translate(-50%, -50%)', // Центрирование относительно родителя
                    },

                },
                '& .MuiSlider-track': {
                    height: 4, // Толщина трека
                    color: '#0c2', // Зеленый цвет трека
                },
                '& .MuiSlider-rail': {
                    opacity: 1,
                },


            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
