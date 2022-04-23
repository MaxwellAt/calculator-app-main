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
    const num = document.getElementById('out').innerHTML + '';
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
// $('[name="teste"]').on('change', (e) => { 
//   let a = $('input[name="teste"]:checked');
//   if(a.val() === "2"){
//     console.log('tema 2');
//   }else{
//     console.log('asdasd');
//   }
// });
// $('input[name="teste"]').on('change', (e) => { 

//   });
function trocarTema(){
    let a = $('input[name="teste"]:checked');
    if(a.val() === "2"){
      temaDois();
    }else if(a.val() === "1"){
        temaUm();
        console.log('asdasd');
    }else{
        temaTres();
        console.log('asdasd');
    }
}
function temaTres(){
    $('body').css('background-color', 'hsl(268, 75%, 9%)');
    $('.parteDeCima').css('color', 'hsl(52, 100%, 62%)');
    $('.parteDeBaixo').css('background-color', 'hsl(268, 71%, 12%)');
    $('.stilos').css('background-color', 'hsl(268, 71%, 12%)');
    $('.reset').css('background-color', 'hsl(268, 47%, 21%)');
    $('.del').css('background-color', 'hsl(268, 47%, 21%)');
    $('.igual').css('background-color', 'hsl(176, 100%, 44%)');
    $('.output').css('background-color', 'hsl(268, 71%, 12%)');
    $('.output').css('color', 'hsl(52, 100%, 62%)');
    $('.numero').css('color', 'hsl(52, 100%, 62%)');
    $('.numero').css('background-color', 'hsl(281, 89%, 26%)');
}
function temaUm(){
    $('body').removeAttr('style');
    $('.parteDeCima').css('color', '');
    $('.parteDeBaixo').css('background-color', '');
    $('.stilos').css('background-color', '');
    $('.reset').css('background-color', '');
    $('.del').css('background-color', '');
    $('.igual').css('background-color', '');
    $('.output').css('background-color', '');
    $('.output').css('color', '');
    $('.numero').css('color', '');
    $('.numero').css('background-color', '');
}
function temaDois(){
    $('body').css('background-color', 'hsl(0, 0%, 90%)');
    $('.parteDeCima').css('color', 'hsl(60, 10%, 19%)');
    $('.parteDeBaixo').css('background-color', 'hsl(0, 5%, 81%)');
    $('.stilos').css('background-color', 'hsl(0, 5%, 81%)');
    $('.reset').css('background-color', 'hsl(185, 42%, 37%)');
    $('.del').css('background-color', 'hsl(185, 42%, 37%)');
    $('.igual').css('background-color', 'hsl(25, 98%, 40%)');
    $('.output').css('background-color', 'hsl(0, 0%, 93%)');
    $('.output').css('color', 'hsl(60, 10%, 19%)');
}
var parteDeCima = (
    <div Style='width:30em'>
        <div className='parteDeCima'>
            <span Style='font-size: 1.5em;margin-top: 20px;'>calc</span>
            <div Style='display:flex;align-items: center;'>
                <span Style='position: relative;margin: 5px;top: 13px;right:10px;font-size:10px'>THEME</span>
                <div>
                    <div Style='display: flex;justify-content: space-evenly;'>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </div>
                    <div onChange={trocarTema} className='stilos'>
                        <label className='rdoum'>
                            <input className='teste um' name='teste' value='1' type='radio' />
                            <span></span>
                        </label>
                        <label className='rdoum'>
                            <input className='teste dois' name='teste' value='2' type='radio'/>
                        <span></span>
                        </label>
                        <label className='rdoum'>
                            <input className='ops tres' name='teste' value='3' type='radio'/>
                            <span></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <br/>

        <div className='output'>
            <span id='out' type='um' Style='font-size: 1.5em;'>0</span>
        </div>

        <br/>

        <div className='parteDeBaixo'>
            <div className="linha">
                <div className='numero' onClick={() => H("7")} id="7">7</div>
                <div className='numero' onClick={() => H("8")} id="8">8</div>
                <div className='numero' onClick={() => H("9")} id="9">9</div>
                <div className='numero del' onClick={clear}>DEL</div>
            </div>
            <br/>
            <div className="linha">
                <div className='numero' onClick={() => H("4")} id="4">4</div>
                <div className='numero' onClick={() => H("5")} id="5">5</div>
                <div className='numero' onClick={() => H("6")} id="6">6</div>
                <div className='numero' onClick={() => H('+')} id="+">+</div>
            </div>
            <br/>
            <div className="linha">
                <div className='numero' onClick={() => H("1")} id="1">1</div>
                <div className='numero' onClick={() => H("2")} id="2">2</div>
                <div className='numero' onClick={() => H("3")} id="3">3</div>
                <div className='numero' onClick={() => H('-')} id="-">-</div>
            </div>
            <br/>
            <div className="linha">
                <div className='numero' onClick={() => H('.')} id=".">.</div>
                <div className='numero' onClick={() => H("0")} id="0">0</div>
                <div className='numero' onClick={() => H('/')} id="/">/</div>
                <div className='numero' onClick={() => H('*')} id="*">*</div>
            </div>
            <br/>
            <div className="linha">
                <div className='numero reset' onClick={As}>RESET</div>
                <div className='numero igual' onClick={result}>=</div>
            </div>
        </div>
    </div>
);
ReactDOM.render( parteDeCima, here);