import Game from "./Game";

type GameUIPropsTypes = {
    handleBack: () => void;
};

export default function GameUI({ handleBack }: GameUIPropsTypes) {

    return (
        <div className="game-ui">
            <Game />
            <div className="ui-wrapper">

                <div className="enemies-side">
                    <div className="header">
                        <button className="back" onClick={handleBack}>⬅️</button>
                    </div>
                </div>
                <div className="bita-side">
                    <div className="left-block">

                    </div>
                    
                    <div className="btn-block">
                        <button>Бита</button>
                        <button>Снять</button>
                    </div>
                </div>
                <div className="my-side">
                    <div className="hint-block">
                        <p>Подсказка: Ходите с меньших карт</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
