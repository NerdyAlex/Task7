
// import SignUp from './SignUp.jsx';
// import LogIn from './LogIn.jsx';

function App() {

  const event = (e) => console.log(e.target.value) 

  return (
    <>
      {/* <LogIn /> */}
      <label >
        <input value={} type="text" />
      </label>
      <button onClick={(e) => event(e)}>Event On Daddy</button>
    </>
  )
}


export default App

/* 
target
: 
button
__reactFiber$r5ljt0bwrt
: 
FiberNode {tag: 5, key: null, elementType: 'button', type: 'button', stateNode: button, …}
__reactProps$r5ljt0bwrt
: 
children
: 
"Event On Daddy"
onClick
: 
(e) => event(e)
[[Prototype]]
: 
Object
accessKey
: 
""
ariaAtomic
: 
null*/