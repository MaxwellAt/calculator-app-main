const here = document.querySelector('main');
function As(){
    document.getElementById('out').type = 'um';
    document.getElementById('out').innerHTML = 0;
}
function H(x){
    const b = document.getElementById('out');
    if(b.type == 'um' || typeof(b.value) === "undefined"){
        const a = document.getElementById(x).id;
        b.innerHTML = a;
        b.value = a;
        b.type = 'dois';
    }else{
        const a = document.getElementById(x).id;
        b.innerHTML = b.innerHTML + a;
    }
}
function result(){
    const num = document.getElementById('out').innerHTML;
    const result = eval(num);
    document.getElementById('out').innerHTML = result;
}
function clear(){
    const p = document.getElementById('out').innerHTML;
    if(p.length > 1){
        document.getElementById('out').innerHTML = p.substring(0, p.length - 1);
    }else if(p.length === 1){
        document.getElementById('out').type = 'um';
        document.getElementById('out').innerHTML = 0;
    }
}
var parteDeCima = (
    <div Style='width:30em'>
        <div className='parteDeCima'>
            <span Style='font-size: 1.5em;'>calc</span>
            <div></div>
        </div>

        <br/>

        <div className='output'>
            <span id='out' type='um' Style='font-size: 1.5em;'>0</span>
        </div>

        <br/>

        <div className='parteDeBaixo'>
            <div className="linha">
                <div className='numero' onClick={() => H(7)} id="7">7</div>
                <div className='numero' onClick={() => H(8)} id="8">8</div>
                <div className='numero' onClick={() => H(9)} id="9">9</div>
                <div className='numero' Style='background-color:hsl(225, 21%, 49%);color:white!important' onClick={clear}>DEL</div>
            </div>
            <br/>
            <div className="linha">
                <div className='numero' onClick={() => H(4)} id="4">4</div>
                <div className='numero' onClick={() => H(5)} id="5">5</div>
                <div className='numero' onClick={() => H(6)} id="6">6</div>
                <div className='numero' onClick={() => H('+')} id="+">+</div>
            </div>
            <br/>
            <div className="linha">
                <div className='numero' onClick={() => H(1)} id="1">1</div>
                <div className='numero' onClick={() => H(2)} id="2">2</div>
                <div className='numero' onClick={() => H(3)} id="3">3</div>
                <div className='numero' onClick={() => H('-')} id="-">-</div>
            </div>
            <br/>
            <div className="linha">
                <div className='numero' onClick={() => H('.')} id=".">.</div>
                <div className='numero' onClick={() => H(0)} id="0">0</div>
                <div className='numero' onClick={() => H('/')} id="/">/</div>
                <div className='numero' onClick={() => H('*')} id="*">*</div>
            </div>
            <br/>
            <div className="linha">
                <div className='numero' Style='width:37%;background-color:hsl(225, 21%, 49%);color:white!important' onClick={As}>RESET</div>
                <div className='numero' Style='width:37%;background-color:hsl(6, 63%, 50%);color:white!important' onClick={result}>=</div>
            </div>
        </div>
    </div>
);
ReactDOM.render( parteDeCima, here);