
import { useState, useEffect } from 'react';
import './App.css';

function App() {
    
  


  const [total, setTotal] = useState('');

  const handleKeyPress = (e) => {
    switch (e.key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        setTotal(total + e.key);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
      case '.':
        setTotal(total + e.key);
        break;
      case 'Enter':
      // function operations(item){
      //   if(e.key=='+'){
      //     setTotal((total+item).toString)
      //    }
      //    else if(e.key=='-'){
      //     setTotal((total+item).toString)

      //    }
      //    else if(e.key=='*'){
      //     setTotal((total*item).toString)

      //    }

      //    else if(e.key=='/'){
      //     setTotal((total/item).toString)

      //    }

      // }
      // operations();
      calculate();
      
        break;
      case 'Backspace':
        onDelete();
        break;

        case 'Delete':
          clear();
          break;
      default:
        break;
    }
    // console.log(e)
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    // console.log("render.....")
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [total]);

  const handleClick = (e) => {
    setTotal(total.concat(e));
  };

  const clear = () => {
    setTotal('');
  };

  const onDelete = () => {
    setTotal(total.slice(0, -1));
  };

  const calculate = () => {
    try {
      setTotal(eval(total).toString());
    } catch (error) {
      setTotal('Error');
    }
  };


  return (
    <div className="App">
    <div className="container">
    <form >
    <input type="text" value={total}/>
    </form>
    <div className="keypad">
      
    
      <button onClick={clear} id='clear' className='highlight'>AC</button>
      <button onClick={onDelete} className="highlight" >DEL</button>
      <button name='/' className="highlight" onClick={() => handleClick('/')}>&divide;</button>
      <button name='7' className="val" onClick={() => handleClick('7')}>7</button>
      <button name='8' className="val" onClick={() => handleClick('8')}>8</button>
      <button name='9' className="val" onClick={() => handleClick('9')}>9</button>
      <button name='*' className="highlight" onClick={() => handleClick('*')}>&times;</button>
      <button name='4' className="val" onClick={() => handleClick('4')}>4</button>
      <button name='5' className="val" onClick={() => handleClick('5')}>5</button>
      <button name='6' className="val" onClick={() => handleClick('6')}>6</button>
      <button name='-' className="highlight" onClick={() => handleClick('-')}>-</button>
      <button name='1' className="val" onClick={() => handleClick('1')}>1</button>        
      <button name='2' className="val" onClick={() => handleClick('2')}>2</button>  
      <button name='3' className="val" onClick={() => handleClick('3')}>3</button>  
      <button name='+' className="highlight"onClick={() => handleClick('+')}>+</button>  
      <button name='0' className="val"onClick={() => handleClick('0')}>0</button>  
      <button name='.' className="val"onClick={() => handleClick('.')}>.</button>  
      <button onClick={calculate} id='equal' className="highlight">=</button>  
      </div>     
    </div>
    </div>
  );


}

export default App;
