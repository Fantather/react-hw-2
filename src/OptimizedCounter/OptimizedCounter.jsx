// Создайте классовый компонент OptimizedCounter, похожий на Counter. Добавьте кнопку "Обновить"
// Используйте метод жизненного цикла shouldComponentUpdate(nextProps, nextState)
// Сделайте так, чтобы компонент обновлялся только в том случае, если новое значение count четное
// Нажатие на кнопку "Обновить" должно увеличивать count на 1

import React from "react";

export class OptimizedCounter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            currentValue: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if((nextProps.currentValue % 2) === 0 || (nextState.currentValue % 2) === 0)
        {
            return true;
        }

        return false;
    }

    handleIncreaseClick = () => {
        this.setState((prevState) => ({
            currentValue: prevState.currentValue + 1
        }));
    }

    render(){
        return (
            <div>
                <div>Текущее число: {this.state.currentValue}</div>
                <button type="button" onClick={this.handleIncreaseClick}>Увеличить</button>
            </div>
        );
    }
} 