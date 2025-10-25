import { useState } from "react";

export default function Login({ onLogin }: { onLogin: (username: string) => void }) {
    const [inputText, setInputText] = useState('');

    return (
        <div className="form">
            <h2>Введите ваш никнейм (любой не пустой): </h2>

            <input type="text" id="username" name="username" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <button type="submit" onClick={() => {
                if (inputText.trim()) {
                    onLogin(inputText);
                } else {
                    alert("Пожалуйста, введите не пустой никнейм.");
                }
            }}>Войти</button>

        </div>
    );

}
