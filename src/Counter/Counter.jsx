// Создайте классовый компонент Counter
// Он должен иметь состояние count, инициализированное значением 0
// Компонент должен отображать текущее значение count

// Используя компонент Counter из предыдущей задачи, добавьте кнопку с текстом "Увеличить"
// Реализуйте обработчик события onClick для кнопки, который увеличивает значение count в состоянии на 1 при каждом нажатии
import React from "react";

export class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            currentValue: 0
        }
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