// Создайте функциональный компонент ButtonWithLimit, который принимает свойство limit (число)
// Компонент также имеет состояние clicks (количество нажатий), начиная с 0
// Кнопка должна увеличивать clicks на 1, пока clicks не станет равным limit
// После достижения лимита кнопка должна стать неактивной (disabled)

import {useState} from 'react'

export function ButtonWithLimit()
{
    const [currentValue, setCount] = useState(0);
    return(
        <button type="button" onClick={() => {setCount(currentValue + 1)}}>Нажали {currentValue} раз</button>
    );
}