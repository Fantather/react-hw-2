// Создайте классовый компонент DataLoader
// Используйте метод жизненного цикла componentDidMount() для имитации загрузки данных, например, с помощью setTimeout
// Измените состояние isLoading с true на false через 2 секунды
// Пока isLoading равно true, отображайте "Загрузка...", а затем "Данные загружены!"

import React from "react";

export class DataLoader extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount()
    {
        setTimeout(() =>{
            this.setState({
                isLoading: false
            });
        }, 2000)
    }

    render(){
        return(
            <div>{this.state.isLoading? 'Загрузка...' : 'Данные загружены!'}</div>
        );
    }
}