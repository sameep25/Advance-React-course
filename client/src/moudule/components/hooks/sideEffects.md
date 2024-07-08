#### Pure and Impure functions

**Pure Functions** - 
- No side efftes
- For same input always gives put same output
- Example
    ```
    function EstablishedYear(props){
        return <h1>Established Year : {props.year} </h1>
    }

    function App(){
        return <EstablishedYear year={2003} />
    }
    ```
**imPure Functions** :
- performs a side efftet
- ex : 
 1. invoke console.log - (call to a browser api)
 2. invoke fetch
 3. invoke geolocation

### useEffect Hook
Use effect hook takes two parameters
1. A Callback function (preferalby an arrow function)
2. An array

```
useEffect(function(){

} ,[])
```

**Note**
- If no second argument is passed then effect will run after every render.
- If an empty array[] is passed than effect will run after render once. (componentDidMount)
- If some argument is passed then effet will run after the value of that argument is changed.
- If callback returns a function ,React will run it when it's time to clean up resourses and free memory


