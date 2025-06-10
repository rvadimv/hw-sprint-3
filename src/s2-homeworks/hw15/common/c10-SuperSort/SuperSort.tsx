import React from 'react'
import arrowTop from '../../assets/arrowTop.svg'
import arrowBottom from '../../assets/arrowBottom.svg'
import arrowNone from '../../assets/arrowNone.svg'

// добавить в проект иконки и импортировать
const downIcon = arrowBottom
const upIcon = arrowTop
const noneIcon = arrowNone

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '') return down
    if (sort === down) return up
    if (sort === up) return ''
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
                height: '36px',
                cursor: 'pointer',
            }}
        >
            {icon
                ? <img
                    id={id + '-icon-' + sort}
                    src={icon}
                    alt="sort icon"
                    style={{
                        width: 18,
                        height: 18,
                        objectFit: 'contain',
                        display: 'block',
                    }}
                />
                : noneIcon
            }


        </span>
    )
}

export default SuperSort
